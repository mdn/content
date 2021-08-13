---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
---
{{HTTPSidebar}}

The HTTP **`426 Upgrade Required`** client error response code
indicates that the server refuses to perform the request using the current protocol but
might be willing to do so after the client upgrades to a different protocol.

The server sends an {{HTTPHeader("Upgrade")}} header with this response to indicate the
required protocol(s).

## Status

```
426 Upgrade Required
```

## Examples

    HTTP/1.1 426 Upgrade Required
    Upgrade: HTTP/2.0
    Connection: Upgrade
    Content-Length: 53
    Content-Type: text/plain

    This service requires use of the HTTP/2.0 protocol

## Specifications

| Specification                                                        | Title                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "426 Upgrade Required" , "6.5.15")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocol`
