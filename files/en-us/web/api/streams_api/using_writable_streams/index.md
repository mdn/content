---
title: Using writable streams
slug: Web/API/Streams_API/Using_writable_streams
tags:
  - API
  - Controller
  - Guide
  - Streams
  - WritableStream
  - writable streams
  - writer
---
<div>{{apiref("Streams")}}</div>

<p>As a JavaScript developer, programmatically writing data to a stream is very useful! This article explains the <a href="/en-US/docs/Web/API/Streams_API">Streams API</a>’s writable stream functionality.</p>

<div class="note">
<p><strong>Note:</strong> This article assumes that you understand the use cases of writable streams, and are aware of the high-level concepts. If not, we suggest that you first read the <a href="/en-US/docs/Web/API/Streams_API#Concepts_and_usage">Streams concepts and usage overview</a> and dedicated <a href="/en-US/docs/Web/API/Streams_API/Concepts">Streams API concepts</a> article, then come back.</p>
</div>

<div class="note">
<p><strong>Note:</strong> If you are looking for information about readable streams, try <a href="/en-US/docs/Web/API/Streams_API/Using_readable_streams">Using readable streams</a> instead.</p>
</div>

<h2 id="Browser_support">Browser support</h2>

<p>The Streams API is experimental, and support is at an early stage right now. Only Chrome currently has basic writable streams implemented.</p>

<h2 id="Introducing_an_example">Introducing an example</h2>

<p>In our <a href="https://github.com/mdn/dom-examples/tree/master/streams">dom-examples/streams</a> repo you’ll find a <a href="https://github.com/mdn/dom-examples/blob/master/streams/simple-writer/index.html">Simple writer example</a> (<a href="https://mdn.github.io/dom-examples/streams/simple-writer/">see it live also</a>). This takes a given message and writes it into a writable stream, displaying each chunk on the UI as it is written to the stream and also displaying the whole message on the UI when writing has finished.</p>

<h2 id="How_writable_streams_work">How writable streams work</h2>

<p>Let’s look at how the writable stream functionality in our demo works.</p>

<h3 id="Constructing_a_writable_stream">Constructing a writable stream</h3>

<p>To create a writable stream, we use the {{domxref("WritableStream.WritableStream","WritableStream()")}} constructor; the syntax looks complex at first, but actually isn’t too bad.</p>

<p>The syntax skeleton looks like this:</p>

<pre class="brush: js">const stream = new WritableStream({
  start(controller) {

  },
  write(chunk,controller) {

  },
  close(controller) {

  },
  abort(reason) {

  }
}, {
  highWaterMark,
  size()
});</pre>

<p>The constructor takes two objects as parameters. The first object is required, and creates a model in JavaScript of the underlying sink the data is being written to. The second object is optional, and allows you to specify a <a href="/en-US/docs/Web/API/Streams_API/Concepts#Internal_queues_and_queuing_strategies">custom queueing strategy</a> to use for your stream, which takes the form of an instance of {{domxref("ByteLengthQueuingStrategy")}} or {{domxref("CountQueuingStrategy")}}.</p>

<p>The first object can contain up to four members, all of which are optional:</p>

<ol>
 <li><code>start(controller)</code> — A method that is called once, immediately after the {{domxref("WritableStream")}} is constructed. Inside this method, you should include code that sets up the stream functionality, e.g. getting access to the underlying sink.</li>
 <li><code>write(chunk,controller)</code> — A method that is called repeatedly every time a new chunk is ready to be written to the underlying sink (specified in the <code>chunk</code> parameter).</li>
 <li><code>close(controller)</code> — A method that is called if the app signals that it has finished writing chunks to the stream. It should do whatever is necessary to finalize writes to the underlying sink, and release access to it.</li>
 <li><code>abort(reason)</code> — A method that will be called if the app signals that it wishes to abruptly close the stream and put it in an errored state.</li>
</ol>

<p>The constructor call in our example looks like this:</p>

<pre class="brush: js">const decoder = new TextDecoder("utf-8");
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
}, queuingStrategy);</pre>

<ul>
 <li>The <code>write()</code> method contains a promise including code that decodes each written chunk into a format that can be written to the UI. This is called when each chunk is actually written (see the next section).</li>
 <li>The <code>close()</code> method is called automatically when writing has finished — it prints the entire decoded result to the UI in one string.</li>
 <li>The <code>abort()</code> method prints an error to the console if the stream is aborted.</li>
</ul>

<h3 id="Writing">Writing</h3>

<p>To actually write content to the stream we call the <code>sendMessage()</code> function, passing it a message to be written and the stream to write to:</p>

<pre class="brush: js">sendMessage("Hello, world.", writableStream);</pre>

<p>The <code>sendMessage()</code> definition looks like so:</p>

<pre class="brush: js">function sendMessage(message, writableStream) {
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
}</pre>

<p>So here we create a writer to write the chunks to the stream using {{domxref("WritableStream.getWriter()")}}. This creates a {{domxref("WritableStreamDefaultWriter")}} instance.</p>

<p>We also create a new {{domxref("TextEncoder")}} instance using the relevant constructor to encode the message into chunks to be put into the stream.</p>

<p>With the chunks encoded, we then call {{jsxref("Array/forEach")}} on the resulting array. Inside this block we use {{domxref("WritableStreamDefaultWriter.ready")}} to check whether the writer is ready to have another chunk written to it. <code>ready</code> returns a promise that fulfills when this is the case, inside of which we call {{domxref("WritableStreamDefaultWriter.write()")}} to actually write the chunk to the stream. This also triggers the <code>write()</code> method specified inside the <code>WritableStream()</code> constructor, as discussed above.</p>

<p>After the chunks have all been written, we then perform the <code>ready</code> check once more, to check that the last chunk has finished being written and all the work is done. When this <code>ready</code> check fulfills, we invoke {{domxref("WritableStreamDefaultWriter.close()")}} to close the stream. This also triggers the <code>close()</code> method specified inside the <code>WritableStream()</code> constructor, as discussed above.</p>

<h3 id="Controllers">Controllers</h3>

<p>As you'll have noticed when studying the <code>WritableStream()</code> syntax skeleton, the <code>start()</code>, <code>write()</code>, and <code>close()</code> methods can optionally have a <code>controller</code> parameter passed to them. This contains an instance of the {{domxref("WritableStreamDefaultController")}} interface, which can be used by the developer to further control the stream as required.</p>

<p>This currently only has one method available on it — {{domxref("WritableStreamDefaultController.error()")}}, which when invoked causes future interactions with the stream to error. This is useful when another part of an app goes wrong, and you want to propagate the error to the stream so that the whole system fails cleanly, rather than risking garbage being silently written to the stream (or something similarly bad).</p>

<h3 id="Closing_and_aborting">Closing and aborting</h3>

<p>As mentioned above, we call the <code>close()</code> method when the writing is finished, which triggers the <code>close()</code> method specified inside the <code>WritableStream()</code> constructor.</p>

<p>We could also abort the stream by calling {{domxref("WritableStreamDefaultWriter.abort()")}}.</p>

<p>The difference is that when close is called, any previously enqueued chunks are written and finished with before the stream is closed.</p>

<p>When abort is called, any previously enqueued chunks are just thrown away immediately and then the stream is moved to an errored state. This also triggers any <code>abort()</code> method specified in the <code>WritableStream()</code> constructor to be invoked.</p>
