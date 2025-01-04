---
title: 423 Locked
slug: Web/HTTP/Status/423
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.3
---

{{HTTPSidebar}}

The HTTP **`423 Locked`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that a resource is _locked_, meaning it can't be accessed.
Its response body should contain information in {{glossary("WebDAV")}}'s XML format.

> [!NOTE]
> The ability to _lock_ a resource to prevent conflicts is specific to some {{Glossary("WebDAV")}} servers.
> Browsers accessing web pages will never encounter this status code; in the erroneous cases it happens, they will handle it as a generic {{HTTPStatus(400)}} status code.

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

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
