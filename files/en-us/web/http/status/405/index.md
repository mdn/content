---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.405
---

{{HTTPSidebar}}

The HTTP **`405 Method Not Allowed`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server knows the request method, but the target resource doesn't support this method.

The server **must** generate an **`Allow`** header in a 405 response with a list of methods that the target resource currently supports.

In cases where a server is returning a 405 response, and a server owner expects the requests to succeed, this may be caused by improper permissions set on files or directories that are expected to be served to clients.

## Status

```http
405 Method Not Allowed
```

## Examples

### TRACE method not allowed

Server owners often disallow the use of the `TRACE` method due to security concerns.
The following example shows a typical response where a server doesn't allow the use of `TRACE`:

```http
TRACE / HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 405 Method Not Allowed
Content-Length: 0
Date: Fri, 28 Jun 2024 14:30:31 GMT
Server: ECLF (nyd/D179)
Allow: GET, POST, HEAD
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Allow")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.405)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405](https://docs.microsoft.com/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
