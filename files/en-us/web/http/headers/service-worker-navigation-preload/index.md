---
title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Headers/Service-Worker-Navigation-Preload
page-type: http-header
browser-compat: http.headers.Service-Worker-Navigation-Preload
---

{{HTTPSidebar}}

The HTTP **`Service-Worker-Navigation-Preload`** {{Glossary("request header")}} indicates that the request was the result of a {{domxref("Window/fetch", "fetch()")}} operation made during service worker navigation preloading.
It allows a server to respond with a different resource than for a normal `fetch()`.

If a different response may result from setting this header, the server must include a {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}} header in responses to ensure that different responses are cached.

For more information see {{domxref("NavigationPreloadManager.setHeaderValue()")}} (and {{domxref("NavigationPreloadManager")}}).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Service-Worker-Navigation-Preload: <value>
```

## Directives

- `<value>`
  - : An arbitrary value that indicates what data should be sent in the response to the preload request.
    This defaults to `true`.
    It maybe set to any other string value in the service worker, using {{domxref("NavigationPreloadManager.setHeaderValue()")}}.

## Examples

### Service worker navigation preloading headers

The following request header is sent by default in navigation preload requests:

```http
Service-Worker-Navigation-Preload: true
```

The service worker can set a different header value using {{domxref("NavigationPreloadManager.setHeaderValue()")}}.
For example, in order to request that a fragment of the requested resource be returned in JSON format, the value could be set with the string `json_fragment1`.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}} header
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
