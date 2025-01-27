---
title: Viewport-Width
slug: Web/HTTP/Headers/Viewport-Width
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Viewport-Width
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> The `Viewport-Width` header was removed from the client hints specification in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07).
> The proposed replacement is [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

The HTTP **`Viewport-Width`** {{Glossary("request header")}} is a [device client hint](/en-US/docs/Web/HTTP/Client_hints) which provides the client's layout viewport width in {{Glossary("CSS pixel", "CSS pixels")}}.
The value is rounded up to the smallest following integer (i.e., ceiling value).

The hint can be used with other screen-specific hints to deliver images optimized for a specific screen size, or to omit resources that are not needed for a particular screen width.
If the `Viewport-Width` header appears more than once in a message the last occurrence is used.

A server has to opt-in to receive the `Viewport-Width` header from the client, by sending the {{HTTPHeader("Accept-CH")}} response header.
Servers that opt-in will typically also specify it in the {{HTTPHeader("Vary")}} header which informs caches that the server may send different responses based on the header value in a request.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        <a href="/en-US/docs/Web/HTTP/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Viewport-Width: <number>
```

## Directives

- `<number>`
  - : The width of the user's viewport in {{Glossary("CSS pixel","CSS pixels")}}, rounded up to the nearest integer.

## Examples

### Using Viewport-Width

A server must first opt-in to receive the `Viewport-Width` header by sending the response header {{HTTPHeader("Accept-CH")}} containing the directive `Viewport-Width`.

```http
Accept-CH: Viewport-Width
```

In subsequent requests, the client might send `Viewport-Width` header:

```http
Viewport-Width: 320
```

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{HTTPHeader("Content-DPR")}}, {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}} device client hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}} header
