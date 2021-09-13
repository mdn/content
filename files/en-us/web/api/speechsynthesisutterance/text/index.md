---
title: SpeechSynthesisUtterance.text
slug: Web/API/SpeechSynthesisUtterance/text
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Text
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.text
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>text</code></strong> property of the
  {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the text that will be
  synthesised when the utterance is spoken.</p>

<p>The text may be provided as plain text, or a well-formed <a
    class="external external-icon" href="https://www.w3.org/TR/speech-synthesis/">SSML</a>
  document. The SSML tags will be stripped away by devices that don't support SSML.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myText = speechSynthesisUtteranceInstance.text;
speechSynthesisUtteranceInstance.text = 'Hello I am speaking';
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} representing the text to the synthesised. The maximum length
  of the text that can be spoken in each utterance is 32,767 characters.</p>

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
  console.log(utterThis.text);
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
