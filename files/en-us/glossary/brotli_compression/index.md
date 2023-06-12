---
title: Brotli
slug: Glossary/Brotli_compression
page-type: glossary-definition
---

{{GlossarySidebar}}

**Brotli** is a general-purpose lossless compression algorithm.

It compresses data using a combination of a modern variant of the LZ77 algorithm, Huffman coding, and second-order context modeling, providing a compression ratio comparable to the best currently available general-purpose compression methods. Brotli provides better compression ratios than {{glossary("GZip_compression", "gzip")}} and deflate speeds are comparable, but brotli compressing is a slower process than Gzip compression, so gzip may be a better option for the compression of non-{{glossary("Cache", "cacheable")}} content.

Brotli is compatible with most modern browsers, but you may want to consider a fallback.

## See also

- [brotli.org](https://brotli.org/)
- [Brotli GitHub repository](https://github.com/google/brotli)
- [Brotli](https://en.wikipedia.org/wiki/Brotli) on Wikipedia
- [Brotli on Caniuse](https://caniuse.com/#feat=brotli)
