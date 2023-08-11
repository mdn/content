---
title: Cookie
slug: Web/HTTP/Headers/Cookie
page-type: http-header
browser-compat: http.headers.Cookie
---

{{HTTPSidebar}}

The **`Cookie`** HTTP request header contains stored [HTTP cookies](/en-US/docs/Web/HTTP/Cookies) associated with the server (i.e. previously sent by the server with the {{HTTPHeader("Set-Cookie")}} header or set in JavaScript using {{domxref("Document.cookie")}}).

The `Cookie` header is optional and may be omitted if, for example, the browser's privacy settings block cookies.

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

## Syntax

```http
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## Directives

- \<cookie-list>
  - : A list of name-value pairs in the form of `<cookie-name>=<cookie-value>`. Pairs in the list are separated by a semicolon and a space (`'; '`).

## Examples

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
