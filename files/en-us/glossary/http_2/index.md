---
title: HTTP/2
slug: Glossary/HTTP_2
page-type: glossary-definition
---

{{GlossarySidebar}}

**HTTP/2** is a major revision of the [HTTP network protocol](/en-US/docs/Web/HTTP).

The primary goals for HTTP/2 are to reduce {{glossary("latency")}} and {{glossary("head of line blocking", "head-of-line blocking")}} by enabling full request and response multiplexing, minimize protocol overhead via efficient compression of HTTP header fields (HPACK), and support for request prioritization.

HTTP/2 also introduced a mechanism called Server Push, which allowed a server to send resources to a client in anticipation that the client would need them very soon.
Server Push proved tricky to implement in practice, and has been removed from most major browser engines.
It has been replaced by alternative methods such as [`rel="preload"`](/en-US/docs/Web/HTML/Attributes/rel/preload) and {{HTTPStatus("103", "103 Early hints")}}.

HTTP/2 does not modify the semantics of HTTP, meaning the core concepts found in HTTP/1.1, such as methods, status codes, URIs, and header fields, remain the same.
Instead, HTTP/2 modifies how the data is formatted (framed) and transported between the client and server, both of which manage the entire process, and hides protocol complexity within a framing layer.
As a result, all existing applications can be delivered over the protocol without modification.

## See also

- [HTTP on MDN](/en-US/docs/Web/HTTP)
- Related glossary terms:
  - {{glossary("HTTP")}}
  - {{glossary("Latency")}}
- {{RFC("7540", "Server Push", "8.2")}}
- [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2) on Wikipedia
