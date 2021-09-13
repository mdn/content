---
title: Compression Streams API
slug: Web/API/Compression_Streams_API
tags:
  - API
  - Compression_Streams_API
  - Compression
  - Decompression
  - Reference
  - Overview
---
<div>{{DefaultAPISidebar("Compression Streams API")}}</div>

<p>The <strong>Compression Streams API</strong> provides a JavaScript API for compressing and decompressing streams of data using the gzip or deflate formats.</p>

<p>Built in compression means that JavaScript applications will not need to include a compression library, which makes the download size of the application smaller.</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
  <dt>{{domxref("CompressionStream")}}</dt>
  <dd>Compresses a stream of data.</dd>
  <dt>{{domxref("DecompressionStream")}}</dt>
  <dd>Decompresses a stream of data.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In this example a stream is compressed using gzip compression.</p>

<pre class="brush: js">const compressedReadableStream = inputReadableStream.pipeThrough(new CompressionStream('gzip'));</pre>

<p>In the following example a function decompresses a blob using gzip.</p>

<pre class="brush: js">async function DecompressBlob(blob) {
  const ds = new DecompressionStream('gzip');
  const decompressedStream = blob.stream().pipeThrough(ds);
  return await new Response(decompressedStream).blob();
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications("api.CompressionStream")}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.CompressionStream")}}</p>
