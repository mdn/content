---
title: 'SpeechSynthesisUtterance: boundary event'
slug: Web/API/SpeechSynthesisUtterance/boundary_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.boundary_event
---
<div>{{APIRef("Web Speech API")}} {{SeeCompatTable}}</div>

<p>The <code><strong>boundary</strong></code> event of the <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> is fired when the spoken utterance reaches a word or sentence boundary.</p>

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
   <td>{{domxref("SpeechSynthesisEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler</th>
   <td><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary">onboundary</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>You can use the <code>boundary</code> event in an <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> method:</p>

<pre class="brush: js">utterThis.addEventListener('boundary', function(event) {
  console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' seconds.');
});</pre>

<p>Or use the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary">onboundary</a></code> event handler property:</p>

<pre class="brush: js">utterThis.onboundary = function(event) {
  console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' seconds.');
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
 <li><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary">onboundary</a></code></li>
</ul>
