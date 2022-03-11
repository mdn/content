---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
tags:
  - HTTP
  - Reference
  - Request header
  - header
  - NavigationPreloadManager
browser-compat: http.headers.Service-Worker-Navigation-Preload
---
{{HTTPSidebar}}

The **`Service-Worker-Navigation-Preload`** request header indicates that the request was the result of a {{domxref("fetch()")}} operation made during service worker navigation preloading.
It allows a server to respond with a different resource than for a normal `fetch()`.

For more information see {{domxref("NavigationPreloadManager.setHeaderValue()")}} (and {{domxref("NavigationPreloadManager")}}).

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
Service-Worker-Navigation-Preload: <value>
```

## Directives

- `<value>`
  - : Any arbitrary value understood by the client and server.
    May be set in the client using {{domxref("NavigationPreloadManager.setHeaderValue()")}}.
    Defaults to `true`.

## Examples

```http
Service-Worker-Navigation-Preload: true
Service-Worker-Navigation-Preload: json_fragment1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

