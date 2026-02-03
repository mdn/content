---
title: Sec-CH-Device-Memory header
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
page-type: http-header
status:
  - experimental
browser-compat: http.headers.Sec-CH-Device-Memory
sidebar: http
---

{{SecureContext_Header}}{{SeeCompatTable}}

The HTTP **`Sec-CH-Device-Memory`** {{Glossary("request header")}} is used in [device client hints](/en-US/docs/Web/HTTP/Guides/Client_hints#device_client_hints) to indicate the approximate amount of available RAM on the client device, in gigabytes.
The header is part of the {{DOMxRef("Device Memory API", "Device Memory API", "", "nocode")}}.

Client hints are accessible only on secure origins.
A server has to opt in to receive the `Sec-CH-Device-Memory` header from the client, by first sending the {{HTTPHeader("Accept-CH")}} response header.
Servers that opt in to the `Sec-CH-Device-Memory` client hint will typically also specify it in the {{HTTPHeader("Vary")}} header to inform caches that the server may send different responses based on the header value in a request.

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
Sec-CH-Device-Memory: <number>
```

## Directives

- `<number>`
  - : The approximate amount of device RAM.

    The amount of device RAM can be used as a {{glossary("fingerprinting")}} variable, so values for the header are intentionally coarse to reduce the potential for its misuse.
    Values are only reported in powers of two, and are clamped to an implementation-defined minimum lower value and a maximum upper value.
    These bounds may change over time (see [browser compatibility table](#browser_compatibility)).

    For example, if a browser does not report below `2` or above `32` then the value is one of: `2`, `4`, `8`, `16`, `32`.

## Examples

The server first needs to opt in to receive `Sec-CH-Device-Memory` header by sending the {{HTTPHeader("Accept-CH")}} response header containing `Sec-CH-Device-Memory`:

```http
Accept-CH: Sec-CH-Device-Memory
```

Then on subsequent requests the client might send `Sec-CH-Device-Memory` header back:

```http
Sec-CH-Device-Memory: 1
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{DOMxRef("Device Memory API", "Device Memory API", "", "nocode")}}
- {{DOMxRef("Navigator.deviceMemory")}}
- {{DOMxRef("WorkerNavigator.deviceMemory")}}
- Device and responsive image client hints
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Guides/Caching#vary) and {{HTTPHeader("Vary")}}
