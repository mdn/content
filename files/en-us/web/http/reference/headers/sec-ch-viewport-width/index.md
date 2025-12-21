---
title: Sec-CH-Viewport-Width header
short-title: Sec-CH-Viewport-Width
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Width
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-Viewport-Width
sidebar: http
---

{{SecureContext_header}}{{SeeCompatTable}}

The HTTP **`Sec-CH-Viewport-Width`** {{Glossary("request header")}} is a [device client hint](/en-US/docs/Web/HTTP/Guides/Client_hints) which provides the client's layout viewport width in {{Glossary("CSS pixel", "CSS pixels")}}.
The value is rounded up to the smallest following integer (i.e., ceiling value).

The hint can be used with other screen-specific hints to deliver images optimized for a specific screen size, or to omit resources that are not needed for a particular screen width.
If the `Sec-CH-Viewport-Width` header appears more than once in a message the last occurrence is used.

A server has to opt-in to receive the `Sec-CH-Viewport-Width` header from the client, by sending the {{HTTPHeader("Accept-CH")}} response header.
Servers that opt-in will typically also specify it in the {{HTTPHeader("Vary")}} header which informs caches that the server may send different responses based on the header value in a request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/en-US/docs/Web/HTTP/Guides/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Sec-CH-Viewport-Width: <number>
```

## Directives

- `<number>`
  - : The width of the user's viewport in {{Glossary("CSS pixel","CSS pixels")}}, rounded up to the nearest integer.

## Examples

### Using Sec-CH-Viewport-Width

A server must first opt-in to receive the `Sec-CH-Viewport-Width` header by sending the response header {{HTTPHeader("Accept-CH")}} containing the directive `Sec-CH-Viewport-Width`.

```http
Accept-CH: Sec-CH-Viewport-Width
```

In subsequent requests, the client might send `Sec-CH-Viewport-Width` header:

```http
Sec-CH-Viewport-Width: 320
```

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device and responsive image client hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Guides/Caching#vary) and {{HTTPHeader("Vary")}} header
