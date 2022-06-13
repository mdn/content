---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
browser-compat: http.headers.WWW-Authenticate
---
{{HTTPSidebar}}

The HTTP **`WWW-Authenticate`** response header defines the authentication method that should be used to gain access to a resource.

The `WWW-Authenticate` header is sent along with a {{HTTPStatus("401")}} `Unauthorized` response.

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

```
WWW-Authenticate: <type> realm=<realm>[, charset="UTF-8"]
```

## Directives

- \<type>
  - : [Authentication type](/en-US/docs/Web/HTTP/Authentication#authentication_schemes). A common type is ["Basic"](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme). IANA maintains a [list of Authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- realm=\<realm>
  - : A description of the protected area. If no realm is specified, clients often display a formatted hostname instead.
- charset=\<charset>
  - : Tells the client the server's preferred encoding scheme when submitting a username and password. The only allowed value is the case insensitive string "UTF-8". This does not relate to the encoding of the realm string.

## Examples

Typically, a server response contains a `WWW-Authenticate` header that looks like this:

```
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

See also [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) for examples on how to configure Apache or nginx servers to password protect your site with HTTP basic authentication.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
