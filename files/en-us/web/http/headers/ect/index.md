---
title: ECT
slug: Web/HTTP/Headers/ECT
tags:
  - ect
  - Client hints
  - HTTP
  - HTTP Header
  - Request header
  - Client hints
  - Experimental
browser-compat: http.headers.ect
---
{{HTTPSidebar}} {{SeeCompatTable}}

The **`ECT`** [Client hint](/en-US/docs/Web/HTTP/Client_hints) request header field indicates the {{Glossary("effective connection type")}}: `slow-2g`, `2g`, `3g`, `4g`.

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

The value represents the "network profile" that best matches the connection's latency and bandwidth, rather than the actual mechanisms used for transferring the data. For example, `2g` might be used to represent a slow Wi-Fi connection with high latency and low bandwidth, while `4g` might be used to represent a fast fibre-based broadband network.

The hint allows a server to choose what information is sent based on the broad characteristics of the network. For example, a server might choose to send smaller versions of images and other resources on less capable connections. The value might also be used as a starting point for determining what information is sent, which is further refined using information in {{HTTPHeader("RTT")}} and {{HTTPHeader("Downlink")}} hints.

> **Note:** A server that specifies {{HTTPHeader("ECT")}} in {{HTTPHeader("Accept-CH")}} may also specify it in {{HTTPHeader("Vary")}} to indicate that responses should be cached for different ECT values.

## Syntax

```http
ECT: <value>
```

## Directives

- \<value>
  - : A value indicating {{Glossary("effective connection type")}}. This is one of: `slow-2g`, `2g`, `3g`, or `4g`.

## Examples

A server first needs to opt in to receive the `ECT` header by sending the {{HTTPHeader("Accept-CH")}} response header containing `ECT`.

```http
Accept-CH: ECT
```

Then on subsequent requests the client might send an `ECT` header back:

```http
ECT: 2g
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- Network client hints

  - {{HTTPHeader("Downlink")}}
  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
