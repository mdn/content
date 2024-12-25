---
title: Service-Worker
slug: Web/HTTP/Headers/Service-Worker
page-type: http-header
browser-compat: http.headers.Service-Worker
---

{{HTTPSidebar}}

The HTTP **`Service-Worker`** {{Glossary("request header")}} is included in fetches for a service worker's script resource.
This header helps administrators log service worker script requests for monitoring purposes.

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
Service-Worker: script
```

## Directives

- `script`
  - : A value indicating that this is a script.
    This is the only allowed directive for this header.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Service-Worker-Allowed")}} header
- [Service worker API](/en-US/docs/Web/API/Service_Worker_API)
