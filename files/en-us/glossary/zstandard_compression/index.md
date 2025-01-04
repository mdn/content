---
title: Zstandard compression
slug: Glossary/Zstandard_compression
page-type: glossary-definition
---

{{GlossarySidebar}}

**Zstandard** is a general-purpose lossless compression algorithm.

Zstandard, or `zstd` as short version, is a fast lossless compression algorithm, targeting real-time compression scenarios at zlib-level and better compression ratios. It's backed by a very fast entropy stage, provided by [Huff0 and FSE library](https://github.com/Cyan4973/FiniteStateEntropy). It often offers better compression ratios than {{glossary("Brotli_compression", "brotli")}} at equivalent CPU costs, or better CPU costs at equivalent compression ratios.

For browser support, see [Content-Encoding: Browser compatibility](/en-US/docs/Web/HTTP/Headers/Content-Encoding#browser_compatibility).

## See also

- Related glossary terms:
  - {{glossary("Lossless compression")}}
  - {{glossary("Lossy compression")}}
  - {{glossary("Brotli compression")}}
  - {{glossary("Gzip compression")}}
- [Zstandard RFC](https://datatracker.ietf.org/doc/html/rfc8878)
- [Zstandard home page](https://facebook.github.io/zstd/)
- [Zstandard GitHub repository](https://github.com/facebook/zstd)
- [Zstandard](https://en.wikipedia.org/wiki/Zstandard) on Wikipedia
- [Zstandard on Caniuse](https://caniuse.com/#feat=zstandard)
