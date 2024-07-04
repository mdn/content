---
title: 411 Length Required
slug: Web/HTTP/Status/411
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.411
---

{{HTTPSidebar}}

The HTTP **`411 Length Required`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the server refuses to accept the request without a defined {{HTTPHeader("Content-Length")}} header.

> **Note:**
> When sending data in a series of chunks, the `Content-Length` header is omitted and at the beginning of each chunk you need to add the length of the current chunk in hexadecimal format.
> See {{HTTPHeader("Transfer-Encoding")}} for more details.

## Status

```http
411 Length Required
```

## Examples

### Chunked POST request

The following request is sent chunked, which can be the default method of sending data in some cases (specifically when [writing to streams](https://nodejs.org/api/http.html#requestwritechunk-encoding-callback)):

```http
POST /translate/de HTTP/1.1
Host: api.example.com
Content-Type: application/json
Transfer-encoding: chunked

2C
{"text": "Hurry up, Ayşe is hungry!"}
0
```

In this case, the server is expecting a request in one part with a {{HTTPHeader("Content-Length")}} header and returns a 411 response:

```http
HTTP/1.1 411 Length Required
Content-Type: application/json
Content-Length: 110

{
  "message": "Requests must have a content length header.",
  "documentation": "http://api/example.com/docs/errors",
}
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
