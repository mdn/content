---
title: Authorization
slug: Web/HTTP/Headers/Authorization
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - header
---
{{HTTPSidebar}}

The HTTP **`Authorization`** request header contains the
credentials to authenticate a user agent with a server, usually, but not
necessarily, after the server has responded with a {{HTTPStatus("401")}}
`Unauthorized` status and the {{HTTPHeader("WWW-Authenticate")}} header.

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
Authorization: <type> <credentials>
```

## Directives

- \<type>

  - : The [Authentication type](/en-US/docs/Web/HTTP/Authentication#authentication_schemes), that is which algorithm will be used for authentication. A common type is [`"Basic"`](/en-US/docs/Web/HTTP/Authentication#basic_authentication_scheme).

    Other types common types can be found at the [IANA registry of Authentication schemes](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).

    > **Note:** AWS S3 servers use a specific authentication,
    > [`AWS4-HMAC-SHA256`](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html).

- \<credentials>

  - : If the `"Basic"` authentication scheme is used,
    the credentials are constructed
    by first combining the username and the password with a colon (`aladdin:opensesame`),
    then by encoding the resulting string in [`base64`](/en-US/docs/Glossary/Base64) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

    > **Note:** {{Glossary("Base64")}}-encoding does not mean encryption or hashing!
    > As base64 is a reversible encoding,
    > this method is equally (in)secure
    > as sending the credentials in clear text.
    > So you should alwaysuse {{Glossary("HTTPS")}} in conjunction with `Basic` authentication.

## Examples

```
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

See also [HTTP authentication](/en-US/docs/Web/HTTP/Authentication) for
examples on how to configure Apache or nginx servers to password protect your site with
HTTP basic authentication.

## Specifications

| Specification                                        | Title                                  |
| ---------------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Authorization", "4.2")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                                 | The 'Basic' HTTP Authentication Scheme |

## See also

- [HTTP authentication](/en-US/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
