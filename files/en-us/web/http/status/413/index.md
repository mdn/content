---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
---
{{HTTPSidebar}}

The HTTP **`413 Payload Too Large`** response status code indicates that the request entity is larger than limits defined by server; the server might close the connection or return a {{HTTPHeader("Retry-After")}} header field.

## Status

```
413 Payload Too Large
```

## Specifications

| Specification                                                        | Title                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "413 Payload Too Large" , "6.5.11")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
