---
title: Brotli
slug: Glossary/brotli_compression
tags:
  - Brotli
  - Glossary
  - Reference
  - Web Performance
  - compression
---
**Brotli** is a general-purpose lossless compression algorithm.

It compresses data using a combination of a modern variant of the LZ77 algorithm, Huffman coding, and second-order context modeling, providing a compression ratio comparable to the best currently available general-purpose compression methods. Brotli provides better compression ratios than [gzip](/en-US/docs/Glossary/GZip_compression) and deflate speeds are comparable, but brotli compressing is a slower process than Gzip compression, so gzip may be a better option for the compression of non-[cacheable](/en-US/docs/Glossary/Cache) content.

Brotli is compatible with most modern browsers, but you may want to consider a fallback.

## See also

- [brotli.org](https://brotli.org/)
- [Brotli Github repository](https://github.com/google/brotli)
- [Brotli on Wikipedia](https://en.wikipedia.org/wiki/Brotli)
- [Brotli on Caniuse](https://caniuse.com/#feat=brotli)
