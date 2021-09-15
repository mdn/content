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

The HTTP **`WWW-Authenticate`** response header defines the [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) methods ("challenges") that might be used to gain access to a specific resource.

> **Note:** This header is part of the [General HTTP authentication framework](/en-US/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), which can be used with a number of [authentication schemes](/en-US/docs/Web/HTTP/Authentication#authentication_schemes) .
> Each "challenge" lists a scheme supported by the server and additional parameters that are defined for that scheme type. 

A server using [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) will respond with a {{HTTPStatus("401")}} `Unauthorized` response to a request for a protected resource.
This response must include at least one `WWW-Authenticate` header and at least one {{Glossary("challenge")}}, to indicate what authentication schemes can be used to access the resource (and any additional data that each particular scheme needs).

Multiple challenges are allowed in one `WWW-Authenticate` header, and multiple `WWW-Authenticate` headers are allowed in one response.
A server may also include the `WWW-Authenticate` header in other response messages to indicate that supplying credentials might affect the response.

After receiving the `WWW-Authenticate` header, a client will typically prompt the user for credentials, and then re-request the resource.
This request uses the {{HTTPHeader("Authorization")}} header to supply the credentials to the server, encoded appropriately for the selected "challenge" authentication method.
The client is expected to select the most secure of the challenges it understands (note that in some cases the "most secure" method is debatable).

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

At least one challenge must be specified.
Multiple challenges may be specified, comma-separated, in a single header, or in individual headers:
```http
// Challenges specified in single header
WWW-Authenticate: challenge1, ..., challengeN

// Challenges specified in multiple headers
WWW-Authenticate: challenge1
...
WWW-Authenticate: challengeN
```

A single challenge has the following format. Note that the scheme token (`<auth-scheme>`) is mandatory.
The presence of `realm`, `token68` and any other parameters depends on the definition of the selected scheme.

```http
// Possible challenge formats (scheme dependent)
WWW-Authenticate: <auth-scheme>
WWW-Authenticate: <auth-scheme> realm=<realm>
WWW-Authenticate: <auth-scheme> token68
WWW-Authenticate: <auth-scheme> auth-param1=token1, ..., auth-paramN=auth-paramN-token    
WWW-Authenticate: <auth-scheme> realm=<realm> token68
WWW-Authenticate: <auth-scheme> realm=<realm> token68 auth-param1=auth-param1-token , ..., auth-paramN=auth-paramN-token 
WWW-Authenticate: <auth-scheme> realm=<realm> auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token 
WWW-Authenticate: <auth-scheme> token68 auth-param1=auth-param1-token, ..., auth-paramN=auth-paramN-token
```

For example, [Basic authentication](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) allows for optional `realm` and `charset` keys, but does not support `token68`.

```http
WWW-Authenticate: Basic
WWW-Authenticate: Basic realm=<realm>
WWW-Authenticate: Basic realm=<realm>, charset="UTF-8"
```


## Directives

- `<auth-scheme>`
  - : The [Authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes). Some of the more common types are (case-insensitive): [Basic](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) | Digest | Bearer | HOBA | Mutual | Negotiate | OAuth | SCRAM-SHA-1 | SCRAM-SHA-256 | vapid
    > **Note:** For more information/options see [HTTP Authentication > Authentication schemes](/en-US/docs/Web/HTTP/Authentication#authentication_schemes)
- **realm=**\<realm> {{optional_inline}}
  - : A string describing a protected area.
    A realm allows a server to partition up the areas it protects (if supported by a scheme that allows such partitioning).
    If no realm is specified, clients often display a formatted hostname instead.
- `<token68>` {{optional_inline}}
  - : A token that may be useful for some schemes. The token allows the 66 unreserved URI characters plus a few others.
    According to the specification, it can hold a base64, base64url, base32, or base16 (hex) encoding, with or without padding, but excluding whitespace.

Authorization parameter keys that are specific to each [authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes).
These are listed below for some schemes.
For others you may need to check the specifications:

### Basic

- **`<realm>`** {{optional_inline}}
  - : As above.
- **`charset="UTF-8"`** {{optional_inline}}
  - : Tells the client the server's preferred encoding scheme when submitting a username and password.
      The only allowed value is the case-insensitive string "UTF-8".
      This does not relate to the encoding of the realm string.

## Examples

### Basic authentication

A server that only supports basic authentication might have a `WWW-Authenticate` response header which looks like this:

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

Both the realm and charset are optional, so it could instead look like this:

```http
WWW-Authenticate: Basic
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
