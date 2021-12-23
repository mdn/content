---
title: Downlink
slug: Web/HTTP/Headers/Downlink
tags:
  - Downlink
  - Client hints
  - HTTP
  - HTTP Header
  - Request header
  - Client hints
  - Experimental
browser-compat: http.headers.downlink
---
{{HTTPSidebar}} {{SeeCompatTable}}

The **`Downlink`** {{Glossary("Client hints","network client hint")}} request header field provides the approximate bandwidth of the client's connection to the server, in Mbps.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>
        {{Glossary("Request header")}},
        {{Glossary("Client hints","Client hint")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

The `Downlink` value is given in Mbps and rounded to the nearest 25 kilobits per second to prevent fingerprinting; There are many other mechanisms an attacker might use to obtain similar information.

The hint allows a server to choose what information is sent based on the network bandwidth. For example, a server might choose to send smaller versions of images and other resources on low bandwidth networks.

> **Note:** The {{HTTPHeader("Vary")}} header is used in responses to indicate that a different resource is sent for every different value of the header (see [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses)). Even if {{HTTPHeader("Downlink")}} is used to configure what resources are sent, consider omitting it in the {{HTTPHeader("Vary")}} header — it is likely to change often, which effectively makes the resource uncachable.

## Syntax

```
Downlink: <number>
```

## Directives

- \<number>
  - : The downlink rate in Mbps, rounded to the nearest 25 kilobits.

## Examples

A server first needs to opt in to receive the `Downlink` header by sending the {{HTTPHeader("Accept-CH")}} response header containing `Downlink`.

```
Accept-CH: Downlink
```

Then on subsequent requests the client might send a `Downlink` header back:

```
Downlink: 1.7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Adapting to Users with Client Hints](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/client-hints) (developer.google.com)
- Network client hints

  - {{HTTPHeader("RTT")}}
  - {{HTTPHeader("ECT")}}
  - {{HTTPHeader("Save-Data")}}

- {{HTTPHeader("Accept-CH")}}
- [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses) and {{HTTPHeader("Vary")}}
- {{domxref("NetworkInformation.effectiveType")}}
