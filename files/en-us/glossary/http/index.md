---
title: HTTP
slug: Glossary/HTTP
page-type: glossary-definition
---

{{GlossarySidebar}}

The HyperText Transfer Protocol (**HTTP**) is the underlying network {{glossary("protocol")}} that enables transfer of hypermedia documents on the {{glossary("World Wide Web","Web")}}, typically between a browser and a server so that humans can read them. The current version of the HTTP specification is called {{glossary("HTTP_2", "HTTP/2")}}.

As part of a {{glossary("URI")}}, the "http" within "http\://example.com/" is called a "scheme". Resources using the "http" schema are typically transported over unencrypted connections using the HTTP protocol. The "https" scheme (as in "https\://developer.mozilla.org") indicates that a resource is transported using the HTTP protocol, but over a secure {{glossary("TLS")}} channel.

HTTP is textual (all communication is done in plain text) and stateless (no communication is aware of previous communications). This property makes it ideal for humans to read documents (websites) on the world wide web. However, HTTP can also be used as a basis for {{glossary("REST")}} web services from server to server or {{glossary("AJAX")}} requests within websites to make them more dynamic.

## See also

- [HTTP on MDN](/en-US/docs/Web/HTTP)
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) on Wikipedia
