---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
browser-compat: http.status.401
---
{{HTTPSidebar}}

The HTTP **`401 Unauthorized`** client error status response
code indicates that the request has not been applied because it lacks valid
authentication credentials for the target resource.

This status is sent with a {{HTTPHeader("WWW-Authenticate")}} header that contains
information on how to authorize correctly.

This status is similar to {{HTTPStatus("403")}}, but in this case, authentication is
possible.

## Status

```
401 Unauthorized
```

## Example response

```
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
