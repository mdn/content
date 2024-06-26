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

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
