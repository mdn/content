---
title: Device-Memory header
short-title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
page-type: http-header
status:
  - deprecated
  - non-standard
browser-compat: http.headers.Device-Memory
sidebar: http
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> The `Device-Memory` header was standardized as {{HTTPHeader("Sec-CH-Device-Memory")}} and the new name is now preferred.

The HTTP **`Device-Memory`** {{Glossary("request header")}} is used in [device client hints](/en-US/docs/Web/HTTP/Guides/Client_hints#device_client_hints) to indicate the approximate amount of available RAM on the client device, in gigabytes.
The header is part of the {{DOMxRef("Device Memory API", "Device Memory API", "", "nocode")}}.

Client hints are accessible only on secure origins.
A server has to opt in to receive the `Device-Memory` header from the client, by first sending the {{HTTPHeader("Accept-CH")}} response header.
Servers that opt in to the `Device-Memory` client hint will typically also specify it in the {{HTTPHeader("Vary")}} header to inform caches that the server may send different responses based on the header value in a request.

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
Device-Memory: <number>
```

## Directives

- `<number>`
  - : The approximate amount of device RAM.

    The amount of device RAM can be used as a {{glossary("fingerprinting")}} variable, so values for the header are intentionally coarse to reduce the potential for its misuse. Values are only reported in powers of two, and are clamped to an implementation-defined minimum lower value and a maximum upper value. Browsers may update these bounds over time (see [browser compatibility table](#browser_compatibility)).

    For example, if a browser does not report below `2` or above `32` then the value is one of: `2`, `4`, `8`, `16`, `32`.

## Examples

The server first needs to opt in to receive `Device-Memory` header by sending the {{HTTPHeader("Accept-CH")}} response header containing `Device-Memory`:

```http
Accept-CH: Device-Memory
```

Then on subsequent requests the client might send `Device-Memory` header back:

```http
Device-Memory: 1
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
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Content-DPR")}} {{deprecated_inline}}
  - {{HTTPHeader("Viewport-Width")}} {{deprecated_inline}}
  - {{HTTPHeader("Width")}} {{deprecated_inline}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Guides/Caching#vary) and {{HTTPHeader("Vary")}}
