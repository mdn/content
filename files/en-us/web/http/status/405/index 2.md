---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`405 Method Not Allowed`** response status code indicates that the request method is known by the server but is not supported by the target resource.

The server **must** generate an **`Allow`** header field in a 405 response containing a list of the target resource's currently supported methods.

## Status

```
405 Method Not Allowed
```

## Specifications

| Specification                                                        | Title                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "405 Method Not Allowed" , "6.5.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPHeader("Allow")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405](https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
