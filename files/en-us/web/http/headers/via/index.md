---
title: Via
slug: Web/HTTP/Headers/Via
page-type: http-header
browser-compat: http.headers.Via
---

{{HTTPSidebar}}

The **`Via`** general header is added by proxies, both forward
and reverse, and can appear in the request or response headers. It
is used for tracking message forwards, avoiding request loops, and identifying the
protocol capabilities of senders along the request/response chain.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Response header")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## Directives

- \<protocol-name>
  - : Optional. The name of the protocol used, such as "HTTP".
- \<protocol-version>
  - : The version of the protocol used, such as "1.1".
- \<host> and \<port>
  - : Public proxy URL and port.
- \<pseudonym>
  - : Name/alias of an internal proxy.

## Examples

```http
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("X-Forwarded-For")}}
- [Heroku's proxy library Vegur](https://github.com/heroku/vegur)
