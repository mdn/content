---
title: 202 Accepted
slug: Web/HTTP/Status/202
tags:
  - HTTP
  - Reference
  - Status code
  - Success response
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`202 Accepted`**
response status code indicates that the request has been accepted for processing, but
the processing has not been completed; in fact, processing may not have started yet. The
request might or might not eventually be acted upon, as it might be disallowed when
processing actually takes place.

202 is non-committal, meaning that there is no way for the HTTP to later send an
asynchronous response indicating the outcome of processing the request. It is intended
for cases where another process or server handles the request, or for batch processing.

## Status

```
202 Accepted
```

## Specifications

| Specification                                            | Title                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "202 Accepted" , "6.3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPHeader("Accept")}}
