---
title: Sec-CH-Viewport-Height header
short-title: Sec-CH-Viewport-Height
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Height
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-Viewport-Height
sidebar: http
---

{{SecureContext_header}}{{SeeCompatTable}}

The HTTP **`Sec-CH-Viewport-Height`** {{Glossary("request header")}} is a [device client hint](/en-US/docs/Web/HTTP/Guides/Client_hints) which provides the client's layout viewport height in {{Glossary("CSS pixel", "CSS pixels")}}.
The value is rounded up to the smallest following integer (i.e., ceiling value).

The hint can be used with other screen-specific hints to deliver images optimized for a specific screen size, or to omit resources that are not needed for a particular screen height.
If the `Sec-CH-Viewport-Height` header appears more than once in a message the last occurrence is used.

A server has to opt-in to receive the `Sec-CH-Viewport-Height` header from the client, by sending the {{HTTPHeader("Accept-CH")}} response header.
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
Sec-CH-Viewport-Height: <number>
```

## Directives

- `<number>`
  - : The height of the user's viewport in {{Glossary("CSS pixel","CSS pixels")}}, rounded up to the nearest integer.

## Examples

### Using Sec-CH-Viewport-Height

A server must first opt-in to receive the `Sec-CH-Viewport-Height` header by sending the response header {{HTTPHeader("Accept-CH")}} containing the directive `Sec-CH-Viewport-Height`.

```http
Accept-CH: Sec-CH-Viewport-Height
```

In subsequent requests, the client might send `Sec-CH-Viewport-Height` header:

```http
Sec-CH-Viewport-Height: 480
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Device and responsive image client hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Guides/Caching#vary) and {{HTTPHeader("Vary")}} header
