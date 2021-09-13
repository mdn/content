---
title: 'HTMLFormElement: reset event'
slug: Web/API/HTMLFormElement/reset_event
tags:
  - API
  - Event
  - Forms
  - HTML DOM
  - HTMLFormElement
  - Reference
browser-compat: api.HTMLFormElement.reset_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>reset</code></strong> event fires when a {{HTMLElement("form")}} is reset.</p>

<table class="properties">
 <tbody>
  <tr>
   <th>Bubbles</th>
   <td>Yes (although specified as a simple event that doesn't bubble)</td>
  </tr>
  <tr>
   <th>Cancelable</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th>Interface</th>
   <td>{{DOMxRef("Event")}}</td>
  </tr>
  <tr>
   <th>Event handler property</th>
   <td>{{domxref("GlobalEventHandlers.onreset")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>This example uses {{domxref("EventTarget.addEventListener()")}} to listen for form resets, and logs the current {{domxref("Event.timeStamp")}} whenever that occurs.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;form id="form"&gt;
  &lt;label&gt;Test field: &lt;input type="text"&gt;&lt;/label&gt;
  &lt;br&gt;&lt;br&gt;
  &lt;button type="reset"&gt;Reset form&lt;/button&gt;
&lt;/form&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function logReset(event) {
  log.textContent = `Form reset! Time stamp: ${event.timeStamp}`;
}

const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('reset', logReset);</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>HTML {{HTMLElement("form")}} element</li>
</ul>
