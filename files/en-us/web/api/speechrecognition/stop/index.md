---
title: SpeechRecognition.stop()
slug: Web/API/SpeechRecognition/stop
tags:
- API
- Experimental
- Method
- Reference
- SpeechRecognition
- Web Speech API
- recognition
- speech
- stop
browser-compat: api.SpeechRecognition.stop
---
<p>{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}</p>

<p>The <code><strong>stop()</strong></code> method of the <a
    href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> stops the speech
  recognition service from listening to incoming audio, and attempts to return a
  {{domxref("SpeechRecognitionResult")}} using the audio captured so far.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">mySpeechRecognition.stop();</pre>

<h3 id="Returns">Returns</h3>

<p>Void.</p>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

abortBtn.onclick = function() {
  recognition.abort();
  console.log('Speech recognition aborted.');
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log('Speech recognition has stopped.');
}
</pre>

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
