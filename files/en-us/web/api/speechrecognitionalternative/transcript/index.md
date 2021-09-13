---
title: SpeechRecognitionAlternative.transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
tags:
- API
- Experimental
- Property
- Reference
- SpeechRecognitionAlternative
- Web Speech API
- recognition
- speech
- transcript
browser-compat: api.SpeechRecognitionAlternative.transcript
---
<p>{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}</p>

<p>The <code><strong>transcript</strong></code> read-only property of the
  {{domxref("SpeechRecognitionResult")}} interface returns a string containing the
  transcript of the recognized word(s).</p>

<p>For continuous recognition, leading or trailing whitespace will be included where
  necessary so that concatenation of consecutive {{domxref("SpeechRecognitionResult")}}s
  produces a proper transcript of the session.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var myTranscript = speechRecognitionAlternativeInstance.transcript;</pre>

<h3 id="Returns">Returns</h3>

<p>A {{domxref("DOMString")}}.</p>

<h2 id="Examples">Examples</h2>

<p>This code is excerpted from our <a
    href="https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js">Speech
    color changer</a> example.</p>

<pre class="brush: js">recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
