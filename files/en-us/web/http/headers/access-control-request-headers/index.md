---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
page-type: http-header
browser-compat: http.headers.Access-Control-Request-Headers
---

{{HTTPSidebar}}

The HTTP **`Access-Control-Request-Headers`** {{Glossary("request header")}} is used by browsers when issuing a {{glossary("preflight request")}} to let the server know which [HTTP headers](/en-US/docs/Web/HTTP/Headers) the client might send when the actual request is made (such as with {{domxref("Window/fetch", "fetch()")}} or {{domxref("XMLHttpRequest.setRequestHeader()")}}). The complementary server-side header of {{HTTPHeader("Access-Control-Allow-Headers")}} will answer this browser-side header.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Access-Control-Request-Headers: <header-name>,<header-name>,…
```

## Directives

- `<header-name>`
  - : A sorted list of unique, comma-separated, lowercase [HTTP headers](/en-US/docs/Web/HTTP/Headers) that are included in the request.

## Examples

```http
Access-Control-Request-Headers: content-type,x-pingother
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Access-Control-Request-Method")}}
