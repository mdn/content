---
title: HTTP Client hints
slug: Web/HTTP/Client_hints
tags:
  - Client hints
  - Guide
  - HTTP
  - Performance
---
**Client Hints** are a set of [HTTP request header](/en-US/docs/Web/HTTP/Headers) fields that a server can proactively request from a client to get information about the device, network, user, and user-agent-specific preferences.
The server can determine which resources to send, based on the information that the client chooses to provide.

The set of "hint" headers are listed in the topic [HTTP Headers](/en-US/docs/Web/HTTP/Headers#client_hints) and [summarized below](#hint_types).

## Overview

A server must announce that it supports client hints, using the {{HTTPHeader("Accept-CH")}} header to specify the hints that it is interested in receiving.
When a client that supports client hints receives the `Accept-CH` header it can choose to append some or all of the listed client hint headers in its subsequent requests.

For example, following `Accept-CH` in a response below, the client could append {{HTTPHeader("Width")}}, {{HTTPHeader("Downlink")}} and {{HTTPHeader("Sec-CH-UA")}} headers to all subsequent requests.

```http
Accept-CH: Width, Downlink, Sec-CH-UA
```

This approach is efficient in that the server only requests the information that it is able to usefully handle.
It is also relatively "privacy-preserving", in that it is up to the client to decide what information it can safely share.

There is a small set of [low entropy client hint headers](#low_entropy_hints) that may be sent by a client event if not requested.

> **Note:** Client hints can also be specified in HTML using the {{HTMLElement("meta")}} element with the [`http-equiv`](/en-US/docs/Web/HTML/Element/meta#attr-http-equiv) attribute.
>
> ```html
> <meta http-equiv="Accept-CH" content="Width, Downlink, Sec-CH-UA">
> ```

## Caching and Client Hints

Client hints that determine which resources are sent in responses should generally also be included in the affected response's {{HTTPHeader("Vary")}} header.
This ensures that a different resource is cached for every different value of the hint header.

```http
Vary: Accept, Width, ECT
```

You may prefer to omit specifying {{HTTPHeader("Vary")}} or use some other strategy for client hint headers where the value changes a lot, as this effectively makes the resource uncacheable. (A new cache entry is created for every unique value.)
This applies in particular to network client hints like {{HTTPHeader("Downlink")}} and {{HTTPHeader("RTT")}}.
For more information see [HTTP Caching > Varying responses](/en-US/docs/Web/HTTP/Caching#varying_responses).

## Hint life-time

A server specifies the client hint headers that it is interested in getting in the `Accept-CH` response header.
The user agent appends the requested client hint headers, or at least the subset that it wants to share with that server, to all subsequent requests in the current browsing session.

In other words, the request for a specific set of hints does not expire until the browser is shut down.

A server can replace the set of client hints it is interested in receiving by resending the `Accept-CH` response header with a new list.
For example, to stop requesting any hints it would send `Accept-CH` with an empty list.

## Low entropy hints

Client hints are broadly divided into high and low entropy hints.

The low entropy hints are those that don't give away much information that might be used to "fingerprint" (identify) a particular user.
They may be sent by default on every client request, irrespective of the server `Accept-CH` response header, depending on the permission policy.
These hints include: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Sec-CH-UA")}}, {{HTTPHeader("Sec-CH-UA-Mobile")}}, {{HTTPHeader("Sec-CH-UA-Platform")}}.

The high entropy hints are those that have the potential to give away more information that can be used for user fingerprinting, and therefore are gated in such a way that the user agent can make a decision as to whether to provide them.
The decision might be based on user preferences, a permission request, or the permission policy.
All client hints that are not low entropy hints are considered high entropy hints.

## Hint types

### User-agent client hints

User agent (UA) client hint headers allow a server to vary responses based on the user agent (browser), operating system, and device.
Headers include: {{HTTPHeader("Sec-CH-UA")}}, {{HTTPHeader("Sec-CH-UA-Arch")}}, {{HTTPHeader("Sec-CH-UA-Bitness")}}, {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}, {{HTTPHeader("Sec-CH-UA-Full-Version")}}, {{HTTPHeader("Sec-CH-UA-Mobile")}}, {{HTTPHeader("Sec-CH-UA-Model")}}, {{HTTPHeader("Sec-CH-UA-Platform")}}, and {{HTTPHeader("Sec-CH-UA-Platform-Version")}}.

Client hints are available to web page JavaScript via the [User Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API).

> **Note:** Servers currently get most of the same information by parsing the {{HTTPHeader("User-Agent")}} header.
> For historical reasons this header contains a lot of largely irrelevant information, and information that might be used to identify a _particular user_.
> UA client hints provide a more efficient and privacy preserving way of getting the desired information.
> They are eventually expected to replace this older approach.

### Device client hints

Device client hints allow a server to vary responses based on device characteristics including available memory and screen properties.
Headers include: {{HTTPHeader("Device-Memory")}}, {{HTTPHeader("DPR")}}, {{HTTPHeader("Width")}}, {{HTTPHeader("Viewport-Width")}}.

### Network client hints

Network client hints allow a server to vary responses based on the user's choice, network bandwidth, and latency.
Headers include: {{HTTPHeader("Save-Data")}}, {{HTTPHeader("Downlink")}}, {{HTTPHeader("ECT")}}, {{HTTPHeader("RTT")}}.

## See also

- [Client Hints headers](/en-US/docs/Web/HTTP/Headers#client_hints)
- [`Vary` HTTP Header](/en-US/docs/Web/HTTP/Headers/Vary)
- [Client Hints Infrastructure](https://wicg.github.io/client-hints-infrastructure/)
- [User Agent Client Hints API](/en-US/docs/Web/API/User-Agent_Client_Hints_API)
- [Improving user privacy and developer experience with User-Agent Client Hints](https://web.dev/user-agent-client-hints/) (web.dev)
