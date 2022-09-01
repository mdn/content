---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.415
---
{{HTTPSidebar}}

The HTTP **`415 Unsupported Media Type`** client error response
code indicates that the server refuses to accept the request because the payload format
is in an unsupported format.

The format problem might be due to the request's indicated
{{HTTPHeader("Content-Type")}} or {{HTTPHeader("Content-Encoding")}}, or as a result of
inspecting the data directly.

## Status

```
415 Unsupported Media Type
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
