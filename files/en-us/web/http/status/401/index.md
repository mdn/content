---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.401
---

{{HTTPSidebar}}

The HTTP **`401 Unauthorized`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that a request was not successful because it lacks valid authentication credentials for the requested resource.
This status code is sent with an HTTP {{HTTPHeader("WWW-Authenticate")}} response header that contains information on the [authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes) the server expects the client to include to make the request successfully.

A `401 Unauthorized` is similar to the {{HTTPStatus("403", "403 Forbidden")}} response, except that a 403 is returned when a request contains valid credentials, but the client does not have permissions to perform a certain action.

## Status

```http
401 Unauthorized
```

## Examples

### Unauthorized request to a protected API

The following GET request is made to a URL `www.example.com/admin` that expects credentials in an {{HTTPHeader("Authorization")}} header:

```http
GET /admin HTTP/1.1
Host: example.com
```

The server responds with a 401 message and a {{HTTPHeader("WWW-Authenticate")}} header indicating that the request must be authenticated and that `Bearer` auth (an access token) is the permitted [authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes):

```http
HTTP/1.1 401 Unauthorized
Date: Tue, 02 Jul 2024 12:18:47 GMT
WWW-Authenticate: Bearer
```

## Specifications

{{Specifications}}

## See also

- [HTTP response status codes](/en-US/docs/Web/HTTP/Status)
- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{Glossary("Challenge")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
