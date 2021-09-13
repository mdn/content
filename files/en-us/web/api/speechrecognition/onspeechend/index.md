---
title: SpeechRecognition.onspeechend
slug: Web/API/SpeechRecognition/onspeechend
tags:
- API
- Experimental
- Property
- Reference
- SpeechRecognition
- Web Speech API
- onspeechend
- recognition
- speech
browser-compat: api.SpeechRecognition.onspeechend
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>onspeechend</code></strong> property of the
  {{domxref("SpeechRecognition")}} interface represents an event handler that will run
  when speech recognized by the speech recognition service has stopped being detected
  (when the
  <code><a href="/en-US/docs/Web/API/SpeechRecognition/speechend_event">speechend</a></code>
  event fires.)</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">mySpeechRecognition.onspeechend = function() { ... };
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">recognition.onspeechend = function() {
  console.log('Speech has stopped being detected');
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
