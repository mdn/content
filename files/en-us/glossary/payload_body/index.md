---
title: Payload body
slug: Glossary/Payload_body
page-type: glossary-definition
---

{{GlossarySidebar}}

In HTTP messages, the **payload body** or **payload** was the resource representation transferred in a message body, stripped of any [transfer encoding](/en-US/docs/Web/HTTP/Headers/Transfer-Encoding). With no transfer encoding, the _payload body_ and _message body_ are identical. Representation data could also be transferred in HTTP headers, but such data would not be considered a "payload".

Since {{RFC("9110")}}, the word **content** replaces the word **payload**. See [**HTTP content**](/en-US/docs/Glossary/HTTP_Content).

## See also

- {{Glossary("Content header")}}
- [RFC 9110, section 6.4: Content](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4) (obsoletes [RFC 7231](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3) Payload Semantics)
  - [Changes from RFC 7231](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
