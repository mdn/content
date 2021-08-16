---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
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

| Specification                                                                | Title                                                         |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
