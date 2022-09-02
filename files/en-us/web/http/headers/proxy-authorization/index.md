---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - header
spec-urls: https://httpwg.org/specs/rfc9110.html#field.proxy-authorization
---
{{HTTPSidebar}}

The HTTP **`Proxy-Authorization`** request header contains the
credentials to authenticate a user agent to a proxy server, usually after the server has
responded with a {{HTTPStatus("407")}} `Proxy Authentication Required` status
and the {{HTTPHeader("Proxy-Authenticate")}} header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authorization: <type> <credentials>
```

## Directives

- \<type>
  - : [Authentication type](/en-US/docs/Web/HTTP/Authentication#authentication_schemes). A common type is ["Basic"](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme).
    See also the [IANA registry of Authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- \<credentials>

  - : The credentials are constructed like this:

    - The username and the password are combined with a colon
      (`aladdin:opensesame`).
    - The resulting string is [base64](/en-US/docs/Glossary/Base64)
      encoded (`YWxhZGRpbjpvcGVuc2VzYW1l`).

    > **Note:** Base64 encoding does not mean encryption or hashing! This
    > method is as secure as sending the credentials in clear text (base64 is a
    > reversible encoding). It is preferable to use HTTPS in conjunction with Basic
    > Authentication.

## Examples

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

## Specifications

{{Specifications}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
