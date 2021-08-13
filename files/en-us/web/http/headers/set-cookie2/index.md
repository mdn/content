---
title: Set-Cookie2
slug: Web/HTTP/Headers/Set-Cookie2
tags:
  - Cookies
  - HTTP
  - Deprecated
  - Reference
  - header
browser-compat: http.headers.Set-Cookie2
---
{{HTTPSidebar}} {{deprecated_header}}

The obsolete **`Set-Cookie2`** HTTP response header used to
send cookies from the server to the user agent, but has been deprecated by the
specification. Use {{HTTPHeader("Set-Cookie")}} instead.

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
  </tbody>
</table>

## Syntax

```
Set-Cookie2: <cookie-name>=<cookie-value>
Set-Cookie2: <cookie-name>=<cookie-value>; Comment=<value>
Set-Cookie2: <cookie-name>=<cookie-value>; CommentURL=<http-url>
Set-Cookie2: <cookie-name>=<cookie-value>; Discard
Set-Cookie2: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie2: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie2: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie2: <cookie-name>=<cookie-value>; Port=<port-number>
Set-Cookie2: <cookie-name>=<cookie-value>; Secure
Set-Cookie2: <cookie-name>=<cookie-value>; Version=<version-number>

// Multiple directives are also possible, for example:
Set-Cookie2: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure

// Multiple cookies are separated by a comma
Set-Cookie2: <cookie-name>=<cookie-value>, <cookie-name>=<cookie-value>, ...
```

## Specifications

| Specification                            | Title                                                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------------------------- |
| {{RFC("2965", "Set-Cookie2")}} | Historic specification of HTTP State Management Mechanism, obsoleted by {{RFC("6265")}} |

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
