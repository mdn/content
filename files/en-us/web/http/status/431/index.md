---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Status/431
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc6585#section-5
---

{{HTTPSidebar}}

The HTTP **`431 Request Header Fields Too Large`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the server refuses to process the request because the request's [HTTP headers](/en-US/docs/Web/HTTP/Headers) are too long.
The request may be resubmitted after reducing the size of the request headers.

431 can be used when the total size of request headers is too large or when a single header field is too large.
To help clients running into this error, indicate which of the two is the problem in the response body and, ideally, say which headers are too large.
This lets people attempt to fix the problem, such as by clearing cookies.

Servers will often produce this status if:

- The {{httpheader("Referer")}} URL is too long
- There are too many [Cookies](/en-US/docs/Web/HTTP/Cookies) sent in the request

## Status

```http
431 Request Header Fields Too Large
```

## Examples

### Header field too large

In the following example, the {{httpheader("Cookie")}} header is too large in the request:

```http
GET /doc HTTP/1.1
Host: example.com
Cookie: cookie1=value1; cookie2=value2; cookie3=[…]
```

The server responds with an message indicating which header was problematic:

```http
HTTP/1.1 431 Request Header Fields Too Large
Content-Type: text/html

<!doctype html>
  <head>
    <title>Request Header Fields Too Large</title>
  </head>
  <body>
    <h1>Request Header Fields Too Large</h1>
    <p>The "Cookie" header was too large.</p>
  </body>
</html>
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPStatus("414", "414 URI Too Long")}}
- {{Glossary("Request header")}}
