---
title: Representation header
slug: Glossary/Representation_header
tags:
  - Glossary
  - WebMechanics
---
A **representation header** is an {{glossary("HTTP_header", "HTTP header")}} that describes the particular _representation_ of the resource sent in an HTTP message body.

Representations are different versions of a particular resource that might be returned from a request. For example, the same data resource might be formatted as XML or JSON, and that resource might then be encoded in one or more compressed formats for sending. Clients specify the formats that they prefer during content negotiation (using `Accept-*` headers), and the representation headers tell the client the format of the representation they actually received.

Representation headers may be present in both HTTP request and response messages. If sent as a response to a `HEAD` request, they describe the body content that _would_ be sent if the resource was actually requested.

Representation headers include: {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Language")}}, and {{HTTPHeader("Content-Location")}}.

## See also

- [RFC 7231, section 3: Representations](https://datatracker.ietf.org/doc/html/rfc7231#section-3)
- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{Glossary("Payload header")}}
- {{glossary("Entity header")}}
