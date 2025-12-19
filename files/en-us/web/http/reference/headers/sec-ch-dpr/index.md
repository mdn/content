---
title: Sec-CH-DPR header
short-title: Sec-CH-DPR
slug: Web/HTTP/Reference/Headers/Sec-CH-DPR
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-DPR
sidebar: http
---

{{SecureContext_Header}}{{SeeCompatTable}}

The HTTP **`Sec-CH-DPR`** {{Glossary("request header")}} provides [device client hints](/en-US/docs/Web/HTTP/Guides/Client_hints) about the client device pixel ratio (DPR).
This ratio is the number of physical device pixels corresponding to every {{Glossary("CSS pixel")}}.

The hint is useful when selecting image sources that best correspond to a screen's pixel density.
This is similar to the role played by `x` descriptors in the `<img>` [`srcset`](/en-US/docs/Web/HTML/Reference/Elements/img#srcset) attribute to allow user agents to select a preferred image.

If the `Sec-CH-DPR` header appears more than once in a message the last occurrence is used.

Servers that opt in to the `Sec-CH-DPR` client hint will typically also specify it in the {{HTTPHeader("Vary")}} header to inform caches that the server may send different responses based on the header value in a request.

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
Sec-CH-DPR: <number>
```

## Directives

- `<number>`
  - : The client device pixel ratio.

## Examples

A server must first opt in to receive the `Sec-CH-DPR` header by sending the response header {{HTTPHeader("Accept-CH")}} containing the directive `Sec-CH-DPR`.

```http
Accept-CH: Sec-CH-DPR
```

Then on subsequent requests the client might send `Sec-CH-DPR` header to the server:

```http
Sec-CH-DPR: 2.0
```

## Browser compatibility

{{Compat}}

## See also

- Device and responsive image client hints
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Guides/Caching#vary) and {{HTTPHeader("Vary")}}
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
