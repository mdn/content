---
title: Via
slug: Web/HTTP/Headers/Via
page-type: http-header
browser-compat: http.headers.Via
---

{{HTTPSidebar}}

The **`Via`** {{glossary("request header", "request")}} and {{glossary("response header")}} is added by {{Glossary("Proxy_server", "proxies")}}, both forward and reverse.
It is used for tracking message forwards, avoiding request loops, and identifying the protocol capabilities of senders along the request/response chain.

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
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Via: [<protocol-name>/]<protocol-version> <host>[:<port>]
Via: [<protocol-name>/]<protocol-version> <pseudonym>
```

## Directives

- `<protocol-name>` {{optional_inline}}
  - : The name of the protocol used, such as "HTTP".
- `<protocol-version>`
  - : The version of the protocol used, such as "1.1".
- `<host>`
  - : Public proxy URL and optional `<port>`.
    If a host is not provided, then a `<pseudonym>` must be used.
- `<pseudonym>`
  - : Name/alias of an internal proxy.
    If a pseudonym is not provided, then a `<host>` must be used.

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
