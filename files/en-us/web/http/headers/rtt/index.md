---
title: RTT
slug: Web/HTTP/Headers/RTT
page-type: http-header
status:
  - experimental
browser-compat: http.headers.RTT
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP **`RTT`** {{Glossary("request header")}} is a [network client hint](/en-US/docs/Web/HTTP/Client_hints#network_client_hints) which provides the approximate round trip time on the application layer, in milliseconds.
The RTT hint includes server processing time, unlike transport layer RTT.

The RTT value is rounded to the nearest 25 milliseconds to prevent [fingerprinting](/en-US/docs/Glossary/Fingerprinting), although there are many other mechanisms an attacker might use to obtain similar round-trip information.

The hint allows a server to choose what information is sent based on the network responsiveness/latency. For example, it might choose to send fewer resources.

> [!NOTE]
> The {{HTTPHeader("Vary")}} header is used in responses to indicate that a different resource is sent for every different value of the header (see [HTTP Caching Vary](/en-US/docs/Web/HTTP/Caching#vary)). Even if `RTT` is used to configure what resources are sent consider omitting it in the {{HTTPHeader("Vary")}} header — it is likely to change often, which effectively makes the resource uncacheable.

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
RTT: <number>
```

## Directives

- `<number>`
  - : The approximate round trip time in milliseconds, rounded to the nearest 25 milliseconds.

## Examples

### Using RTT client hints

A server first needs to opt in to receive the `RTT` header by sending the {{HTTPHeader("Accept-CH")}} response header containing `RTT`.

```http
Accept-CH: RTT
```

Then on subsequent requests the client might send an `RTT` header back:

```http
RTT: 125
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("Save-Data")}} network client hints
- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching: Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
- [Improving user privacy and developer experience with User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
