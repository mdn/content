---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
  - Successful response
---
{{HTTPSidebar}}

The HTTP **`203 Non-Authoritative Information`** response
status indicates that the request was successful but the enclosed payload has been
modified by a transforming {{Glossary("Proxy server", "proxy")}} from that of the origin
server's {{HTTPStatus("200")}} (`OK`) response .

The `203` response is similar to the value
[`214`](/en-US/docs/Web/HTTP/Headers/Warning#warning_codes),
meaning `Transformation Applied`, of the {{HTTPHeader("Warning")}} header
code, which has the additional advantage of being applicable to responses with any
status code.

## Status

```
203 Non-Authoritative Information
```

## Specifications

| Specification                                                                        | Title                                                         |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
