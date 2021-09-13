---
title: SpeechRecognitionAlternative.confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
tags:
- API
- Experimental
- Property
- Reference
- SpeechRecognitionAlternative
- Web Speech API
- confidence
- recognition
- speech
browser-compat: api.SpeechRecognitionAlternative.confidence
---
<p>{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}</p>

<p>The <code><strong>confidence</strong></code> read-only property of the
  {{domxref("SpeechRecognitionResult")}} interface returns a numeric estimate of how
  confident the speech recognition system is that the recognition is correct.</p>

<div class="note">
  <p><strong>Note:</strong> Mozilla's implementation of <code>confidence</code> is still
    being worked on — at the moment, it always seems to return 1.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var myConfidence = speechRecognitionAlternativeInstance.confidence;</pre>

<h3 id="Returns">Returns</h3>

<p>A number betwen 0 and 1.</p>

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
  console.log('Confidence: ' + event.results[0][0].confidence);
}</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a></li>
</ul>
