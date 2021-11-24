---
title: Origin
slug: Web/HTTP/Headers/Origin
tags:
  - HTTP
  - Reference
  - Request header
  - header
  - origin
browser-compat: http.headers.Origin
---
{{HTTPSidebar}}

The **`Origin`** HyperText Transfer Protocol (HTTP) request header indicates the origin of the request. This header does not include any path information. It is similar to the {{HTTPHeader("Referer")}} header, but unlike that header, the Origin header does not disclose the whole path.

> **Note:** Basically, browsers add the {{httpheader("Origin")}} request header to:
>
> - all {{Glossary("CORS", "cross origin")}} requests.
> - [same-origin](/en-US/docs/Web/Security/Same-origin_policy) requests except for {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} requests (i.e. they are added to same-origin {{HTTPMethod("POST")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("PATCH")}}, and {{HTTPMethod("DELETE")}} requests).
>
> There are some exceptions to the above rules; for example, if a cross-origin {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} request is made in [no-cors mode](/en-US/docs/Web/API/Request/mode#value), the `Origin` header will not be added.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Origin: null
Origin: <scheme> "://" <hostname> [ ":" <port> ]
```

## Directives

- \<scheme>
  - : The protocol that is used. Usually, it is the HTTP protocol or its secured version, HTTPS.
- \<hostname>
  - : The domain name of the server (for virtual hosting) or the IP.
- \<port> {{optional_inline}}
  - : TCP port number on which the server is listening. If no port is given, the default port for the service requested (e.g., "80" for an HTTP URL) is implied.

## Examples

```
Origin: https://developer.mozilla.org
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Host")}}
- {{HTTPHeader("Referer")}}
- [Same-origin policy](/en-US/docs/Web/Security/Same-origin_policy)
- Stack Overflow: [When do browsers send the Origin header? When do browsers set the origin to null?](https://stackoverflow.com/a/42242802/)
