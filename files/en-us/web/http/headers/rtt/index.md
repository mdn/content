---
title: RTT
slug: Web/HTTP/Headers/RTT
tags:
  - RTT
  - Client hints
  - HTTP
  - HTTP Header
  - Request header
  - Client hints
  - Experimental
browser-compat: http.headers.rtt
---
{{HTTPSidebar}} {{SeeCompatTable}}

The **`RTT`** [Client hint](/en-US/docs/Web/HTTP/Client_hints) request header field provides the approximate round trip time on the application layer, in milliseconds. The RTT hint, unlike transport layer RTT, includes server processing time.

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

The RTT value is rounded to the nearest 25 milliseconds to prevent fingerprinting; There are many other mechanisms an attacker might use to obtain similar round-trip information.

The hint allows a server to choose what information is sent based on the network responsiveness/latency. For example, it might choose to send fewer resources.

> **Note:** The {{HTTPHeader("Vary")}} header is used in responses to indicate that a different resource is sent for every different value of the header (see [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses)). Even if {{HTTPHeader("RTT")}} is used to configure what resources are sent consider omitting it in the {{HTTPHeader("Vary")}} header — it is likely to change often, which effectively makes the resource uncacheable.

## Syntax

```http
RTT: <number>
```

## Directives

- \<number>
  - : The approximate round trip time in milliseconds, rounded to the nearest 25 milliseconds.

## Examples

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

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- Network client hints

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
