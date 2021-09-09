---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>SpeechSynthesisUtterance</code></strong> interface of the <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)</p>

<h2 id="Constructor">Constructor</h2>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()")}}</dt>
 <dd>Returns a new <code>SpeechSynthesisUtterance</code> object instance.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<p><em><code>SpeechSynthesisUtterance</code> also inherits properties from its parent interface, {{domxref("EventTarget")}}.</em></p>

<dl>
 <dt>{{domxref("SpeechSynthesisUtterance.lang")}}</dt>
 <dd>Gets and sets the language of the utterance.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.pitch")}}</dt>
 <dd>Gets and sets the pitch at which the utterance will be spoken at.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.rate")}}</dt>
 <dd>Gets and sets the speed at which the utterance will be spoken at.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.text")}}</dt>
 <dd>Gets and sets the text that will be synthesised when the utterance is spoken.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.voice")}}</dt>
 <dd>Gets and sets the voice that will be used to speak the utterance.</dd>
 <dt>{{domxref("SpeechSynthesisUtterance.volume")}}</dt>
 <dd>Gets and sets the volume that the utterance will be spoken at.</dd>
</dl>

<h2 id="Events">Events</h2>

<p>Listen to these events using <code><a href="/en-US/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code> or by assigning an event listener to the <code>on<em>eventname</em></code> property of this interface.</p>

<dl>
 <dt><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/boundary_event">boundary</a></code></dt>
 <dd>Fired when the spoken utterance reaches a word or sentence boundary.<br>
 Also available via the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary">onboundary</a></code> property.</dd>
 <dt><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/end_event">end</a></code></dt>
 <dd>Fired when the utterance has finished being spoken.<br>
 Also available via the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onend">onend</a></code> property.</dd>
 <dt><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/error_event">error</a></code></dt>
 <dd>Fired when an error occurs that prevents the utterance from being successfully spoken.<br>
 Also available via the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror">onerror</a></code> property</dd>
 <dt><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/mark_event">mark</a></code></dt>
 <dd>Fired when the spoken utterance reaches a named SSML "mark" tag.<br>
 Also available via the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onmark">onmark</a></code> property.</dd>
 <dt><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/pause_event">pause</a></code></dt>
 <dd>Fired when the utterance is paused part way through.<br>
 Also available via the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause">onpause</a></code> property.</dd>
 <dt><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/resume_event">resume</a></code></dt>
 <dd>Fired when a paused utterance is resumed.<br>
 Also available via the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onresume">onresume</a></code> property.</dd>
 <dt><code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/start_event">start</a></code></dt>
 <dd>Fired when the utterance has begun to be spoken.<br>
 Also available via the <code><a href="/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart">onstart</a></code> property.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In our basic <a href="https://mdn.github.io/web-speech-api/speak-easy-synthesis/">Speech synthesiser demo</a> (<a href="https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis">source</a>), we first grab a reference to the SpeechSynthesis controller using <code>window.speechSynthesis</code>. After defining some necessary variables, we retrieve a list of the voices available using {{domxref("SpeechSynthesis.getVoices()")}} and populate a select menu with them so the user can choose what voice they want.</p>

<p>Inside the <code>inputForm.onsubmit</code> handler, we stop the form submitting with {{domxref("Event.preventDefault","preventDefault()")}}, use the {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "constructor")}} to create a new utterance instance containing the text from the text {{htmlelement("input")}}, set the utterance's {{domxref("SpeechSynthesisUtterance.voice","voice")}} to the voice selected in the {{htmlelement("select")}} element, and start the utterance speaking via the {{domxref("SpeechSynthesis.speak()")}} method.</p>

<pre class="brush: js">var synth = window.speechSynthesis;
var voices = synth.getVoices();

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

for(var i = 0; i &lt; voices.length; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  option.value = i;
  voiceSelect.appendChild(option);
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  utterThis.voice = voices[voiceSelect.value];
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
