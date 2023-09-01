---
title: Accept-CH-Lifetime
slug: Web/HTTP/Headers/Accept-CH-Lifetime
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Accept-CH-Lifetime
---

{{HTTPSidebar}}{{securecontext_header}}{{Deprecated_header}}{{Non-standard_header}}

> **Warning:** The header was removed from the specification in [draft 8](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-08).

The **`Accept-CH-Lifetime`** header is set by the server to
specify the persistence of the [client hint headers](/en-US/docs/Web/HTTP/Client_hints) it specified using {{HTTPHeader("Accept-CH")}}, that the client should
include in subsequent requests.

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

> **Note:** Client Hints are accessible only on secure origins (via TLS).
> {{HTTPHeader("Accept-CH")}} and {{HTTPHeader("Accept-CH-Lifetime")}} headers should be persisted for all secure requests
> to ensure Client Hints are sent reliably.

## Syntax

```http
Accept-CH-Lifetime: <age>
```

## Examples

```http
Accept-CH: Viewport-Width
Accept-CH-Lifetime: 86400
```

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Accept-CH")}}
- {{HTTPHeader("Vary")}}
