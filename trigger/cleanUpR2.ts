import {
  DeleteObjectsCommand,
  ListObjectsV2Command,
  S3Client,
  _Object,
} from '@aws-sdk/client-s3';
import { logger, schedules } from '@trigger.dev/sdk/v3';

// Initialize S3 client for R2
const s3Client = new S3Client({
  region: 'auto',
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY!,
  },
});

// Create a job that runs every hour
export const cleanUpR2 = schedules.task({
  id: 'cleanup-r2-bucket',
  cron: '0 * * * *', // Runs every hour
  run: async () => {
    const bucketName = process.env.CLOUDFLARE_R2_BUCKET_NAME!;
    const expirationTime = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
    const BATCH_SIZE = 1000; // Maximum objects to delete in one batch

    // Metrics
    let totalObjectsScanned = 0;
    let totalObjectsDeleted = 0;
    let totalDeleteErrors = 0;

    try {
      let continuationToken: string | undefined;

      do {
        // List objects in the bucket with pagination and exponential backoff
        const listCommand = new ListObjectsV2Command({
          Bucket: bucketName,
          ContinuationToken: continuationToken,
        });

        const response = await s3Client.send(listCommand);

        const objects = response.Contents || [];
        continuationToken = response.NextContinuationToken;
        totalObjectsScanned += objects.length;

        // Get current time
        const now = new Date().getTime();

        // Collect objects to delete
        const objectsToDelete = objects
          .filter(
            (object: _Object) =>
              object.LastModified &&
              object.Key &&
              now - object.LastModified.getTime() > expirationTime
          )
          .map((object: _Object) => ({ Key: object.Key! }));

        // Delete in batches if there are objects to delete
        if (objectsToDelete.length > 0) {
          // Process in batches of BATCH_SIZE
          for (let i = 0; i < objectsToDelete.length; i += BATCH_SIZE) {
            const batch = objectsToDelete.slice(i, i + BATCH_SIZE);

            try {
              // Log batch deletion attempt
              logger.info(
                `Attempting to delete batch of ${batch.length} objects`
              );

              const deleteCommand = new DeleteObjectsCommand({
                Bucket: bucketName,
                Delete: { Objects: batch },
              });

              const deleteResult = await s3Client.send(deleteCommand);

              // Update metrics
              totalObjectsDeleted += deleteResult.Deleted?.length || 0;
              totalDeleteErrors += deleteResult.Errors?.length || 0;

              // Log successful deletions if any
              if (deleteResult.Deleted?.length) {
                logger.info(
                  `Successfully deleted ${deleteResult.Deleted.length} objects`
                );
              }

              // Log any errors
              if (deleteResult.Errors?.length) {
                deleteResult.Errors.forEach((error) => {
                  logger.error(
                    `Failed to delete object ${error.Key}: ${error.Message}`
                  );
                });
              }

              // Add a small delay between batches to prevent rate limiting
              if (i + BATCH_SIZE < objectsToDelete.length) {
                await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay between batches
              }
            } catch (error: unknown) {
              const errorMessage =
                error instanceof Error ? error.message : 'Unknown error';
              logger.error(`Batch deletion error: ${errorMessage}`);
              totalDeleteErrors += batch.length;

              // Add a longer delay after an error before continuing
              await new Promise((resolve) => setTimeout(resolve, 5000)); // 5 second delay after error
            }
          }
        }
      } while (continuationToken);

      // Log final metrics
      logger.info('R2 bucket cleanup completed', {
        metrics: {
          objectsScanned: totalObjectsScanned,
          objectsDeleted: totalObjectsDeleted,
          deleteErrors: totalDeleteErrors,
        },
      });
    } catch (error: any) {
      logger.error('Error during R2 bucket cleanup:', error);
      throw error;
    }
  },
});
