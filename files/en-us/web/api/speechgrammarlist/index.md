---
title: SpeechGrammarList
slug: Web/API/SpeechGrammarList
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechGrammarList
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechGrammarList
---
<p>{{APIRef("Web Speech API")}}{{SeeCompatTable}}</p>

<p>The <strong><code>SpeechGrammarList</code></strong> interface of the <a href="/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> represents a list of {{domxref("SpeechGrammar")}} objects containing words or patterns of words that we want the recognition service to recognize.</p>

<p>Grammar is defined using <a class="external external-icon" href="https://www.w3.org/TR/jsgf/">JSpeech Grammar Format</a> (<strong>JSGF</strong>.) Other formats may also be supported in the future.</p>

<h2 id="Constructor">Constructor</h2>

<dl>
	<dt>{{domxref("SpeechGrammarList.SpeechGrammarList()")}}</dt>
	<dd>Creates a new <code>SpeechGrammarList</code> object.</dd>
</dl>

<h2 id="Properties">Properties</h2>

<dl>
	<dt>{{domxref("SpeechGrammarList.length")}} {{readonlyinline}}</dt>
	<dd>Returns the number of {{domxref("SpeechGrammar")}} objects contained in the <code>SpeechGrammarList</code>.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
	<dt>{{domxref("SpeechGrammarList.item()")}}</dt>
	<dd>Standard getter — allows individual {{domxref("SpeechGrammar")}} objects to be retrieved from the <code>SpeechGrammarList</code> using array syntax.</dd>
	<dt>{{domxref("SpeechGrammarList.addFromURI()")}}</dt>
	<dd>Takes a grammar present at a specific URI and adds it to the <code>SpeechGrammarList</code> as a new {{domxref("SpeechGrammar")}} object.</dd>
	<dt>{{domxref("SpeechGrammarList.addFromString()")}}</dt>
	<dd>Takes a grammar present in a specific {{domxref("DOMString")}} within the code base (e.g. stored in a variable) and adds it to the <code>SpeechGrammarList</code> as a new {{domxref("SpeechGrammar")}} object.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>In our simple <a href="https://github.com/mdn/web-speech-api/tree/master/speech-color-changer">Speech color changer</a> example, we create a new <code>SpeechRecognition</code> object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor, create a new {{domxref("SpeechGrammarList")}}, add our grammar string to it using the {{domxref("SpeechGrammarList.addFromString")}} method, and set it to be the grammar that will be recognized by the <code>SpeechRecognition</code> instance using the {{domxref("SpeechRecognition.grammars")}} property.</p>

<pre class="brush: js">var grammar = '#JSGF V1.0; grammar colors; public &lt;color&gt; = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h3 id="Firefox_OS_permissions">Firefox OS permissions</h3>

<p>To use speech recognition in an app, you need to specify the following permissions in your <a href="/en-US/docs/Web/Apps/Build/Manifest">manifest</a>:</p>

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
