import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tusflow.vercel.app';

  // Core pages
  const routes = ['', '/docs', '/roadmap'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Main documentation sections
  const mainDocRoutes = [
    '/docs/api',
    '/docs/api/configuration',
    '/docs/openapi',
    '/docs/ui',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  // API Features documentation
  const featureRoutes = [
    '/docs/api/features',
    '/docs/api/features/resumable-uploads',
    '/docs/api/features/chunk-management',
    '/docs/api/features/edge-computing',
    '/docs/api/features/observability',
    '/docs/api/features/storage',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // API Middleware documentation
  const middlewareRoutes = [
    '/docs/api/middleware',
    '/docs/api/middleware/authentication',
    '/docs/api/middleware/rate-limit',
    '/docs/api/middleware/security',
    '/docs/api/middleware/file-validation',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // OpenAPI documentation
  const openApiRoutes = [
    '/docs/openapi/create-upload',
    '/docs/openapi/delete-upload',
    '/docs/openapi/get-health-status',
    '/docs/openapi/get-upload-info',
    '/docs/openapi/get-upload-status',
    '/docs/openapi/upload-file-chunk',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...routes,
    ...mainDocRoutes,
    ...featureRoutes,
    ...middlewareRoutes,
    ...openApiRoutes,
  ];
}
