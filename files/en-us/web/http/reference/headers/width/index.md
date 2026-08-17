---
title: Width header
short-title: Width
slug: Web/HTTP/Reference/Headers/Width
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Width
sidebar: http
---

{{Deprecated_Header}}{{SecureContext_header}}{{Non-standard_Header}}

> [!WARNING]
> The `Width` header was standardized as {{HTTPHeader("Sec-CH-Width")}} and the new name is now preferred.

The HTTP **`Width`** {{Glossary("request header")}} is a [device client hint](/en-US/docs/Web/HTTP/Guides/Client_hints#device_client_hints) which indicates the desired resource width in physical pixels — the intrinsic size of an image. The provided pixel value is a number rounded to the smallest following integer (i.e., ceiling value).

The hint is only sent on image requests.

The hint allows the client to request a resource that is optimal for both the screen and the layout: taking into account both the density-corrected width of the screen and the image's extrinsic size within the layout.

If the desired resource width is not known at the time of the request or the resource does not have a display width, the `Width` header field can be omitted.
If the `Width` header appears more than once in a message the last occurrence is used.

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
Width: <number>
```

## Directives

- `<number>`
  - : The width of the resource in physical pixels, rounded up to the nearest integer.

## Examples

The server first needs to opt in to receive the `Width` header by sending the response headers {{HTTPHeader("Accept-CH")}} containing `Width`.

```http
Accept-CH: Width
```

Then on subsequent image requests the client might send `Width` header back:

```http
Width: 1920
```

## Browser compatibility

{{Compat}}

## See also

- Device and responsive image client hints
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Guides/Caching#vary) and {{HTTPHeader("Vary")}} header
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
