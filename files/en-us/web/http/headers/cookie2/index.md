---
title: Cookie2
slug: Web/HTTP/Headers/Cookie2
tags:
  - HTTP
  - Deprecated
  - Reference
  - header
  - request
browser-compat: http.headers.Cookie2
---
{{HTTPSidebar}} {{deprecated_header}}

The obsolete **`Cookie2`** HTTP request header used to advise the server that the user agent understands "new-style" cookies, but nowadays user agents will use the {{HTTPHeader("Cookie")}} header instead, not this one.

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

## Examples

```
Cookie2: $Version="1"
```

## Specifications

| Specification                        | Title                                                                                        |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| {{RFC("2965", "Cookie2")}} | Historic specification of HTTP State Management Mechanism, obsoleted by {{RFC("6265")}} |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
