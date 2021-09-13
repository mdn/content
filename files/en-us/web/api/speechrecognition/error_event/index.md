---
title: 'SpeechRecognition: error event'
slug: Web/API/SpeechRecognition/error_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.error_event
---
<div>{{SeeCompatTable}} {{APIRef("Web Speech API")}}</div>

<p>The <code><strong>error</strong></code> event of the <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> {{domxref("SpeechRecognition")}} object is fired when a speech recognition error occurs.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("SpeechRecognitionErrorEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td><code><a href="/en-US/docs/Web/API/SpeechRecognition/onerror">onerror</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>You can use the <code>error</code> event in an <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> method:</p>

<pre class="brush: js">var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('error', function(event) {
  console.log('Speech recognition error detected: ' + event.error);
});</pre>

<p>Or use the <code><a href="/en-US/docs/Web/API/SpeechRecognition/onerror">onerror</a></code> event handler property:</p>

<pre class="brush: js">recognition.onerror = function(event) {
  console.log('Speech recognition error detected: ' + event.error);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
 <li><code><a href="/en-US/docs/Web/API/SpeechRecognition/onerror">onerror</a></code></li>
</ul>
