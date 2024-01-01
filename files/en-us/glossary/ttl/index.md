---
title: TTL
slug: Glossary/TTL
page-type: glossary-definition
---

{{GlossarySidebar}}

Time To Live (TTL) can refer to either the lifetime of a packet in a network, or the expiry time of cached data.

## Networking

In networking, the TTL, embedded in the packet, is a usually defined as a number of hops or as an expiration timestamp after which the packet is dropped. It provides a way to avoid network congestion, but releasing packets after they roamed the network too long.

## Caching

In the context of caching, TTL (as an unsigned 32-bit integer) being a part of the {{Glossary("Response header", "HTTP response header")}} or the {{Glossary("DNS")}} query, indicates the amount of time in seconds during which the resource can be cached by the requester.

## See also

- [TTL](https://en.wikipedia.org/wiki/Time_to_live) on Wikipedia
- [RFC 2181](https://datatracker.ietf.org/doc/html/rfc2181#section-8) on IETF
- [RFC1035](https://datatracker.ietf.org/doc/html/rfc1035) on IETF
