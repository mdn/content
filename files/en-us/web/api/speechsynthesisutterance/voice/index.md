---
title: SpeechSynthesisUtterance.voice
slug: Web/API/SpeechSynthesisUtterance/voice
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Voice
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.voice
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>voice</code></strong> property of the
  {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the voice that will be
  used to speak the utterance.</p>

<p>This should be set to one of the {{domxref("SpeechSynthesisVoice")}} objects returned
  by {{domxref("SpeechSynthesis.getVoices()")}}. If not set by the time the utterance is
  spoken, the voice used will be the most suitable default voice available for the
  utterance's {{domxref("SpeechSynthesisUtterance.lang","lang")}} setting.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myVoice = speechSynthesisUtteranceInstance.voice;
speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("SpeechSynthesisVoice")}} object.</p>

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
