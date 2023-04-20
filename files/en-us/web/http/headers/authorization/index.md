---
title: Authorization
slug: Web/HTTP/Headers/Authorization
page-type: http-header
browser-compat: http.headers.Authorization
---

{{HTTPSidebar}}

The HTTP **`Authorization`** request header can be used to provide credentials that authenticate a user agent with a server, allowing access to a protected resource.

The **`Authorization`** header is usually, but not always, sent after the user agent first attempts to request a protected resource without credentials.
The server responds with a {{HTTPStatus("401")}} `Unauthorized` message that includes at least one {{HTTPHeader("WWW-Authenticate")}} header.
This header indicates what authentication schemes can be used to access the resource (and any additional information needed by the client to use them).
The user-agent should select the most secure authentication scheme that it supports from those offered, prompt the user for their credentials, and then re-request the resource (including the encoded credentials in the **`Authorization`** header).

This header is stripped from cross-origin redirects.

> **Note:** This header is part of the [General HTTP authentication framework](/en-US/docs/Web/HTTP/Authentication#the_general_http_authentication_framework).
> It can be used with a number of [authentication schemes](/en-US/docs/Web/HTTP/Authentication#authentication_schemes).

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
Authorization: <auth-scheme> <authorization-parameters>
```

Basic authentication

```http
Authorization: Basic <credentials>
```

Digest authentication

```http
Authorization: Digest username=<username>,
    realm="<realm>",
    uri="<url>",
    algorithm=<algorithm>,
    nonce="<nonce>",
    nc=<nc>,
    cnonce="<cnonce>",
    qop=<qop>,
    response="<response>",
    opaque="<opaque>"
```

## Directives

- `<auth-scheme>`

  - : The [Authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes) that defines how the credentials are encoded.
    Some of the more common types are (case-insensitive): [`Basic`](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme), `Digest`, `Negotiate` and `AWS4-HMAC-SHA256`.

    > **Note:** For more information/options see [HTTP Authentication > Authentication schemes](/en-US/docs/Web/HTTP/Authentication#authentication_schemes)

Other than `<auth-scheme>` the remaining directives are specific to each [authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes).
Generally you will need to check the relevant specifications for these (keys for a small subset of schemes are listed below).

### Basic

- \<credentials>

  - : The credentials, encoded according to the specified scheme.

    > **Note:** For information about the encoding algorithm, see the examples: below, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP Authentication](/en-US/docs/Web/HTTP/Authentication), and in the relevant specifications.

### Digest

- \<response>
  - : A string of the hex digits that proves that the user knows a password.
    The algorithm encodes the username and password, realm, cnonce, qop, nc, and so on.
    It is described in detail in the specification.
- `username`
  - : A quoted string containing user's name for the specified `realm` in either plain text or the hash code in hexadecimal notation.
    If the name contains characters that aren't allowed in the field, then `username*` can be used instead (not "as well").
- `username*`
  - : The user's name formatted using an extended notation defined in RFC5987.
    This should be used only if the name can't be encoded in `username` and if `userhash` is set `"false"`.
- `uri`
  - : The _Effective Request URI_. See the specification for more information.
- `realm`
  - : Realm of the requested username/password (again, should match the value in the corresponding {{HTTPHeader("WWW-Authenticate")}} response for the resource being requested).
- `opaque`
  - : The value in the corresponding {{HTTPHeader("WWW-Authenticate")}} response for the resource being requested.
- `algorithm`
  - : The algorithm used to calculate the digest. Must be a supported algorithm from the {{HTTPHeader("WWW-Authenticate")}} response for the resource being requested.
- `qop`
  - : A token indicating the _quality of protection_ applied to the message.
    Must match the one value in the set specified in the {{HTTPHeader("WWW-Authenticate")}} response for the resource being requested.
    - `"auth"`: Authentication
    - `"auth-int"`: Authentication with integrity protection
- `cnonce`
  - : An quoted ASCII-only string value provided by the client.
    This is used by both the client and server to provide mutual authentication, provide some message integrity protection, and avoid "chosen plaintext
    attacks".
    See the specification for additional information.
- `nc`
  - : Nonce count. The hexadecimal count of requests in which the client has sent the current `cnonce` value (including the current request).
    The server can use duplicate `nc` values to recognize replay requests.
- `userhash` {{optional_inline}}
  - : `"true"` if the username has been hashed. `"false"` by default.

## Examples

### Basic authentication

For `"Basic"` authentication the credentials are constructed by first combining the username and the password with a colon (`aladdin:opensesame`), and then by encoding the resulting string in [`base64`](/en-US/docs/Glossary/Base64) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```http
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warning:** {{Glossary("Base64")}}-encoding can easily be reversed to obtain the original name and password, so Basic authentication is completely insecure.
> {{Glossary("HTTPS")}} is always recommended when using authentication, but is even more so when using `Basic` authentication.

See also [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) for examples on how to configure Apache or Nginx servers to password protect your site with HTTP basic authentication.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
