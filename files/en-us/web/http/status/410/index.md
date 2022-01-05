---
title: 410 Gone
slug: Web/HTTP/Status/410
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
browser-compat: http.status.410
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`410 Gone`** client error response code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.

If you don't know whether this condition is temporary or permanent, a {{HTTPStatus(404)}} status code should be used instead.

> **Note:** A 410 response is cacheable by default.

## Status

```
410 Gone
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus(404)}}
- [410 gone](https://www.exai.com/blog/410-gone-client-error)
