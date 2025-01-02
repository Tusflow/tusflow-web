---
title: API Reference
description: Complete reference for the TusFlow Upload API endpoints and their functionality.
---

# API Endpoints

## Upload Operations

### Create Upload (POST)

```typescript
POST / upload;
```

Creates a new upload session for a file.

**Headers:**

- `Upload-Length`: Total size of the file in bytes
- `Upload-Metadata`: Key-value pairs of metadata (base64 encoded)
- `Content-Type`: application/offset+octet-stream

**Response:**

- `201 Created` - Upload created successfully
- `Location` header with the upload URL

### Upload Chunk (PATCH)

```typescript
PATCH / upload / { uploadId };
```

Uploads a chunk of the file.

**Headers:**

- `Upload-Offset`: Current offset in bytes
- `Content-Type`: application/offset+octet-stream
- `Content-Length`: Size of the chunk

**Response:**

- `204 No Content` - Chunk uploaded successfully
- `Upload-Offset` header with the new offset

### Get Upload Info (HEAD)

```typescript
HEAD / upload / { uploadId };
```

Retrieves upload information.

**Response Headers:**

- `Upload-Offset`: Current offset
- `Upload-Length`: Total file size
- `Upload-Metadata`: File metadata

### Delete Upload (DELETE)

```typescript
DELETE / upload / { uploadId };
```

Deletes an upload and its associated chunks.

**Response:**

- `204 No Content` - Upload deleted successfully

### Get Upload Status (GET)

```typescript
GET / upload / { uploadId };
```

Gets the current status of an upload.

**Response:**

```json
{
  "uploadId": "string",
  "offset": number,
  "size": number,
  "metadata": object,
  "createdAt": string,
  "expires": string
}
```

## Protocol Information (OPTIONS)

```typescript
OPTIONS / upload;
```

Returns protocol support information.

**Response Headers:**

- `Tus-Version`: Supported protocol versions
- `Tus-Extension`: Supported extensions
- `Tus-Max-Size`: Maximum file size

## Error Responses

All error responses follow this format:

```json
{
  "error": {
    "code": "string",
    "message": "string",
    "details": object
  }
}
```

Common status codes:

- `400 Bad Request`: Invalid request parameters
- `401 Unauthorized`: Authentication required
- `403 Forbidden`: Operation not allowed
- `404 Not Found`: Resource not found
- `409 Conflict`: Resource conflict
- `413 Payload Too Large`: File too large
- `415 Unsupported Media Type`: File type not supported
- `429 Too Many Requests`: Rate limit exceeded
- `500 Internal Server Error`: Server error

## Rate Limiting

Rate limits are applied per endpoint:

- POST: 50 requests per hour
- PATCH: 500 requests per hour
- Other operations: 100 requests per hour

**Headers:**

- `X-RateLimit-Limit`: Request limit
- `X-RateLimit-Remaining`: Remaining requests
- `X-RateLimit-Reset`: Time until limit reset

## Authentication

All requests must include authentication:

```typescript
Authorization: Bearer<token>;
```

See [Authentication](/middleware/authentication) for details.

## Examples

### Creating an Upload

```typescript
const response = await fetch('https://api.example.com/upload', {
    method: 'POST',
    headers: {
        'Upload-Length': '1048576',
        'Upload-Metadata':
            'filename d29ya2Zsb3cuanBn,mimetype aW1hZ2UvanBlZw==',
        Authorization: 'Bearer <token>',
    },
});

const location = response.headers.get('Location');
```

### Uploading Chunks

```typescript
const chunk = file.slice(offset, offset + chunkSize);
const response = await fetch(location, {
    method: 'PATCH',
    headers: {
        'Upload-Offset': offset.toString(),
        'Content-Type': 'application/offset+octet-stream',
        Authorization: 'Bearer <token>',
    },
    body: chunk,
});

const newOffset = response.headers.get('Upload-Offset');
```
