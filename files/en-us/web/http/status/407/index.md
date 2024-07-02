---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.407
---

{{HTTPSidebar}}

The HTTP **`407 Proxy Authentication Required`** client error
status response code indicates that the request has not been applied because it lacks
valid authentication credentials for a {{Glossary("proxy server")}} that is between the
browser and the server that can access the requested resource.

This status is sent with a {{HTTPHeader("Proxy-Authenticate")}} header that contains
information on how to authorize correctly.

## Status

```http
407 Proxy Authentication Required
```

## Example response

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## Specifications

{{Specifications}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
