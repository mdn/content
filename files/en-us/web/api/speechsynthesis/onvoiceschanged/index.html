---
title: SpeechSynthesis.onvoiceschanged
slug: Web/API/SpeechSynthesis/onvoiceschanged
tags:
- API
- Experimental
- Property
- Reference
- SpeechSynthesis
- Web Speech API
- onvoiceschanged
- speech
- synthesis
browser-compat: api.SpeechSynthesis.onvoiceschanged
---
<div>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</div>

<p>The <code><strong>onvoiceschanged</strong></code> property of the
  {{domxref("SpeechSynthesis")}} interface represents an event handler that will run when
  the list of {{domxref("SpeechSynthesisVoice")}} objects that would be returned by the
  {{domxref("SpeechSynthesis.getVoices()")}} method has changed (when the <a
    href="/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event">voiceschanged</a> event
  fires.)</p>

<p>This may occur when speech synthesis is being done on the server-side and the voices
  list is being determined asynchronously, or when client-side voices are
  installed/uninstalled while a speech synthesis application is running.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">speechSynthesisInstance.onvoiceschanged = function() { ... };
</pre>

<h2 id="Examples">Examples</h2>

<p>This could be used to populate a list of voices that the user can choose between when
  the event fires (see our <a
    href="https://github.com/mdn/web-speech-api/blob/gh-pages/speak-easy-synthesis/script.js">Speak
    easy synthesis demo</a>.) Note that Firefox doesn't support it at present, and will
  just return a list of voices when {{domxref("SpeechSynthesis.getVoices()")}} is fired.
  With Chrome however, you have to wait for the event to fire before populating the list,
  hence the bottom if statement seen below.</p>

<pre class="brush: js">var synth = window.speechSynthesis;
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i &lt; voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
