---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.401
---

{{HTTPSidebar}}

The HTTP **`401 Unauthorized`** status response code is part of the `400`-`499` class of [client error responses](/en-US/docs/Web/HTTP/Status#client_error_responses) and indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.

This status code is sent with an HTTP {{HTTPHeader("WWW-Authenticate")}} response header that contains information on how the client can request for the resource again after prompting the user for authentication credentials.

This status code is similar to the {{HTTPStatus("403", "403 Forbidden")}} status code, except that in situations resulting in this status code, user authentication can allow access to the resource.

## Status

```http
401 Unauthorized
```

## Examples

### Unauthorized

```http
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
