---
title: Downlink
slug: Web/HTTP/Headers/Downlink
page-type: http-header
status:
  - experimental
browser-compat: http.headers.downlink
---

{{HTTPSidebar}} {{SeeCompatTable}}

The **`Downlink`** [Client hint](/en-US/docs/Web/HTTP/Client_hints) request header field provides the approximate bandwidth of the client's connection to the server, in Mbps.

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

The `Downlink` value is given in Mbps and rounded to the nearest 25 kilobits per second to prevent [fingerprinting](/en-US/docs/Glossary/Fingerprinting). There are many other mechanisms an attacker might use to obtain similar information.

The hint allows a server to choose what information is sent based on the network bandwidth. For example, a server might choose to send smaller versions of images and other resources on low bandwidth networks.

> **Note:** The {{HTTPHeader("Vary")}} header is used in responses to indicate that a different resource is sent for every different value of the header (see [HTTP Caching Vary](/en-US/docs/Web/HTTP/Caching#vary)). Even if {{HTTPHeader("Downlink")}} is used to configure what resources are sent, consider omitting it in the {{HTTPHeader("Vary")}} header — it is likely to change often, which effectively makes the resource uncacheable.

## Syntax

```http
Downlink: <number>
```

## Directives

- \<number>
  - : The downlink rate in Mbps, rounded to the nearest 25 kilobits.

## Examples

A server first needs to opt in to receive the `Downlink` header by sending the {{HTTPHeader("Accept-CH")}} response header containing `Downlink`.

```http
Accept-CH: Downlink
```

Then on subsequent requests the client might send a `Downlink` header back:

```http
Downlink: 1.7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
- Network client hints

  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Vary](/en-US/docs/Web/HTTP/Caching#vary) and {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
