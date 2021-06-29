---
title: Response.body
slug: Web/API/Response/body
tags:
  - API
  - Fetch
  - Property
  - Reference
  - Streams
  - Response
browser-compat: api.Response.body
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>body</code></strong> read-only property of the {{domxref("Response")}}
  interface is a {{domxref("ReadableStream")}} of the body contents.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">response.body;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("ReadableStream")}}.</p>

<h2 id="Example">Example</h2>

<p>In our <a href="https://mdn.github.io/dom-examples/streams/simple-pump/">simple stream
    pump</a> example we fetch an image, expose the response's stream using
  <code>response.body</code>, create a reader using
  {{domxref("ReadableStream.getReader()", "ReadableStream.getReader()")}}, then enqueue
  that stream's chunks into a second, custom readable stream — effectively creating an
  identical copy of the image.</p>

<pre class="brush: js">const image = document.getElementById('target');

// Fetch the original image
fetch('./tortoise.png')
// Retrieve its body as ReadableStream
.then(response =&gt; response.body)
.then(body =&gt; {
  const reader = body.getReader();

  return new ReadableStream({
    start(controller) {
      return pump();

      function pump() {
        return reader.read().then(({ done, value }) =&gt; {
          // When no more data needs to be consumed, close the stream
          if (done) {
            controller.close();
            return;
          }

          // Enqueue the next data chunk into our target stream
          controller.enqueue(value);
          return pump();
        });
      }
    }
  })
})
.then(stream =&gt; new Response(stream))
.then(response =&gt; response.blob())
.then(blob =&gt; URL.createObjectURL(blob))
.then(url =&gt; console.log(image.src = url))
.catch(err =&gt; console.error(err));</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Fetch_API">Fetch API</a></li>
  <li><a href="/en-US/docs/Web/API/Streams_API">Streams API</a></li>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
</ul>
