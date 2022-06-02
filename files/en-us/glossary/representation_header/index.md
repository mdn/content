---
title: Representation header
slug: Glossary/Representation_header
tags:
  - Glossary
  - WebMechanics
---
A **representation header** is an {{glossary("HTTP_header", "HTTP header")}} that describes the particular _representation_ of the resource sent in an HTTP message body.

Representations are different forms of a particular resource.
For example, the same data might be formatted as a particular media type such as XML or JSON, localized to a particular written language or geographical region, and/or compressed or otherwise encoded for transmission.
The underlying resource is the same in each case, but its representation is different.

Clients specify the formats that they prefer to be sent during [content negotiation](/en-US/docs/Web/HTTP/Content_negotiation) (using `Accept-*` headers), and the representation headers tell the client the format of the _selected representation_ they actually received.

Representation headers may be present in both HTTP request and response messages.
If sent as a response to a `HEAD` request, they describe the body content that _would_ be selected if the resource was actually requested.

Representation headers include: {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Language")}}, and {{HTTPHeader("Content-Location")}}.

## See also

- [RFC 7231, section 3: Representations](https://datatracker.ietf.org/doc/html/rfc7231#section-3)
- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{Glossary("Payload header")}}
- {{glossary("Entity header")}}
- {{HTTPHeader("Digest")}}/ {{HTTPHeader("Want-Digest")}}
