---
title: 'Document: keydown event'
slug: Web/API/Document/keydown_event
tags:
  - API
  - DOM
  - Document
  - Event
  - KeyboardEvent
  - Reference
  - keydown
browser-compat: api.Document.keydown_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>keydown</code></strong> event is fired when a key is pressed.</p>

<p>Unlike the {{domxref("Document/keypress_event", "keypress")}} event, the <code>keydown</code> event is fired for all keys, regardless of whether they produce a character value.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("KeyboardEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("GlobalEventHandlers.onkeydown", "onkeydown")}}</td>
  </tr>
 </tbody>
</table>

<p>The <code>keydown</code> and {{domxref("Document/keyup_event", "keyup")}} events provide a code indicating which key is pressed, while {{domxref("Document/keypress_event", "keypress")}} indicates which <em>character</em> was entered. For example, a lowercase "a" will be reported as 65 by <code>keydown</code> and <code>keyup</code>, but as 97 by <code>keypress</code>. An uppercase "A" is reported as 65 by all events.</p>

<h2 id="Examples">Examples</h2>

<h3 id="addEventListener_keydown_example">addEventListener keydown example</h3>

<p>This example logs the {{domxref("KeyboardEvent.code")}} value whenever you press down a key.</p>

<pre class="brush: html">&lt;p&gt;Focus the IFrame first (e.g. by clicking in it), then try pressing some keys.&lt;/p&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<pre class="brush: js">document.addEventListener('keydown', logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}</pre>

<p>{{EmbedLiveSample("addEventListener_keydown_example")}}</p>

<h3 id="onkeydown_equivalent">onkeydown equivalent</h3>

<pre class="brush: js">document.onkeydown = logKey;</pre>


<h3 id="Ignoring_keydown_during_ime_composition">Ignoring keydown during IME composition</h3>

<p>An <em>Input Method Editor (IME)</em> is a program that enables users to enter characters that are not supported by their keyboard using some other key combination.</p>

<p>Since Firefox 65, the <code>keydown</code> and {{domxref("Document/keyup_event", "keyup")}} events are now fired during IME composition ({{bug(354358)}}). To ignore all <code>keydown</code> events that are part of composition, do something like this (229 is a special value set for a <code>keyCode</code> relating to an event that has been processed by an IME):</p>

<pre class="brush: js">eventTarget.addEventListener("keydown", event =&gt; {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  // do something
});
</pre>


<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("Document/keypress_event", "keypress")}}</li>
 <li>{{domxref("Document/keyup_event", "keyup")}}</li>
 <li>{{domxref("Element")}}: {{domxref("Element/keydown_event", "keydown")}} event</li>
</ul>
