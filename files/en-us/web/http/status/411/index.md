---
title: 411 Length Required
slug: Web/HTTP/Status/411
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
spec-urls: https://httpwg.org/specs/rfc7231.html#section-6.5.10
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

```
411 Length Required
```

## Specifications

{{Specifications}}

## See also

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
