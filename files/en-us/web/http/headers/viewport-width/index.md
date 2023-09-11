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

The **`Viewport-Width`** [device client hint](/en-US/docs/Web/HTTP/Client_hints) request header provides the client's layout viewport width in {{Glossary("CSS pixel","CSS pixels")}}. The value is rounded up to the smallest following integer (i.e. ceiling value).

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
      <td>no</td>
    </tr>
  </tbody>
</table>

The hint can be used with other screen-specific hints to deliver images optimized for a specific screen size, or to omit resources that are not needed for a particular screen width.

If the `Viewport-Width` header appears more than once in a message the last occurrence is used.

> **Note:**
>
> - Client Hints are accessible only on secure origins (via TLS).
> - A server has to opt in to receive the `Viewport-Width` header from the client, by sending the {{HTTPHeader("Accept-CH")}} response header.
> - Servers that opt in to the `Viewport-Width` client hint will typically also specify it in the {{HTTPHeader("Vary")}} header. This informs caches that the server may send different responses based on the header value in a request.
> - `Viewport-Width` was removed from the original client hints specification in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07). The proposed replacement is [`Sec-CH-Viewport-Width`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-viewport-width) (Responsive Image Client Hints).

## Syntax

```http
Viewport-Width: <number>
```

## Directives

- \<number>
  - : The width of the user's viewport in {{Glossary("CSS pixel","CSS pixels")}}, rounded up to the nearest integer.

## Examples

A server must first opt in to receive the `Viewport-Width` header by sending the response header {{HTTPHeader("Accept-CH")}} containing the directive `Viewport-Width`.

```http
Accept-CH: Viewport-Width
```

Then on subsequent requests the client might send `Viewport-Width` header back:

```http
Viewport-Width: 320
```

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- Device client hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
