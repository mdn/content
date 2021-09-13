---
title: SpeechSynthesisUtterance.lang
slug: Web/API/SpeechSynthesisUtterance/lang
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - lang
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.lang
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <strong><code>lang</code></strong> property of the
  {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the language of the
  utterance.</p>

<p>If unset, the app's (i.e. the {{htmlelement("html")}} {{htmlattrxref("lang", "html")}}
  value) lang will be used, or the user-agent default if that is unset too.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myLang = speechSynthesisUtteranceInstance.lang;
speechSynthesisUtteranceInstance.lang = 'en-US';
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("DOMString")}} representing a BCP 47 language tag.</p>

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
  utterThis.lang = 'en-US';
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
