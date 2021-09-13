---
title: SpeechRecognition.onend
slug: Web/API/SpeechRecognition/onend
tags:
- API
- Experimental
- Property
- Reference
- SpeechRecognition
- Web Speech API
- onend
- recognition
- speech
browser-compat: api.SpeechRecognition.onend
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>onend</code></strong> property of the
  {{domxref("SpeechRecognition")}} interface represents an event handler that will run
  when the speech recognition service has disconnected (when the
  <code><a href="/en-US/docs/Web/API/SpeechRecognition/end_event">end</a></code> event
  fires.)</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">mySpeechRecognition.onend = function() { ... };
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var recognition = new SpeechRecognition();

recognition.onend = function() {
  console.log('Speech recognition service disconnected');
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
  <li><a href="/en-US/docs/Web/API/SpeechRecognition/end_event">end event</a></li>
</ul>
