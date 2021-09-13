---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - Streams
  - Streams API
  - WritableStream
browser-compat: api.WritableStreamDefaultWriter
---
<p>{{SeeCompatTable}}{{APIRef("Streams")}}</p>

 <p>The <strong><code>WritableStreamDefaultWriter</code></strong> interface of the <a href="/en-US/docs/Web/API/Streams_API">Streams API</a> is the object returned by {{domxref("WritableStream.getWriter()")}} and once created locks the writer to the <code>WritableStream</code> ensuring that no other streams can write to the underlying sink.</p>

 <h2 id="Constructor">Constructor</h2>

 <dl>
  <dt>{{domxref("WritableStreamDefaultWriter.WritableStreamDefaultWriter", "WritableStreamDefaultWriter()")}}</dt>
  <dd>Creates a new <code>WritableStreamDefaultWriter</code> object instance.</dd>
 </dl>

 <h2 id="Properties">Properties</h2>

 <dl>
  <dt>{{domxref("WritableStreamDefaultWriter.closed")}}{{readonlyinline}}</dt>
  <dd>Allows you to write code that responds to an end to the streaming process. Returns a promise that fulfills if the stream becomes closed or the writer's lock is released, or rejects if the stream errors.</dd>
  <dt>{{domxref("WritableStreamDefaultWriter.desiredSize")}}{{readonlyinline}}</dt>
  <dd>Returns the desired size required to fill the stream's internal queue.</dd>
  <dt>{{domxref("WritableStreamDefaultWriter.ready")}}{{readonlyinline}}</dt>
  <dd>Returns a {{jsxref("Promise")}} that resolves when the desired size of the stream's internal queue transitions from non-positive to positive, signaling that it is no longer applying backpressure.</dd>
 </dl>

 <h2 id="Methods">Methods</h2>

 <dl>
  <dt>{{domxref("WritableStreamDefaultWriter.abort()")}}</dt>
  <dd>Aborts the stream, signaling that the producer can no longer successfully write to the stream and it is to be immediately moved to an error state, with any queued writes discarded.</dd>
  <dt>{{domxref("WritableStreamDefaultWriter.close()")}}</dt>
  <dd>Closes the associated writable stream.</dd>
  <dt>{{domxref("WritableStreamDefaultWriter.releaseLock()")}}</dt>
  <dd>Releases the writer's lock on the corresponding stream. After the lock is released, the writer is no longer active. If the associated stream is errored when the lock is released, the writer will appear errored in the same way from now on; otherwise, the writer will appear closed.</dd>
  <dt>{{domxref("WritableStreamDefaultWriter.write()")}}</dt>
  <dd>Writes a passed chunk of data to a {{domxref("WritableStream")}} and its underlying sink, then returns a {{jsxref("Promise")}} that resolves to indicate the success or failure of the write operation.</dd>
 </dl>

 <h2 id="Examples">Examples</h2>

 <p>The following example shows the creation of a <code>WritableStream</code> with a custom sink and an API-supplied queuing strategy. It then calls a function called <code>sendMessage()</code>, passing the newly created stream and a string. Inside this function it calls the stream's <code>getWriter()</code> method, which returns an instance of {{domxref("WritableStreamDefaultWriter")}}. A <code>forEach()</code> call is used to write each chunk of the string to the stream. Finally, <code>write()</code> and <code>close()</code> return promises that are processed to deal with success or failure of chunks and streams.</p>

 <pre class="brush: js"> const list = document.querySelector('ul');

 function sendMessage(message, writableStream) {
   // defaultWriter is of type WritableStreamDefaultWriter
   const defaultWriter = writableStream.getWriter();
   const encoder = new TextEncoder();
   const encoded = encoder.encode(message, { stream: true });
   encoded.forEach((chunk) =&gt; {
     defaultWriter.ready
       .then(() =&gt; {
         return defaultWriter.write(chunk);
       })
       .then(() =&gt; {
         console.log("Chunk written to sink.");
       })
       .catch((err) =&gt; {
         console.log("Chunk error:", err);
       });
   });
   // Call ready again to ensure that all chunks are written
   //   before closing the writer.
   defaultWriter.ready
     .then(() =&gt; {
       defaultWriter.close();
     })
     .then(() =&gt; {
       console.log("All chunks written");
     })
     .catch((err) =&gt; {
       console.log("Stream error:", err);
     });
 }

 const decoder = new TextDecoder("utf-8");
 const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
 let result = "";
 const writableStream = new WritableStream({
   // Implement the sink
   write(chunk) {
     return new Promise((resolve, reject) =&gt; {
       var buffer = new ArrayBuffer(2);
       var view = new Uint16Array(buffer);
       view[0] = chunk;
       var decoded = decoder.decode(view, { stream: true });
       var listItem = document.createElement('li');
       listItem.textContent = "Chunk decoded: " + decoded;
       list.appendChild(listItem);
       result += decoded;
       resolve();
     });
   },
   close() {
     var listItem = document.createElement('li');
     listItem.textContent = "[MESSAGE RECEIVED] " + result;
     list.appendChild(listItem);
   },
   abort(err) {
     console.log("Sink error:", err);
   }
 }, queuingStrategy);

 sendMessage("Hello, world.", writableStream);</pre>

 <p>You can find the full code in our <a href="https://mdn.github.io/dom-examples/streams/simple-writer/">Simple writer example</a>.</p>

 <h2 id="Specifications">Specifications</h2>

{{Specifications}}

 <h2 id="Browser_compatibility">Browser compatibility</h2>

 <p>{{Compat}}</p>
