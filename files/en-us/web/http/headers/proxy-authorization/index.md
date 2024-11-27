---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
page-type: http-header
spec-urls: https://httpwg.org/specs/rfc9110.html#field.proxy-authorization
---

{{HTTPSidebar}}

The HTTP **`Proxy-Authorization`** {{Glossary("request header")}} contains the credentials to authenticate a client with a proxy server, typically after the server has responded with a {{HTTPStatus("407", "407 Proxy Authentication Required")}} status with the {{HTTPHeader("Proxy-Authenticate")}} header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Proxy-Authorization: <auth-scheme> <credentials>
```

## Directives

- `<auth-scheme>`
  - : Token indicating the [authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes), such as `Basic`, `Bearer`, etc.
    The [IANA registry of Authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml) maintains a full list of available types.
- `<credentials>`
  - : Credentials use for the authentication scheme.

## Examples

### Basic authentication

In `Basic` auth, credentials are sent in the format `<username>:<password>` (for example, `aladdin:opensesame`).
The resulting string is then [base64](/en-US/docs/Glossary/Base64) encoded (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> [!WARNING]
> Base64 encoding is reversible, and therefore offers no cryptographic security.
> This method can be considered equivalent to sending the credentials in clear text.
> {{Glossary("HTTPS")}} is always recommended when using authentication, but is even more so when using `Basic` authentication.

### Bearer authentication (auth token)

```http
Proxy-Authorization: Bearer kNTktNTA1My00YzLT1234
```

## Specifications

{{Specifications}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
