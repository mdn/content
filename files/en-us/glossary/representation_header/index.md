---
title: Representation header
slug: Glossary/Representation_header
page-type: glossary-definition
---

{{GlossarySidebar}}

A **representation header** is an {{glossary("HTTP_header", "HTTP header")}} that describes one particular _representation_ of a resource.

Representations are different forms of a particular resource.

For example, the same data might be formatted as a particular media type such as XML or JSON<!--,--> or localized to a particular written language or geographical region<!--, and/or compressed or otherwise encoded for transmission-->. The underlying resource is semantically the same in each case (although details may vary: an e.&hairsp;g. text/html page is inherently more feature-rich than an e.&harisp;g. text/markdown page), but its representation is different.

Whilst representations are different forms of resources, representations can themselves also be transmitted in different forms: an HTTP message frames (cf. e.&hairsp;g. HTTP/1.1's {{HTTPHeader("Transfer-Encoding")}}) a particular stream of octets (cf. e.&hairsp;g. {{HTTPHeader("Content-Range")}}) derived from the _selected representation_.

Clients specify the formats that they prefer to be sent during [Content Negotiation](/en-US/docs/Web/HTTP/Content_negotiation) (using `Accept-*` headers), and the representation headers tell the client the format of the _selected representation_ they received.

Representation headers may be present in both HTTP request and response messages with various methods.
If sent as a response to a `HEAD` request, they describe the body content representation that _would_ be selected if the resource was requested with a `GET` request.

Representation headers include: {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("Repr-Digest")}}, and {{HTTPHeader("Digest")}} {{Deprecated_Inline}}.

## Examples

### Example: successful HTTP request-response employing {{HTTHeader("Want-Repr-Digest")}}, {{HTTHeader("Repr-Digest")}}, {{HTTHeader("Content-Digest")}}

```http
PUT /api/transact HTTP/1.1
Want-Repr-Digest: sha-256=8
Content-Type: text/json
...
```

```http
HTTP/1.1 201 Created
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
Content-Encoding: br
Content-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
...
```

### Example: unsuccessful HTTP request-response employing {{HTTHeader("Repr-Digest")}}

```http
GET /api/last-transaction HTTP/1.1
Accept: text/json
Repr-Digest: sha-256=:2IBI7hQn83oTCgB3Z/6apOl91WGoctRfRj/F9gkvVo8=:
...
```

```http
HTTP/1.1 406 Not Acceptable
Repr-Digest: sha-256=:W8oN3H3CmE/CBpV6ZPNozV2AIDzzQpWL7CCOXyDyDzI=:
...
```

## See also

- [RFC 9110, section 3.2: Representations](https://httpwg.org/specs/rfc9110.html#representations)
- [List of all HTTP headers](/en-US/docs/Web/HTTP/Headers)
- {{Glossary("Payload header")}}
- {{glossary("Entity header")}}
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- pertaining to particular forms of the selected representation: {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}
- {{HTTPHeader("Digest")}} {{Deprecated_Inline}}, {{HTTPHeader("Want-Digest")}} {{Deprecated_Inline}}
