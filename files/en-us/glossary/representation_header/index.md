---
title: Representation header
slug: Glossary/Representation_header
page-type: glossary-definition
---

{{GlossarySidebar}}

A **representation header** is an {{glossary("HTTP_header", "HTTP header")}} that describes one particular _representation_ of a resource.

Representations are different forms of a particular resource.

For example, the same data might be formatted as a particular media type such as XML, JSON, HTML or Markdown, or localized to a particular written language or geographical region.
The underlying resource is semantically the same in each case, but its representation is different.

While representations are different forms of resources, representations can themselves also be transmitted in various forms: an HTTP message frames (cf., e.g., HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), a particular stream of octets (cf., e.g., {{HTTPHeader("Content-Range")}}) derived from the _selected representation_.

Clients specify the formats that they prefer to be sent during [Content Negotiation](/en-US/docs/Web/HTTP/Content_negotiation) (using `Accept-*` headers), and the representation headers tell the client the format of the _selected representation_ they received.

Representation headers may be present in both HTTP request and response messages with various methods.
If sent as a response to a `HEAD` request, they describe the body content representation that _would_ be selected if the resource was requested with a `GET` request.

Representation headers include: {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Repr-Digest")}}, and {{HTTPHeader("Digest")}} {{Deprecated_Inline}}.

## See also

- [RFC 9110, section 3.2: Representations](https://httpwg.org/specs/rfc9110.html#representations)
- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- Related glossary terms:
  - {{Glossary("Payload header")}}
  - {{glossary("Entity header")}}
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
- {{HTTPHeader("Digest")}} {{Deprecated_Inline}}, {{HTTPHeader("Want-Digest")}} {{Deprecated_Inline}}
