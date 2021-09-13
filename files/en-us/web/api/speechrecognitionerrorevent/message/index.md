---
title: SpeechRecognitionErrorEvent.message
slug: Web/API/SpeechRecognitionErrorEvent/message
tags:
- API
- Experimental
- Property
- Reference
- SpeechRecognitionErrorEvent
- Web Speech API
- message
- recognition
- speech
browser-compat: api.SpeechRecognitionErrorEvent.message
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <code><strong>message</strong></code> read-only property of the
  {{domxref("SpeechRecognitionErrorEvent")}} interface returns a message describing the
  error in more detail.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myErrorMsg = event.message;
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} containing more details about the error that was raised.
  Note that the spec does not define the exact wording of these messages — this is up to
  the implementors to decide upon.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var recognition = new SpeechRecognition();

recognition.onerror = function(event) {
  console.log('Speech recognition error detected: ' + event.error);
  console.log('Additional information: ' + event.message);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="Firefox_OS_permissions">Firefox OS permissions</h3>

<p>To use speech recognition in an app, you need to specify the following permissions in
  your <a href="/en-US/docs/Web/Apps/Build/Manifest">manifest</a>:</p>

<pre class="brush: json">"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}</pre>

<p>You also need a privileged app, so you need to include this as well:</p>

<pre class="brush: json">  "type": "privileged"</pre>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
