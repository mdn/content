---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.405
---
{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`405 Method Not Allowed`** response status code indicates that the server knows the request method, but the target resource doesn't support this method.

The server **must** generate an **`Allow`** header field in a 405 status code response. The field must contain a list of methods that the target resource currently supports.

## Status

```
405 Method Not Allowed
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Allow")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405](https://docs.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
