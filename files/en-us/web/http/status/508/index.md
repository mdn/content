---
title: 508 Loop Detected
slug: Web/HTTP/Status/508
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc5842#section-7.2
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`508 Loop Detected`**
response status code may be given in the context of the Web Distributed Authoring and
Versioning (WebDAV) protocol.

It indicates that the server terminated an operation because it encountered an infinite
loop while processing a request with "Depth: infinity". This status indicates that the
entire operation failed.

## Status

```http
508 Loop Detected
```

## Specifications

{{Specifications}}
