---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
page-type: http-header
browser-compat: http.headers.Upgrade-Insecure-Requests
---

{{HTTPSidebar}}

The HTTP **`Upgrade-Insecure-Requests`** request header sends a signal to the server expressing the client's preference for an encrypted and authenticated response, and that it can successfully handle the {{CSP("upgrade-insecure-requests")}} [CSP](/en-US/docs/Web/HTTP/CSP) directive.

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

```http
Upgrade-Insecure-Requests: 1
```

## Examples

A client's request signals to the server that it supports the upgrade mechanisms of {{CSP("upgrade-insecure-requests")}}:

```http
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

The server can now redirect to a secure version of the site. A {{HTTPHeader("Vary")}} header can be used so that the site isn't served by caches to clients that don't support the upgrade mechanism.

```http
Location: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("upgrade-insecure-requests")}} directive
