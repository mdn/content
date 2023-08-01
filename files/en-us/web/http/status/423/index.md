---
title: 423 Locked
slug: Web/HTTP/Status/423
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.3
---

{{HTTPSidebar}}

> **Note:** The ability to _lock_ a resource is specific to some {{Glossary("WebDAV")}} servers. Browsers accessing web pages will never encounter this status code; in the erroneous cases it happens, they will handle it as a generic `400` status code.

The HTTP **`423 Locked`** error response code indicates that either the resources tentatively targeted by is _locked_, meaning it can't be accessed. Its content should contain some information in WebDAV's XML format.

## Status

```plain
423 Locked
```

### Example

```http
HTTP/1.1 423 Locked
Content-Type: application/xml; charset="utf-8"
Content-Length: xxxx

<?xml version="1.0" encoding="utf-8" ?>
<D:error xmlns:D="DAV:">
  <D:lock-token-submitted>
    <D:href>/workspace/webdav/</D:href>
  </D:lock-token-submitted>
</D:error>
```

## Specifications

{{Specifications}}
