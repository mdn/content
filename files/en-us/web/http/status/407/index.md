---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.407
---

{{HTTPSidebar}}

The HTTP **`407 Proxy Authentication Required`** [client error response](/en-US/docs/Web/HTTP/Status#client_error_responses) status code indicates that the request did not succeed because it lacks valid authentication credentials for the {{Glossary("proxy server")}} that sits between the client and the server with access to the requested resource.

This response is sent with a {{HTTPHeader("Proxy-Authenticate")}} header that contains information on how to correctly authenticate requests.
The client may repeat the request with a new or replaced {{HTTPHeader("Proxy-Authorization")}} header field.

## Status

```http
407 Proxy Authentication Required
```

## Examples

### Proxy auth

A GET request is made to `example.com/admin`:

```http
GET /admin HTTP/1.1
Host: example.com
```

Along the way, an intermediary lets the client know that clients must be authenticated and provides information about the authentication scheme:

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
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
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
