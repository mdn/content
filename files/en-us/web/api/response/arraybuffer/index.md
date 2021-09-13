---
title: Response.arrayBuffer()
slug: Web/API/Response/arrayBuffer
tags:
  - API
  - ArrayBuffer
  - Fetch
  - Method
  - Reference
  - Response
browser-compat: api.Response.arrayBuffer
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>arrayBuffer()</code></strong> method of the {{domxref("Response")}} interface
  takes a {{domxref("Response")}} stream and reads it to completion. It returns a promise
  that resolves with an {{jsxref("ArrayBuffer")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>response</em>.arrayBuffer().then(function(<em>buffer</em>) {
  // do something with buffer
});</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A promise that resolves with an {{jsxref("ArrayBuffer")}}.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Playing_music">Playing music</h3>

<p>In our <a href="https://mdn.github.io/fetch-examples/fetch-array-buffer/">fetch array
    buffer live</a>, we have a Play button. When pressed, the <code>getData()</code>
  function is run. Note that before playing full audio file will be downloaded. If you
  need to play ogg during downloading (stream it) - consider
  {{domxref("HTMLAudioElement")}}:</p>

<pre class="brush: js">new Audio("music.ogg").play();
</pre>

<p>In <code>getData()</code> we create a new request using the
  {{domxref("Request.Request","Request()")}} constructor, then use it to fetch an OGG
  music track. We also use {{domxref("BaseAudioContext/createBufferSource", "AudioContext.createBufferSource")}} to create an
  audio buffer source. When the fetch is successful, we read an {{jsxref("ArrayBuffer")}}
  out of the response using <code>arrayBuffer()</code>, decode the audio data using
  {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}, set the decoded data as the audio buffer
  source's buffer (<code>source.buffer</code>), then connect the source up to the
  {{domxref("BaseAudioContext/destination", "AudioContext.destination")}}.</p>

<p>Once <code>getData()</code> has finished running, we start the audio source playing
  with <code>start(0)</code>, then disable the play button so it can't be clicked again
  when it is already playing (this would cause an error.)</p>

<pre class="brush: js">function getData() {
  source = audioCtx.createBufferSource();

  var myRequest = new Request('viper.ogg');

  fetch(myRequest).then(function(response) {
    return response.arrayBuffer();
  }).then(function(buffer) {
    audioCtx.decodeAudioData(buffer, function(decodedData) {
      source.buffer = decodedData;
      source.connect(audioCtx.destination);
    });
  });
};

// wire up buttons to stop and play audio

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
}</pre>

<h3 id="Reading_files">Reading files</h3>

<p>The {{domxref("Response.Response","Response()")}} constructor accepts
  {{domxref("File")}}s and {{domxref("Blob")}}s, so it may be used to read a
  {{domxref("File")}} into other formats.</p>

<pre class="brush: js">function readFile(file) {
  return new Response(file).arrayBuffer();
}
</pre>

<pre
  class="brush: html">&lt;input type="file" onchange="readFile(this.files[0])"&gt;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">HTTP access control (CORS)</a></li>
  <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
