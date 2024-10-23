---
title: Accept-CH
slug: Web/HTTP/Headers/Accept-CH
page-type: http-header
browser-compat: http.headers.Accept-CH
---

{{HTTPSidebar}}{{securecontext_header}}

The HTTP **`Accept-CH`** {{Glossary("response header")}} may be set by a server to specify which [client hint](/en-US/docs/Web/HTTP/Client_hints) headers should be included by the client in subsequent requests.
To ensure client hints are sent reliably, the `Accept-CH` header should be persisted for all secure requests.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header")}}
      </th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Accept-CH: <client-hints-headers>

// Client hint headers in a comma-separated list
Accept-CH: <ch-header-one>, <ch-header-two>
```

## Examples

### Client hint response headers

The following response headers indicate that the server accepts `Viewport-Width` and `Width` [device client hints](/en-US/docs/Web/HTTP/Client_hints#device_client_hints) in subsequent requests.
The {{HTTPHeader("Vary")}} header indicates which values were used to [vary the response](/en-US/docs/Web/HTTP/Client_hints#caching_and_client_hints) based on the accepted client hints.

```http
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Vary")}}
