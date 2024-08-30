---
title: Content header
slug: Glossary/Content_header
page-type: glossary-definition
---

{{GlossarySidebar}}

**Content headers** are the group of [HTTP headers](/en-US/docs/Web/HTTP/Headers) that describe the content of the body of an HTTP message, after any message framing in the body has been removed.
They specifically describe the properties of the {{Glossary("HTTP Content", "message content")}} that is conveyed in a particular message _as it is transported_, such as the length of the content, the transport encoding, which part of the resource is carried in the data (for multi-part messages), and message integrity checks.
They differ from the {{Glossary("Representation header", "Representation headers")}}, which describe the encoding, media type, language, and other characteristics of the resource, and allow the underlying data to be interpreted.

These headers were defined as "Payload headers" in {{RFC("7231")}}, but are now referred to as "Content headers" because data contained in HTTP/2 and HTTP/3 frame payloads could be header data, body data, or other control information.
Later HTTP specifications don't mention "content headers" or expand on the list of relevant headers, but the semantics remain the same, so this way of classifying headers is still useful.

> [!NOTE]
> There is some overlap between content headers and {{Glossary("Representation header", "representation headers")}}.

These headers may be present in both HTTP request and response messages and include:

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## See also

- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- Related glossary terms:
  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP Content")}}
- [RFC 9110, section 6.4.1: Content semantics](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), specifically [Appendix B.3.: Changes from RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, section 3.3: Payload Semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
