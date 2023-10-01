---
title: 403 Forbidden
slug: Web/HTTP/Status/403
page-type: http-status-code
browser-compat: http.status.403
---

{{HTTPSidebar}}

The HTTP **`403 Forbidden`** response status code indicates that the server understands the request but refuses to authorize it.

This status is similar to {{HTTPStatus("401")}}, but for the **`403 Forbidden`** status code, re-authenticating makes no difference. The access is tied to the application logic, such as insufficient rights to a resource.

## Status

```http
403 Forbidden
```

## Example response

```http
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("401")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.403)
