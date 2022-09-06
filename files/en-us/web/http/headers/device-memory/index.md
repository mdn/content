---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
tags:
  - Device-Memory
  - Client hints
  - Device Memory API
  - HTTP
  - HTTP Header
  - Request header
  - Experimental
browser-compat: http.headers.Device-Memory
---
{{HTTPSidebar}} {{SeeCompatTable}} {{securecontext_header}}

The **`Device-Memory`** [device client hint](/en-US/docs/Web/HTTP/Client_hints#device_client_hints) request header field indicates the approximate amount of available RAM on the client device. The header is part of the [Device Memory API](/en-US/docs/Web/API/Device_Memory_API).

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

> **Note:**
>
> - Client Hints are accessible only on secure origins (via TLS).
> - A server has to opt in to receive the `Device-Memory` header from the client, by sending the {{HTTPHeader("Accept-CH")}} response header.
> - Servers that opt in to the `Device-Memory` client hint will typically also specify it in the {{HTTPHeader("Vary")}} header. This informs caches that the server may send different responses based on the header value in a request.

## Syntax

```http
Device-Memory: <number>
```

## Directives

- `<number>`
  - : The approximate amount of device RAM. Possible values are: `0.25`, `0.5`, `1`, `2`, `4`, `8`.

The amount of device RAM can be used as a fingerprinting variable, so values for the header are intentionally coarse to reduce the potential for its misuse.

## Examples

The server first needs to opt in to receive `Device-Memory` header by sending the response headers {{HTTPHeader("Accept-CH")}} containing `Device-Memory`.

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

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- [Device Memory API](/en-US/docs/Web/API/Device_Memory_API)
- {{DOMxRef("Navigator.deviceMemory")}}
- Device client hints

  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
