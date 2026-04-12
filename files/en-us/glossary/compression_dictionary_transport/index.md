---
title: Compression Dictionary Transport
slug: Glossary/Compression_dictionary_transport
page-type: glossary-definition
sidebar: glossarysidebar
---

**Compression Dictionary Transport** is a way of using a shared compression dictionary, rather than the standard static dictionary in {{glossary("Brotli compression")}} or {{glossary("Zstandard compression")}}, to dramatically reduce the transport size of HTTP responses.

For example, when downloading `app.v2.js`, if the client already has `app.v1.js` then they can reference text from that by using it as a dictionary and effectively only download the delta and a small amount of references to the `v1` file.

See the [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport) for more information.

## See also

- [Compression Dictionary Transport guide](/en-US/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Related glossary terms:
  - {{Glossary("Brotli compression")}}
  - {{Glossary("Zstandard compression")}}
- [`<link rel="compression-dictionary">`](/en-US/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Draft specification](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
