---
title: Device-Memory
slug: Web/HTTP/Headers/Device-Memory
page-type: http-header
browser-compat: http.headers.Device-Memory
---

{{HTTPSidebar}}{{securecontext_header}}

The HTTP **`Device-Memory`** {{Glossary("request header")}} is used in [device client hints](/en-US/docs/Web/HTTP/Client_hints#device_client_hints) to indicate the approximate amount of available RAM on the client device, in gigabytes.
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
Device-Memory: <number>
```

## Directives

- `<number>`
  - : The approximate amount of device RAM. Possible values are: `0.25`, `0.5`, `1`, `2`, `4`, `8`.
    The amount of device RAM can be used as a {{glossary("fingerprinting")}} variable, so values for the header are intentionally coarse to reduce the potential for its misuse.

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
- Device client hints
  - {{HTTPHeader("Content-DPR")}}
  - {{HTTPHeader("DPR")}}
  - {{HTTPHeader("Viewport-Width")}}
  - {{HTTPHeader("Width")}}
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
