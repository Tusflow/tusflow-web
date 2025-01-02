---
title: Error Handling
description: A comprehensive overview of the features provided by our API.
---

## Error Response Format

All API errors follow this standard JSON format:

```json
{
    "error": {
        "code": "error_code",
        "message": "Human readable error message",
        "details": {
            "field": "Additional error context"
        }
    }
}
```

## Common Error Codes

### Authentication Errors (4xx)

| Code           | Status | Description                             | Solution                                                 |
| -------------- | ------ | --------------------------------------- | -------------------------------------------------------- |
| `unauthorized` | 401    | Missing or invalid authentication token | Ensure valid API key is included in Authorization header |
| `forbidden`    | 403    | Insufficient permissions                | Check if your API key has required permissions           |

### Upload Errors (4xx)

| Code                | Status | Description                       | Solution                                  |
| ------------------- | ------ | --------------------------------- | ----------------------------------------- |
| `file_too_large`    | 413    | File exceeds maximum allowed size | Check file size against API limits        |
| `invalid_offset`    | 409    | Upload offset mismatch            | Verify current offset with HEAD request   |
| `checksum_mismatch` | 460    | File checksum verification failed | Re-upload the chunk with correct checksum |

### Server Errors (5xx)

| Code            | Status | Description               | Solution                        |
| --------------- | ------ | ------------------------- | ------------------------------- |
| `server_error`  | 500    | Internal server error     | Retry request after brief delay |
| `storage_error` | 507    | Storage capacity exceeded | Contact support                 |

## Error Handling Best Practices

### 1. Implement Retry Logic

```javascript
async function uploadWithRetry(chunk, maxRetries = 3) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            return await uploadChunk(chunk);
        } catch (error) {
            if (error.status === 500 && attempt < maxRetries - 1) {
                await delay(Math.pow(2, attempt) * 1000);
                continue;
            }
            throw error;
        }
    }
}
```

### 2. Handle Specific Errors

```javascript
try {
    await uploadFile(file);
} catch (error) {
    switch (error.code) {
        case 'file_too_large':
            showFileSizeError(error.message);
            break;
        case 'invalid_offset':
            const currentOffset = await getCurrentOffset();
            resumeUpload(currentOffset);
            break;
        default:
            showGenericError(error.message);
    }
}
```

### 3. Rate Limiting

When encountering `429 Too Many Requests`:

```javascript
function handleRateLimit(response) {
    const retryAfter = response.headers.get('Retry-After');
    return new Promise((resolve) => {
        setTimeout(resolve, (retryAfter || 60) * 1000);
    });
}
```

## Monitoring and Debugging

1. Log all error responses with:

    - Error code
    - Request ID (from X-Request-ID header)
    - Timestamp
    - Request parameters

2. Monitor error rates for:
    - Sudden spikes in specific error codes
    - Persistent errors indicating system issues
    - Client-side implementation problems

## Error Prevention

1. Validate files before upload:

    - Check file size
    - Verify file type
    - Calculate checksum

2. Implement proper error handling:

    - Catch all potential exceptions
    - Provide meaningful error messages
    - Log errors for debugging

3. Follow API best practices:
    - Use correct content types
    - Include required headers
    - Respect rate limits
