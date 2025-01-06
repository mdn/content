---
title: Proxy-Authenticate
slug: Web/HTTP/Headers/Proxy-Authenticate
page-type: http-header
browser-compat: http.headers.Proxy-Authenticate
---

{{HTTPSidebar}}

The HTTP **`Proxy-Authenticate`** {{Glossary("response header")}} defines the [authentication](/en-US/docs/Web/HTTP/Authentication) method (or {{Glossary("Challenge", "challenge")}}) that should be used to gain access to a resource behind a {{Glossary("proxy server")}}.
It is sent in a {{HTTPStatus("407", "407 Proxy Authentication Required")}} response so a client can identify itself to a proxy that requires authentication.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

A comma-separated list of one or more authentication challenges:

```http
Proxy-Authenticate: <challenge>
```

Where a `<challenge>` is comprised of an `<auth-scheme>`, followed by an optional `<token68>` or a comma-separated list of `<auth-params>`:

```plain
challenge = <auth-scheme> <auth-param>, …, <auth-paramN>
challenge = <auth-scheme> <token68>
```

For example:

```http
Proxy-Authenticate: <auth-scheme>
Proxy-Authenticate: <auth-scheme> token68
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1
Proxy-Authenticate: <auth-scheme> auth-param1=param-token1, …, auth-paramN=param-tokenN
```

The presence of a `token68` or authentication parameters depends on the selected `<auth-scheme>`.
For example, [Basic authentication](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) requires a `<realm>`, and allows for optional use of `charset` key, but does not support a `token68`:

```http
Proxy-Authenticate: Basic realm="Dev", charset="UTF-8"
```

## Directives

- `<auth-scheme>`
  - : A case-insensitive token indicating the [Authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes) used.
    Some of the more common types are [`Basic`](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` and `AWS4-HMAC-SHA256`.
    IANA maintains a [list of authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), but there are other schemes offered by host services.
- `<auth-param>` {{optional_inline}}
  - : An authentication parameter whose format depends on the `<auth-scheme>`.
    `<realm>` is described below as it's a common authentication parameter among many auth schemes.
    - `<realm>` {{optional_inline}}
      - : The string `realm` followed by `=` and a quoted string describing a protected area, for example `realm="staging environment"`.
        A realm allows a server to partition the areas it protects (if supported by a scheme that allows such partitioning).
        Some clients show this value to the user to inform them about which particular credentials are required — though most browsers stopped doing so to counter phishing.
        The only reliably supported character set for this value is `us-ascii`.
        If no realm is specified, clients often display a formatted hostname instead.
- `<token68>` {{optional_inline}}
  - : A token that may be useful for some schemes.
    The token allows the 66 unreserved URI characters plus a few others.
    It can hold a {{glossary("base64")}}, base64url, base32, or base16 (hex) encoding, with or without padding, but excluding whitespace.
    The `token68` alternative to auth-param lists is supported for consistency with legacy authentication schemes.

Generally, you will need to check the relevant specifications for the authentication parameters needed for each `<auth-scheme>`.

> [!NOTE]
> See {{HTTPHeader("WWW-Authenticate")}} for more details on authentication parameters.

## Examples

### Proxy-Authenticate Basic auth

The following response indicates a Basic auth scheme is required with a realm:

```http
Proxy-Authenticate: Basic realm="Staging server"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("WWW-Authenticate")}}
- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}, {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
