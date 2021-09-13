---
title: 'SpeechRecognition: result event'
slug: Web/API/SpeechRecognition/result_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.result_event
---
<div>{{APIRef("Web Speech API")}} {{SeeCompatTable}}</div>

<p>The <code><strong>result</strong></code> event of the <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> is fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app</p>

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
   <td>{{domxref("SpeechRecognitionEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td><code><a href="/en-US/docs/Web/API/SpeechRecognition/onresult">onresult</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This code is excerpted from our <a class="external external-icon" href="https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js">Speech color changer</a> example.</p>

<p>You can use the <code>result</code> event in an <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> method:</p>

<pre class="brush: js">var recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('result', function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
});
</pre>

<p>Or use the <code><a href="/en-US/docs/Web/API/SpeechRecognition/onresult">onresult</a></code> event handler property:</p>

<pre class="brush: js">recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
