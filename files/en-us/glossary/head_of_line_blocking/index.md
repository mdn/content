---
title: Head-of-line blocking
short-title: HOL blocking
slug: Glossary/Head_of_line_blocking
page-type: glossary-definition
sidebar: glossarysidebar
---

In computer networking, **head-of-line blocking** (_HOL blocking_) refers to a performance bottleneck that occurs when a queue of {{glossary("packet", "packets")}} is held up by the first packet in the queue, even though other packets in the queue could be processed.

In HTTP/1.1, requests on a single {{glossary("TCP")}} connection are usually sent sequentially — a new request can't be made on the connection while waiting for a response to the previous request.
This can lead to HOL blocking problems even if there are several TCP connections between the client and server.

HTTP/1.1 defines an optional feature called _HTTP pipelining_ that unsuccessfully attempted to work around HOL blocking, by allowing requests to be sent without waiting for earlier responses.
Unfortunately the design of HTTP/1.1 means that responses must be returned in the same order as the requests were received, so HOL blocking can still occur if a request takes a long time to complete.
Network conditions such as congestion, packet loss (and the resulting TCP retransmissions), or {{glossary("TCP slow start")}} can also delay transmission and cause later responses to be blocked by earlier ones.

{{glossary("HTTP 2", "HTTP/2")}} reduces application-level HOL blocking by introducing request and response _multiplexing_.
With this feature multiple requests and responses can be interleaved over a single TCP connection using independently numbered streams, and stream prioritization helps the server decide which streams to send first.
Packet loss at the transport layer can still cause HOL blocking across streams because HTTP/2 runs over TCP — a lost TCP segment can stall all streams carried on that connection until the lost data is retransmitted.

{{glossary("HTTP 3", "HTTP/3")}} eliminates the transport-layer head-of-line blocking by using {{glossary("QUIC")}} over {{glossary("UDP")}} and thus HOL problem on HTTP no longer exists.
QUIC provides multiple independent streams with per-stream loss recovery, so packet loss affects only the stream where it occurs rather than the entire connection. This removes the TCP-level HOL problem.

## See also

- Related glossary terms
  - {{glossary("HTTP")}}, {{glossary("HTTP 2", "HTTP/2")}}, {{glossary("HTTP 3", "HTTP/3")}}
  - {{glossary("TCP")}}, {{glossary("QUIC")}}, {{glossary("UDP")}}
- [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) on Wikipedia
