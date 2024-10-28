---
title: Location
slug: Web/HTTP/Headers/Location
page-type: http-header
browser-compat: http.headers.Location
---

{{HTTPSidebar}}

The HTTP **`Location`** {{Glossary("response header")}} indicates the URL to redirect a page to.
It only provides a meaning when served with a `3XX` [redirection response](/en-US/docs/Web/HTTP/Status#redirection_messages) or a {{HTTPStatus("201", "201 Created")}} status response.

In redirections, the HTTP method used to make the redirected request to fetch the page pointed to by `Location` depends on the original method and the kind of redirection:

- {{HTTPStatus("303", "303 See Other")}} responses always result in a {{HTTPMethod("GET")}} request in the redirection.
- {{HTTPStatus("307", "307 Temporary Redirect")}} and {{HTTPStatus("308", "308 Permanent Redirect")}} use the same method as the initiating request.
- {{HTTPStatus("301", "301 Moved Permanently")}} and {{HTTPStatus("302", "302 Found")}} should use the same request method as the initiating request, although this is not guaranteed for older user-agents.

All responses with one of the above status codes include a `Location` header.

In cases of resource creation, it indicates the URL of the newly-created resource so that a client can make a request for it immediately.

`Location` and {{HTTPHeader("Content-Location")}} are different.
`Content-Location` indicates the URL to use to directly access the resource in future when [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) occurred.
`Location` is associated with the response, while {{HTTPHeader("Content-Location")}} is associated with the representation that was returned.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Location: <url>
```

## Directives

- `<url>`
  - : May be relative to the request URL or an absolute URL.

## Examples

```http
Location: /index.html
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Location")}}
- Status responses including a `Location` header: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
