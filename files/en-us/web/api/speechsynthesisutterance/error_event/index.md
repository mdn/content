---
title: 'SpeechSynthesisUtterance: error event'
slug: Web/API/SpeechSynthesisUtterance/error_event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.error_event
---
<div>{{APIRef("Web Speech API")}} {{SeeCompatTable}}</div>

<p>The <code><strong>error</strong></code> event of the <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> {{domxref("SpeechSynthesisUtterance")}} object is fired when an error occurs that prevents the utterance from being successfully spoken.</p>

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
   <td>{{domxref("SpeechSynthesisErrorEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror">onerror</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>You can use the <code>error</code> event in an <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener</a></code> method:</p>

<pre class="brush: js">utterThis.addEventListener('error', function(event) {
  console.log('An error has occurred with the speech synthesis: ' + event.error');
});</pre>

<p>Or use the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror">onerror</a></code> event handler property:</p>

<pre class="brush: js">utterThis.onerror = function(event) {
  console.log('An error has occurred with the speech synthesis: ' + event.error');
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
