---
title: SpeechSynthesisErrorEvent.error
slug: Web/API/SpeechSynthesisErrorEvent/error
tags:
  - API
  - Error
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisErrorEvent
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisErrorEvent.error
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>error</code></strong> property of the
  {{domxref("SpeechSynthesisErrorEvent")}} interface returns an error code indicating what
  has gone wrong with a speech synthesis attempt.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">myError = event.error;
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} containing an error code. Possible codes are:</p>

<dl>
  <dt><code>canceled</code></dt>
  <dd>A {{domxref("SpeechSynthesis.cancel")}} method call caused the
    {{domxref("SpeechSynthesisUtterance")}} to be removed from the queue before it had
    begun being spoken.</dd>
  <dt><code>interrupted</code></dt>
  <dd>A {{domxref("SpeechSynthesis.cancel")}} method call caused the
    {{domxref("SpeechSynthesisUtterance")}} to be interrupted after it had begun being
    spoken and before it completed.</dd>
  <dt><code>audio-busy</code></dt>
  <dd>The operation couldn't be completed at this time because the user-agent couldn't
    access the audio output device (for example, the user may need to correct this by
    closing another application.)</dd>
  <dt><code>audio-hardware</code></dt>
  <dd>The operation couldn't be completed at this time because the user-agent couldn't
    identify an audio output device (for example, the user may need to connect a speaker
    or configure system settings.)</dd>
  <dt><code>network</code></dt>
  <dd>The operation couldn't be completed at this time because some required network
    communication failed.</dd>
  <dt><code>synthesis-unavailable</code></dt>
  <dd>The operation couldn't be completed at this time because no synthesis engine was
    available (For example, the user may need to install or configure a synthesis engine.)
  </dd>
  <dt><code>synthesis-failed</code></dt>
  <dd>The operation failed because the synthesis engine raised an error.</dd>
  <dt><code>language-unavailable</code></dt>
  <dd>No appropriate voice was available for the language set in
    {{domxref("SpeechSynthesisUtterance.lang")}}.</dd>
  <dt><code>voice-unavailable</code></dt>
  <dd>The voice set in {{domxref("SpeechSynthesisUtterance.voice")}} was not available.
  </dd>
  <dt><code>text-too-long</code></dt>
  <dd>The contents of the {{domxref("SpeechSynthesisUtterance.text")}} attribute was too
    long to synthesize.</dd>
  <dt><code>invalid-argument</code></dt>
  <dd>The content of the {{domxref("SpeechSynthesisUtterance.rate")}},
    {{domxref("SpeechSynthesisUtterance.pitch")}} or
    {{domxref("SpeechSynthesisUtterance.volume")}} property was not valid.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

var voices = synth.getVoices();

  ...

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i &lt; voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);

  utterThis.onerror = function(event) {
    console.error('An error has occurred with the speech synthesis: ' + event.error);
  }

  inputTxt.blur();
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
