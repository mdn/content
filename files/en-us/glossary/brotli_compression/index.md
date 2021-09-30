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
<p><strong>Brotli</strong> is a general-purpose lossless compression algorithm.</p> 

<p>It compresses data using a combination of a modern variant of the LZ77 algorithm, Huffman coding, and second-order context modeling, providing a compression ratio comparable to the best currently available general-purpose compression methods. Brotli provides better compression ratios than <a href="/en-US/docs/Glossary/GZip_compression">gzip</a> and deflate speeds are comparable, but brotli compressing is a slower process than Gzip compression, so gzip may be a better option for the compression of non-<a href="/en-US/docs/Glossary/Cache">cacheable</a> content.</p>

<p>Brotli is compatible with most modern browsers, but you may want to consider a fallback.</p>

<h2 id="see_also">See also</h2>

<ul>
 <li><a href="https://brotli.org/">brotli.org</a></li>
 <li><a href="https://github.com/google/brotli">Brotli Github repository</a></li>
 <li><a href="https://en.wikipedia.org/wiki/Brotli">Brotli on Wikipedia</a></li>
 <li><a href="https://caniuse.com/#feat=brotli">Brotli on Caniuse</a></li>
</ul>
