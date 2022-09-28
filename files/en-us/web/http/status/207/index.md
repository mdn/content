---
title: 207 Multi Status
slug: Web/HTTP/Status/207
tags:
  - HTTP
  - Status code
  - Partial Success
browser-compat: http.status.207
---

{{HTTPSidebar}}

The HTTP **`207 Multi Status`** response code indicates that there might be mixture of responses. We use {{HTTPStatus(204)}} if all the operations succededs or else if all fails we can use {{HTTPStatus(403)}}. But if half of them fails and half succedds we use Multi Status in such conditions.

If you perform a destructive operation like {{HTTPMethod("POST")}}, {{HTTPMethod("DELETE")}} etc. against more than one resource and the operations against each individual resource does not share a common outcome then you can go for 207.

## Status

```
207 Multi-Status
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- {{HTTPStatus(204)}}
- {{HTTPStatus(403)}}
