---
title: Proxy-Authenticate
slug: Web/HTTP/Headers/Proxy-Authenticate
tags:
  - HTTP
  - HTTP Header
  - Proxy
  - Reference
  - Response Header
browser-compat: http.headers.Proxy-Authenticate
---
{{HTTPSidebar}}

The HTTP **`Proxy-Authenticate`** response header defines the
authentication method that should be used to gain access to a resource behind a
{{Glossary("proxy server")}}. It authenticates the request to the proxy server, allowing
it to transmit the request further.

The `Proxy-Authenticate` header is sent along with a {{HTTPStatus("407")}}
`Proxy Authentication Required`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authenticate: <type> realm=<realm>
```

## Directives

- \<type>
  - : [Authentication type](/en-US/docs/Web/HTTP/Authentication#authentication_schemes). A common type is ["Basic"](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme).
    IANA maintains a [list of authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- realm=\<realm>
  - : A description of the protected area, the realm. If no realm is specified, clients
    often display a formatted host name instead.

## Examples

```http
Proxy-Authenticate: Basic

Proxy-Authenticate: Basic realm="Access to the internal site"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
