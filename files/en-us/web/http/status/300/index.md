---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
---
{{HTTPSidebar}}

The HTTP **`300 Multiple Choices`** redirect status response
code indicates that the request has more than one possible responses. The user-agent
or the user should choose one of them. As there is no standardized way of choosing one
of the responses, this response code is very rarely used.

If the server has a preferred choice, it should generate a {{HTTPHeader("Location")}}
header.

## Status

```
300 Multiple Choices
```

## Specifications

| Specification                                                    | Title                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "300 Multiple Choices" , "6.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, the temporary redirect
- {{HTTPStatus("308")}} `Permanent Redirect`
