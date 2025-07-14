---
title: Head-of-line blocking
short-title: HOL blocking
slug: Glossary/Head_of_line_blocking
page-type: glossary-definition
sidebar: glossarysidebar
---

In computer networking, **head-of-line blocking** (_HOL blocking_) refers to a performance bottleneck that occurs when a queue of packets is held up by the first packet in the queue, even though other packets in the queue could be processed.

In HTTP/1.1, HOL blocking occurs when a client sends multiple requests to a {{glossary("server")}} over a single, persistent TCP connection, and one of the responses is delayed for any reason — such as network congestion, {{glossary("TCP slow start")}}, or, problems in transit.
HTTP/1.1 requests are sent sequentially per TCP connection, so a delay in receiving a response blocks the next request-response exchange.

A mechanism called _HTTP pipelining_ tried to work around this, where multiple requests were sent off by a client without waiting for any responses.
Pipelining proved tricky to implement in reality, so this mechanism is rarely used, if ever, and most browsers no longer support it.

HTTP/2 addresses the HOL blocking problems in HTTP/1.1 through request _multiplexing_.
Multiplexing allows a single TCP connection to interleave requests and responses in numbered streams.
A client can send many requests over a single connection without waiting for earlier responses.
Note that while HOL has been fixed in HTTP, it is still a problem at the transport ({{glossary("TCP")}}) layer level.

## See also

- Related glossary terms
  - {{glossary("HTTP")}}, {{glossary("HTTP 2", "HTTP/2")}}
  - {{glossary("TCP")}}
- [Populating the page: how browsers work](/en-US/docs/Web/Performance/Guides/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) on Wikipedia
