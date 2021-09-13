---
title: WritableStreamDefaultWriter.ready
slug: Web/API/WritableStreamDefaultWriter/ready
tags:
- API
- Method
- Ready
- Reference
- Streams
- Streams API
- WritableStream
- WritableStreamDefaultWriter
browser-compat: api.WritableStreamDefaultWriter.ready
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

<p>The <strong><code>ready</code></strong> read-only property of the
  {{domxref("WritableStreamDefaultWriter")}} interface returns a {{jsxref("Promise")}}
  that resolves when the desired size of the stream's internal queue transitions from
  non-positive to positive, signaling that it is no longer applying backpressure.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <em>promise</em> = <em>writableStreamDefaultWriter</em>.ready;</pre>

<h3 id="Value">Value</h3>

<p>A {{jsxref("Promise")}}.</p>

<h2 id="Example">Example</h2>

<p>The following example shows two uses of the <code>ready</code> property. The first uses
  <code>ready</code> to ensure that the <code>WritableStream</code> is done writing and
  thus able to receive data before sending a binary chunk. The second also checks whether
  the the <code>WritableStream</code> is done writing, but this time because the writing
  must be finished before the writer can be closed.</p>

<pre class="brush: js">function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  var defaultWriter = writableStream.getWriter();
  var encoder = new TextEncoder();
  var encoded = encoder.encode(message, {stream: true});
  encoded.forEach(function(chunk) {
    // Make sure the stream and its writer are able to
    //   receive data.
    defaultWriter.ready
    .then(function() {
      defaultWriter.write(chunk)
      .then(function() {
        console.log("Chunk written to sink.);
      })
      .catch(function(err) {
        console.log("Chunk error: " + err);
      });
    });
    // Call ready again to ensure that all chunks are written
    //   before closing the writer.
    defaultWriter.ready
    .then(function() {
      defaultWriter.close()
      .then(function() {
        console.log("All chunks written");
      })
      .catch(function(err) {
        console.log("Stream error: " + err);
      });
    });
  });
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
