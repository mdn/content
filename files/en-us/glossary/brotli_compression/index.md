---
title: Brotli compression
slug: Glossary/Brotli_compression
page-type: glossary-definition
---

{{GlossarySidebar}}

**Brotli** is a general-purpose lossless compression algorithm.
It compresses data using a combination of a modern variant of the [Lempel-Ziv coding](https://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) LZ77 algorithm, [Huffman coding](https://rosettacode.org/wiki/Huffman_coding), and second-order context modeling, providing a compression ratio comparable to the best currently available general-purpose compression methods.

Brotli provides better compression ratios than {{glossary("GZip_compression", "gzip")}}, and speeds that are comparable to [deflate](https://en.wikipedia.org/wiki/Deflate).
However brotli compression is slower than Gzip compression, so gzip may be a better option when compressing {{glossary("Cache", "non-cacheable")}} content.

Brotli is compatible with most modern browsers, but you may want to consider a fallback.

## See also

- Related glossary terms:
  - {{glossary("Lossless compression")}}
  - {{glossary("Lossy compression")}}
  - {{Glossary("Gzip compression")}}
  - {{Glossary("Zstandard compression")}}
- [brotli.org](https://brotli.org/)
- [Brotli GitHub repository](https://github.com/google/brotli)
- [RFC 7932: Brotli Compressed Data Format](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://en.wikipedia.org/wiki/Brotli) on Wikipedia
- [Brotli on Caniuse](https://caniuse.com/#feat=brotli)
