---
title: HTTP/2
slug: Glossary/HTTP_2
page-type: glossary-definition
---

{{GlossarySidebar}}

**HTTP/2** is a major revision of the [HTTP network protocol](/en-US/docs/Web/HTTP).

The primary goals for HTTP/2 are to reduce {{glossary("latency")}} and head-of-line blocking by enabling full request and response multiplexing, minimize protocol overhead via efficient compression of HTTP header fields, and add support for request prioritization and server push.

HTTP/2 does not modify the semantics of HTTP, meaning the core concepts found in HTTP/1.1, such as methods, status codes, URIs, and header fields, remain the same.
Instead, HTTP/2 modifies how the data is formatted (framed) and transported between the client and server, both of which manage the entire process, and hides protocol complexity within a framing layer.
As a result, all existing applications can be delivered over the protocol without modification.

## See also

- [HTTP on MDN](/en-US/docs/Web/HTTP)
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) on Wikipedia
- Related glossary terms:
  - {{glossary("HTTP")}}
  - {{glossary("Latency")}}
