---
title: 411 Length Required
slug: Web/HTTP/Status/411
page-type: http-status-code
spec-urls: https://httpwg.org/specs/rfc9110.html#status.411
---

{{HTTPSidebar}}

The HyperText Transfer Protocol (HTTP)
**`411 Length Required`** client error response code indicates
that the server refuses to accept the request without a defined
{{HTTPHeader("Content-Length")}} header.

> **Note:** by specification, when sending data in a series of chunks, the
> `Content-Length` header is omitted and at the beginning of each chunk you
> need to add the length of the current chunk in hexadecimal format. See
> {{HTTPHeader("Transfer-Encoding")}} for more details.

## Status

```http
411 Length Required
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
