---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
tags:
  - Client error
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
spec-urls: https://www.rfc-editor.org/rfc/rfc6585#section-3
---
{{HTTPSidebar}}

The HTTP **`428 Precondition Required`** response status code
indicates that the server requires the request to be [conditional](/en-US/docs/Web/HTTP/Conditional_requests).

Typically, this means that a required precondition header, such
as {{HTTPHeader("If-Match")}}, **is missing**.

When a precondition header is **not matching** the server side state, the
response should be {{HTTPStatus(412)}} `Precondition Failed`.

## Status

```
428 Precondition Required
```

## Specifications

{{Specifications}}

## See also

- [HTTP conditional requests](/en-US/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus(412)}}
