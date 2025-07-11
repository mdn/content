---
title: Head-of-line blocking
short-title: HOL blocking
slug: Glossary/Head_of_line_blocking
page-type: glossary-definition
sidebar: glossarysidebar
---

In computer networking, **head-of-line blocking** (_HOL blocking_) refers to a performance bottleneck that occurs when a queue of packets is held up by the first packet in the queue, even though other packets in the queue could be processed.

In HTTP/1.1, HOL blocking occurs when a client sends multiple requests to a {{glossary("server")}} over a single, persistent TCP connection.
A response can be delayed due to network congestion, {{glossary("TCP slow start")}}, problems in transit, or other reasons.
HTTP/1.1 requests are sent sequentially, so a delay in fully receiving a response blocks the next request-response exchanges.
A mechanism called _HTTP pipelining_ tried to work around this, where multiple requests were sent off by a client without waiting for any responses.
Pipelining proved tricky to implement in reality, so this mechanism is rarely used, if ever, and most browsers no longer support it.

HTTP/2 addresses the HOL blocking problems in HTTP/1.1 through request _multiplexing_.
Multiplexing means a single TCP connection can be used to interleave requests and responses in numbered streams.
A client can send many requests over a single connection without waiting for earlier responses.
This eliminates HOL blocking in the protocol layer, but it still exists at the transport ({{glossary("TCP")}}) layer.

## See also

- Related glossary terms
  - {{glossary("HTTP")}}, {{glossary("HTTP 2", "HTTP/2")}}
  - {{glossary("TCP")}}
- [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) on Wikipedia
