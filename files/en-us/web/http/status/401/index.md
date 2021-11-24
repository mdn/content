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

The HyperText Transfer Protocol (HTTP) **`401 Unauthorized`** client error status response
code indicates that the client request has not been completed because it lacks valid
authentication credentials for the requested resource.

This error status is sent with an HTTP {{HTTPHeader("WWW-Authenticate")}} response header that contains
information on how the client can request for the resource again after prompting the user for authentication credentials.

This error status is similar to the {{HTTPStatus("403", "403 Forbidden")}} error status, except that in situations resulting in this error status, user authentication can allow access to the resource.

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
