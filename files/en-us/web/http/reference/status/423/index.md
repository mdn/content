---
title: 423 Locked
slug: Web/HTTP/Reference/Status/423
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/info/rfc4918/#section-11.3
sidebar: http
---

The HTTP **`423 Locked`** [client error response](/en-US/docs/Web/HTTP/Reference/Status#client_error_responses) status code indicates that an operation failed because the source or destination resource is locked.

For {{Glossary("WebDAV")}} requests, the XML response body should include a precondition or postcondition code that explains the lock error.
Other APIs can use `423 Locked` with their own response format.

## Status

```http
423 Locked
```

## Examples

### WebDAV 423 Locked response

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/web-dav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Reference/Status)
