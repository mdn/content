---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.405
---

{{HTTPSidebar}}

The HTTP **`405 Method Not Allowed`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server knows the request method, but the target resource doesn't support this method.
The server **must** generate an {{HTTPHeader("Allow")}} header in a 405 response with a list of methods that the target resource currently supports.

Improper server-side permissions set on files or directories may cause a 405 response when the request would otherwise be expected to succeed.

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
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.405)
- [How to Fix 405 Method Not Allowed](https://kinsta.com/blog/405-method-not-allowed-error/)
- [Troubleshooting HTTP 405](https://learn.microsoft.com/en-us/aspnet/web-api/overview/testing-and-debugging/troubleshooting-http-405-errors-after-publishing-web-api-applications)
