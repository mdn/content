---
title: 507 Insufficient Storage
slug: Web/HTTP/Status/507
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.5
---

{{HTTPSidebar}}

The HTTP **`507 Insufficient Storage`** [server error response](/en-US/docs/Web/HTTP/Status#server_error_responses) status code indicates that an action could not be performed because the server does not have enough available storage to successfully complete the request.

This status code was first used in the context of Web Distributed Authoring and Versioning ({{Glossary("WebDAV")}}), but has propagated into other use cases to describe situations where server resources are exhausted.
Common causes of this error can be from server directories running out of available space, not enough available RAM for an operation, or internal limits reached (such as application-specific memory limits, for example).
The request causing this error does not necessarily need to include content, as it may be a request that would create a resource on the server if it was successful.

This issue is considered temporary, as opposed to a {{HTTPStatus("413", "413 Content Too Large")}}, which indicates that the client request is too large for the server to process regardless of server resource constraints.

## Status

```http
507 Insufficient Storage
```

## Examples

### 507 response indicating storage issues

The following request attempts to upload a file to a server which has insufficient storage available.
The server responds with a `507` to indicate that its resources are exhausted:

```http
POST /upload HTTP/1.1
Host: example.com
Content-Type: image/jpeg
Content-Length: 123456

[JPG file data]
```

```http
HTTP/1.1 507 Insufficient Storage
Date: Mon, 22 Jul 2024 10:00:00 GMT
Server: Apache/2.4.41 (Unix)
Content-Type: text/html; charset=UTF-8
Content-Length: 230

<html>
<head>
  <title>507 Insufficient Storage</title>
</head>
<body>
  <h1>Insufficient Storage</h1>
  <p>The server is unable to store the included resource to complete the request.</p>
  <p>Please try again later.</p>
</body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("413", "413 Content Too Large")}}
