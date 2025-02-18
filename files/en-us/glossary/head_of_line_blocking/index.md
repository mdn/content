---
title: Head-of-line blocking
slug: Glossary/Head_of_line_blocking
page-type: glossary-definition
---

{{GlossarySidebar}}

In computer networking, **head-of-line blocking** (_HOL blocking_) refers to a performance bottleneck that occurs when a queue of packets is held up by the first packet in the queue, even though other packets in the queue could be processed.

In HTTP/1.1, HOL blocking can occur when a client sends multiple requests to a {{glossary("server")}} without waiting for the responses. The server processes the requests in order, but if the response to the first request is delayed, the responses to subsequent requests are also delayed. HTTP/2 addresses this issue through request multiplexing, eliminating HOL blocking in the application layer, but it still exists at the transport ({{glossary("TCP")}}) layer.

## See also

- Related glossary terms
  - {{glossary("HTTP")}}, {{glossary("HTTP 2", "HTTP/2")}}
  - {{glossary("TCP")}}
- [Populating the page: how browsers work](/en-US/docs/Web/Performance/How_browsers_work)
- [Head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking) on Wikipedia
