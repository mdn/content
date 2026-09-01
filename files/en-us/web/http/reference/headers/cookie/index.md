---
title: Cookie header
short-title: Cookie
slug: Web/HTTP/Reference/Headers/Cookie
page-type: http-header
browser-compat: http.headers.Cookie
sidebar: http
---

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

## Directives

- `<cookie-list>`
  - : A list of name-value pairs in the form of `<cookie-name>=<cookie-value>`.
    Pairs in the list are separated by a semicolon and a space.

## Examples

### Sending cookies

```http
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1
```

### Cookies with the same name

Multiple cookies can have the same name if they were set with different `Path` or `Domain` attributes. 
This includes the case where one cookie was set with a `Domain` attribute and the other without, even if they apply to the same host. If more than one matches a request, the browser can include all of them in the `Cookie` header.

Partitioned cookies are keyed on the top-level site as well, so cookies can have the same name if set by the same host in two different embedding contexts. See [CHIPS](/en-US/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

For example, suppose separate responses from the same host set these cookies:

```http
Set-Cookie: theme=light; Path=/
Set-Cookie: theme=dark; Path=/docs
```

A request to `/docs` can contain both of them:

```http
Cookie: theme=dark; theme=light
```

The `Cookie` header does not include the cookies' attributes, and the cookie entries are unordered, so the server cannot determine their paths or domains from the header alone.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPStatus("413", "413 Content Too Large")}}
- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
- [Cookie Store API](/en-US/docs/Web/API/Cookie_Store_API)
