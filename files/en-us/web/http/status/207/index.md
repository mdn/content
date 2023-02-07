---
title: 207 Multi Status
slug: Web/HTTP/Status/207
tags:
  - HTTP
  - Status code
  - Partial Success
spec-urls: https://www.rfc-editor.org/rfc/rfc4918#section-11.1
---

{{HTTPSidebar}}

The HTTP **`207 Multi Status`** response code indicates that there might be mixture of responses.

We use {{HTTPStatus(204)}} if all the operations succeed and {{HTTPStatus(403)}} if all operations fail.
`207 Multi Status` is returned if some operations succeed and others fail.

If you perform a destructive operation like {{HTTPMethod("POST")}}, {{HTTPMethod("DELETE")}} etc. against more than one resource and the operations against each individual resource do not not share a common outcome then the response can be `207`.

## Status

```
207 Multi-Status
```

## Specifications

{{Specifications}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- {{HTTPStatus(204)}}
- {{HTTPStatus(403)}}
