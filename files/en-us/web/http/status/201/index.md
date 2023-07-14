---
title: 201 Created
slug: Web/HTTP/Status/201
page-type: http-status-code
browser-compat: http.status.201
---

{{HTTPSidebar}}

The HTTP **`201 Created`** success status response code indicates that the request has
succeeded and has led to the creation of a resource. The new resource, or a description
and link to the new resource, is effectively created before the response is sent back
and the newly created items are returned in the body of the message, located at either
the URL of the request, or at the URL in the value of the {{HTTPHeader("Location")}} header.

The common use case of this status code is as the result of a {{HTTPMethod("POST")}}
request.

## Status

```http
201 Created
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
