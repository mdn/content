---
title: Client hints
slug: Glossary/Client_hints
tags:
  - Client hints
  - Glossary
  - Performance
  - Reference
  - Web Performance
---
**Client Hints** are a set of [HTTP request header](/en-US/docs/Web/HTTP/Headers) fields that a server can proactively request from a client in order to get information about the device, network, user and agent specific preferences. The server can then determine which resources to send based on the client information.

The set of "hint" headers are listed in the topic [HTTP Headers](/en-US/docs/Web/HTTP/Headers#client_hints) and [summarized below](#hint_types).

## Overview

A server must announce that it supports client hints, using the {{HTTPHeader("Accept-CH")}} header to specify the hints that it is interested in receiving.
When a client that supports client hints receives the `Accept-CH` header it can append client hint headers that match the advertised field-values to subsequent requests.

For example, following `Accept-CH` in a response below, the client could append {{HTTPHeader("Width")}} and {{HTTPHeader("Downlink")}} headers to all subsequent requests.

```plain
Accept-CH: Width, Downlink
```

> **Note:** Client hints can also be specified in HTML using the {{HTMLElement("meta")}} element with the [`http-equiv`](/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) attribute.
>
>     <meta http-equiv="Accept-CH" content="Width, Viewport-Width, Downlink">

## Caching and Client Hints

Client hints that determine which resources are sent in responses should "generally" also be included in the affected response's {{HTTPHeader("Vary")}} header. This ensures that a different resource is cached for every different value of the hint header.

```plain
Vary: Accept, Width, ECT
```

You may prefer to omit specifying {{HTTPHeader("Vary")}} or use some other strategy for client hint headers where the value changes a lot, as this effectively makes the resource uncachable (a new cache entry is created for every different value). This applies in particular to network client hints like {{HTTPHeader("Downlink")}} and {{HTTPHeader("RTT")}}. For more information see [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses).

## Hint types

### Device client hints

Device client hints allow a server to choose what information is sent based on the device characteristics including available memory and screen properties. Headers include: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Network client hints

Network client hints allow a server to choose what information is sent based on the user choice and network bandwidth and latency. Headers include: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## See also

- [Client Hints headers](/en-US/docs/Web/HTTP/Headers#client_hints)
- [`Vary` HTTP Header](/en-US/docs/Web/HTTP/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
