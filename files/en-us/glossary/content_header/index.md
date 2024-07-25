---
title: Content header
slug: Glossary/Content_header
page-type: glossary-definition
---

{{GlossarySidebar}}

**Content headers** is a group of [HTTP headers](/en-US/docs/Web/HTTP/Headers) that describe information related to safe transport and reconstruction of the original resource from one or more messages.
These headers used to be defined as "Payload headers", but "content" is used to avoid confusion with frame payloads in HTTP/2 and HTTP/3.

These headers may be present in both HTTP request and response messages and include information like the length of the data, which part of the resource is carried in the data (for a multi-part message), any encoding applied for transport, and message integrity checks.
The group of content headers are:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## See also

- [HTTP headers](/en-US/docs/Web/HTTP/Headers)
- Related glossary terms:
  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP Content")}}
- [RFC 9110, section 6.4.1: Content semantics](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1)
- [RFC 7231, section 3.3: Payload Semantics](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
