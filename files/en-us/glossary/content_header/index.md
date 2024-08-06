---
title: Content header
slug: Glossary/Content_header
page-type: glossary-definition
---

{{GlossarySidebar}}

**Content headers** are a group of [HTTP headers](/en-US/docs/Web/HTTP/Headers) that describe the bodies of HTTP messages.
They specifically describe the {{Glossary("HTTP Content", "message content")}}, rather than the representation of a resource, meaning the length of message data, which part of the resource is carried in the data (for multi-part messages), any encoding applied for transport, and message integrity checks.

These headers were defined as "Payload headers" in {{RFC("7231")}}, but "content" is used instead because data contained in HTTP/2 and HTTP/3 frame payloads could be header data, body data, or other control information.
Later HTTP specifications don't mention "content headers" or expand on the list of relevant headers, but the semantics remain the same, so this way of classifying headers still applies.

> [!NOTE]
> Content headers are not mutually exclusive with {{Glossary("Representation header", "Representation headers")}} which are typically more relevant to understanding HTTP message semantics.

These headers may be present in both HTTP request and response messages and include:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Content-Encoding")}}

## See also

- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- Related glossary terms:
  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP Content")}}
- [RFC 9110, section 6.4.1: Content semantics](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), specifically [Appendix B.3.: Changes from RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, section 3.3: Payload Semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
