---
title: 201 Created
slug: Web/HTTP/Status/201
page-type: http-status-code
browser-compat: http.status.201
---

{{HTTPSidebar}}

The HTTP **`201 Created`** status response code is part of the `200`-`299` class of [successful responses](/en-US/docs/Web/HTTP/Status#successful_responses) and indicates that the request has led to the creation of a resource.
The new resource or a description and link to the new resource is created before the response is returned and the newly-created items are returned in the body of the message, located at either the URL of the request, or at the URL in the value of the {{HTTPHeader("Location")}} header.

This status code is commonly sent as the result of a {{HTTPMethod("POST")}} request.

## Status

```http
201 Created
```

## Examples

TODO

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP request methods](/en-US/docs/Web/HTTP/Methods)
- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
