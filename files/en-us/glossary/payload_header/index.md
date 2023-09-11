---
title: Payload header
slug: Glossary/Payload_header
page-type: glossary-definition
---

{{GlossarySidebar}}

A **payload header** is an {{Glossary("HTTP_header", "HTTP header")}} that describes the payload information related to safe transport and reconstruction of the original resource {{Glossary("Representation header", "representation")}}, from one or more messages. This includes information like the length of the message payload, which part of the resource is carried in this payload (for a multi-part message), any encoding applied for transport, message integrity checks, etc.

Payload headers may be present in both HTTP request and response messages (i.e. in any message that is carrying payload data).

The payload headers include: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Trailer")}}, and {{HTTPHeader("Transfer-Encoding")}}.

## See also

- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)

  - {{HTTPHeader("Content-Length")}}
  - {{HTTPHeader("Content-Range")}}
  - {{HTTPHeader("Trailer")}}
  - {{HTTPHeader("Transfer-Encoding")}}
  - {{Glossary("Representation header")}}

- [RFC 7231, section 3.3: Payload semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
