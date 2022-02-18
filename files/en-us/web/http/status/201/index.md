---
title: 201 Created
slug: Web/HTTP/Status/201
tags:
  - HTTP
  - Reference
  - Status code
  - Success
browser-compat: http.status.201
---
{{HTTPSidebar}}

The HTTP **`201 Created`** success status response code
indicates that the request has succeeded and has led to the creation of a resource. The
new resource is effectively created before this response is sent back and the new
resource is returned in the body of the message, its location being either the URL of
the request, or the content of the {{HTTPHeader("Location")}} header.

The common use case of this status code is as the result of a {{HTTPMethod("POST")}}
request.

## Status

```
201 Created
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
