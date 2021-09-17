---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - Header
  - WWW-Authenticate
  - Authentication
browser-compat: http.headers.WWW-Authenticate
---
{{HTTPSidebar}}

The HTTP **`WWW-Authenticate`** response header defines the [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) methods ("challenges") that might be used to gain access to a specific resource.

> **Note:** This header is part of the [General HTTP authentication framework](/en-US/docs/Web/HTTP/Authentication#the_general_http_authentication_framework), which can be used with a number of [authentication schemes](/en-US/docs/Web/HTTP/Authentication#authentication_schemes).
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
    A realm allows a server to partition up the areas it protects (if supported by a scheme that allows such partitioning), and informs users about which paricular username/password are required.
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

### Digest

- **`<realm>`** {{optional_inline}}
  - : String indicating which username/password to use.
      Minimally should include the host name, but might indicate the users or group that have access.
- **`domain=`** `<list of URIs>` {{optional_inline}}
  - : A quoted, space-separated list of URI prefixes that define all the locations where the authentication information may be be used.
      If this key is not is not specified then the authentication information may be used anywhere on the web root.
- **`nonce=`** `"<server specified string>`
  - : A server-specified quoted string that is used to control the lifetime in which particular credentials will be considered valid.
    This must be uniquely generated each time a 401 response is made, and may be regenerated more often (for example, allowing a digest to be used only once).
    The specification has advice on possible algorithms for generating this value, which is opaque to the client.
- **`opaque=`** `"<server specified string>`
  - : A server-specified quoted string that should be returned unchanged in the {{HTTPHeader("Authorization")}}. 
    This is opaque to the client. The server is recommended to include Base64 or hexadecimal data.
- **`stale=`** `true` or some other flag {{optional_inline}}
  - : A case-insensitive flag indicating that the previous request from the client was rejected because the `nonce` used is too old (stale).
      If this is `true` the request can be re-tried using the same username/password encrypted using the new `nonce`.
      If it is any other value then the username/password are invalid and must be re-requested from the user.
- **`algorithm=`** `"MD5"` | `"SHA-256"`  | `"SHA-512"`  {{optional_inline}}
  - : Algorithm used to produce the digest (default if not specified is `"MD5"`).
     There are session and non-session variants.
     The session variants have the same name but are suffixed with "-sess".
     For example: `"MD5-sess"`.
- **`qop=`**
  - : Quoted string indicating the quality of protection supported by the server. This must be supplied, and unrecognised options must be ignored.
      - `"auth"`: Authentication
      - `"auth-int"`: Authentication with integrity protection
- **`charset="UTF-8"`** {{optional_inline}}
  - : Tells the client the server's preferred encoding scheme when submitting a username and password.
      The only allowed value is the case-insensitive string "UTF-8".
- **`userhash=`** `"true"` | `"false"` {{optional_inline}}
  - : A server may use this to indicate that it supports username hashing (default is `"false"`)


## Examples

### Basic authentication

A server that only supports basic authentication might have a `WWW-Authenticate` response header which looks like this:

```http
WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

A user-agent recieving this header would first prompt the user for their username and password, and then re-request the resource: this time including the (encoded) credentials in the {{HTTPHeader("Authorization")}} header.
The {{HTTPHeader("Authorization")}} header might look like this:

```https
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

For `"Basic"` authentication the credentials are constructed by first combining the username and the password with a colon (`aladdin:opensesame`), and then by encoding the resulting string in [`base64`](/en-US/docs/Glossary/Base64) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

> **Note:** See also [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) for examples on how to configure Apache or nginx servers to password protect your site with HTTP basic authentication.

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
