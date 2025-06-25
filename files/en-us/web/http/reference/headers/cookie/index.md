---
title: Cookie header
short-title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
page-type: http-header
browser-compat: http.headers.Cookie
---

{{HTTPSidebar}}

The HTTP **`Cookie`** {{Glossary("request header")}} contains stored [HTTP cookies](/en-US/docs/Web/HTTP/Guides/Cookies) associated with the server (i.e., previously sent by the server with the {{HTTPHeader("Set-Cookie")}} header or set in JavaScript using {{domxref("Document.cookie")}}).

The `Cookie` header is optional and may be omitted if, for example, the browser's privacy settings block cookies.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

## Usage notes

### Duplicate cookie names

Cookies with the same name can coexist if they are set with different `Path`, `Domain`, or `Partitioned` attributes. For example, the following two `Set-Cookie` headers are valid and create distinct cookies:

- `Set-Cookie: sessionId=abc123; Path=/app1`
- `Set-Cookie: sessionId=xyz789; Path=/app2`

However, if a cookie is set with the same name, path, domain, and partitioning context as an existing one, it will overwrite that cookie.

{{Note("Some browsers isolate cookies by [partitioned contexts](/en-US/docs/Web/API/Document/cookie#partitioned_cookies), which can lead to cookies with the same name behaving independently based on their partition.")}}

## Directives

- `<cookie-list>`
  - : A list of name-value pairs in the form of `<cookie-name>=<cookie-value>`.
    Pairs in the list are separated by a semicolon and a space.

## Examples

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("413", "413 Content Too Large")}}
- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
