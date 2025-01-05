---
title: Representation header
slug: Glossary/Representation_header
page-type: glossary-definition
---

{{GlossarySidebar}}

A **representation header** (or 'representation metadata') is an {{glossary("HTTP_header", "HTTP header")}} that describes how to interpret the data contained in the message.

For example, the content in a particular message might be encoded for transport, the whole resource might be formatted as a particular media type such as XML, JSON, HTML or Markdown, localized to a particular written language or geographical region, and/or compressed using a particular algorithm.
The representation headers allow the underlying data to be extracted and understood.
The underlying resource is semantically the same in each case, but its representation is different.

While representations are different forms of resources, representations can themselves also be transmitted in various forms: an HTTP message frames (cf., e.g., HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}), a particular stream of octets (cf., e.g., {{HTTPHeader("Content-Range")}}) derived from the _selected representation_.

Clients specify the formats that they prefer to be sent during [Content Negotiation](/en-US/docs/Web/HTTP/Content_negotiation) (using `Accept-*` headers), and the representation headers tell the client the format of the _selected representation_ they received.

Representation headers may be present in both HTTP request and response messages with various methods.
If sent as a response to a `HEAD` request, they describe the body content representation that _would_ be selected if the resource was requested with a `GET` request.

Representation headers include:

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Content-Language")}}

- Validators used in [conditional requests](/en-US/docs/Web/HTTP/Conditional_requests), such as:
  - {{HTTPHeader("Last-Modified")}}
  - {{HTTPHeader("ETag")}}

Representation headers are not mutually exclusive with {{Glossary("Content header", "content headers")}}.

## See also

- Related glossary terms:
  - {{Glossary("Content header")}}
- [RFC 9110, section 3.2: Representations](https://httpwg.org/specs/rfc9110.html#representations)
- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
