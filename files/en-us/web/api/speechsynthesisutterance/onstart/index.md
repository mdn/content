---
title: SpeechSynthesisUtterance.onstart
slug: Web/API/SpeechSynthesisUtterance/onstart
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - onstart
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onstart
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>onstart</code></strong> property of the
  {{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
  run when the utterance has begun to be spoken (when the <a
    href="/en-US/docs/Web/API/SpeechSynthesisUtterance/start_event">start</a> event
  fires.)</p>

<p>This occurs when the {{domxref("SpeechSynthesis.speak()")}} method is invoked.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">speechSynthesisUtteranceInstance.onstart = function() { ... };
</pre>

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

  utterThis.onstart = function(event) {
    console.log('We have started uttering this speech: ' + event.utterance.text);
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
