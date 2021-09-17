---
title: Authorization
slug: Web/HTTP/Headers/Authorization
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - Header
  - Authorization
  - Authentication
browser-compat: http.headers.Authorization
---
{{HTTPSidebar}}

The HTTP **`Authorization`** request header can be used to provide credentials that authenticate a user agent with a server, allowing access to a protected resource.

The **`Authorization`** header is usually, but not always, sent after the user agent first attempts to request a protected resource without credentials.
The server responds with a {{HTTPStatus("401")}} `Unauthorized` message that includes at least one {{HTTPHeader("WWW-Authenticate")}} header.
This header indicates what authentication schemes can be used to access the resource (and any additional information needed by the client to use them). 
The user-agent should select the most secure authentication scheme that it supports from those offered, prompt the user for their credentials, and then re-request the resource (including the encoded credentials in the **`Authorization`** header). 

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

```
Authorization: <auth-scheme> <credentials>
```

## Directives

- `<auth-scheme>`
  - : The [Authentication scheme](/en-US/docs/Web/HTTP/Authentication#authentication_schemes) that defines how the credentials are encoded.
    Some of the more common types are (case-insensitive): [Basic](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme) | Digest | Bearer | HOBA | Mutual | Negotiate | OAuth | SCRAM-SHA-1 | SCRAM-SHA-256 | vapid
    > **Note:** For more information/options see [HTTP Authentication > Authentication schemes](/en-US/docs/Web/HTTP/Authentication#authentication_schemes)

- \<credentials>

  - : The credentials, encoded according to the specified scheme.

    > **Note:** For information about the encoding algorithm, see the examples: below, in {{HTTPHeader("WWW-Authenticate")}}, in [HTTP Authentication](/en-US/docs/Web/HTTP/Authentication), and in the relevant specifications.


## Examples

### Basic authentication

For `"Basic"` authentication the credentials are constructed by first combining the username and the password with a colon (`aladdin:opensesame`), and then by encoding the resulting string in [`base64`](/en-US/docs/Glossary/Base64) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

```https
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

> **Warning:** {{Glossary("Base64")}}-encoding can easily be reversed to obtain the original name and password, so Basic authentication is completely insecure.
> {{Glossary("HTTPS")}} is always recommended when using authentication, but is even more so when using `Basic` authentication.

See also [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) for examples on how to configure Apache or nginx servers to password protect your site with HTTP basic authentication.

## Specifications

| Specification                                        | Title                                  |
| ---------------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Authorization", "4.2")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                                 | The 'Basic' HTTP Authentication Scheme |
| {{RFC("7616")}}                                 | HTTP Digest Access Authentication |

<!-- {{Specifications}} -->


## Browser compatibility

{{Compat}}

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
