---
title: SpeechRecognition.onstart
slug: Web/API/SpeechRecognition/onstart
tags:
- API
- Experimental
- Property
- Reference
- SpeechRecognition
- Web Speech API
- onstart
- recognition
- speech
browser-compat: api.SpeechRecognition.onstart
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>onstart</code></strong> property of the
  {{domxref("SpeechRecognition")}} interface represents an event handler that will run
  when the speech recognition service has begun listening to incoming audio with intent to
  recognize grammars associated with the current <code>SpeechRecognition</code> (when the
  <a href="/en-US/docs/Web/API/SpeechRecognition/start_event">start event</a> fires.)</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">mySpeechRecognition.onstart = function() { ... };
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">recognition.onstart = function() {
  console.log('Speech recognition service has started');
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
