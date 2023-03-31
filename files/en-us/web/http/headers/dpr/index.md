---
title: DPR
slug: Web/HTTP/Headers/DPR
status:
  - deprecated
  - non-standard
browser-compat: http.headers.DPR
---

{{HTTPSidebar}}{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

The **`DPR`** [device client hint](/en-US/docs/Web/HTTP/Client_hints) request header provides the client device pixel ratio. This ratio is the number of physical device pixels corresponding to every {{Glossary("CSS pixel")}}.

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

The hint is useful when selecting image sources that best correspond to a screen's pixel density. This is similar to the role played by `x` descriptors in the `<img>` [`srcset`](/en-US/docs/Web/HTML/Element/img#srcset) attribute to allow user agents to select a preferred image.

If a server uses the `DPR` hint to choose which resource is sent in a response, the response must include the {{HTTPHeader("Content-DPR")}} header. The client must use the value in `Content-DPR` for layout if it differs from the value in the request's `DPR` header.

If the `DPR` header appears more than once in a message the last occurrence is used.

> **Note:**
>
> - Client Hints are accessible only on secure origins (via TLS).
> - A server has to opt in to receive the `DPR` header from the client, by sending the {{HTTPHeader("Accept-CH")}} response header.
> - Servers that opt in to the `DPR` client hint will typically also specify it in the {{HTTPHeader("Vary")}} header. This informs caches that the server may send different responses based on the header value in a request.
> - `DPR` was removed from the client hints specification in [draft-ietf-httpbis-client-hints-07](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07). The proposed replacement is [`Sec-CH-DPR`](https://wicg.github.io/responsive-image-client-hints/#sec-ch-dpr) (Responsive Image Client Hints).

## Syntax

```http
DPR: <number>
```

## Directives

- `<number>`
  - : The client device pixel ratio.

## Examples

A server must first opt in to receive the `DPR` header by sending the response header {{HTTPHeader("Accept-CH")}} containing the directive `DPR`.

```http
Accept-CH: DPR
```

Then on subsequent requests the client might send `DPR` header to the server:

```http
DPR: 2.0
```

If a request with the `DPR` header (as shown above) is for an image resource, then the server response must include the {{HTTPHeader("Content-DPR")}} header:

```http
Content-DPR: 2.0
```

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- Device client hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("Device-Memory")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
