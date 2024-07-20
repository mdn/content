---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
page-type: http-header
browser-compat: http.headers.Accept-CH
---

{{HTTPSidebar}}{{securecontext_header}}

The **`Accept-CH`** header may be set by a server to specify which [client hints](/en-US/docs/Web/HTTP/Client_hints) headers a client should include in subsequent requests.

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
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>no</td>
    </tr>
  </tbody>
</table>

> **Note:** Client hints are accessible only on secure origins (via TLS). The `Accept-CH` header should be persisted for all secure requests to ensure client hints are sent reliably.

## Syntax

```http
Accept-CH: <comma separated list of client hint headers>
```

## Examples

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

> **Note:** Remember to [vary the response](/en-US/docs/Web/HTTP/Client_hints#caching_and_client_hints) based on the accepted client hints.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Vary")}}
