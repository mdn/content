---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.405
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP) **`405 Method Not Allowed`** response status code indicates that the server knows the request method, but the target resource doesn't support this method.

The server **must** generate an **`Allow`** header field in a 405 status code response. The field must contain a list of methods that the target resource currently supports.

## Status

```http
405 Method Not Allowed
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Allow")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.405)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405](https://docs.microsoft.com/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
