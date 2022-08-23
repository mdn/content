---
title: 403 Forbidden
slug: Web/HTTP/Status/403
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
browser-compat: http.status.403
---
{{HTTPSidebar}}

The HTTP **`403 Forbidden`** response status code indicates that the server understands the request but refuses to authorize it.

This status is similar to {{HTTPStatus("401")}}, but for the **`403 Forbidden`** status code re-authenticating makes no difference. The access is permanently forbidden and tied to the application logic, such as insufficient rights to a resource.

## Status

```
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
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
