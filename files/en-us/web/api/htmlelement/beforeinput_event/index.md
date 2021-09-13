---
title: 'HTMLElement: beforeinput event'
slug: Web/API/HTMLElement/beforeinput_event
tags:
  - API
  - Event
  - HTML DOM
  - HTMLElement
  - InputEvent
  - Reference
  - beforeinput
browser-compat: api.HTMLElement.beforeinput_event
---
<div>{{APIRef}}</div>

<p>The DOM <strong><code>beforeinput</code></strong> event fires when the value of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element is about to be modified. The event also applies to elements with {{domxref("HTMLElement.contentEditable", "contenteditable")}} enabled, and to any element when {{domxref("Document.designMode", "designMode")}} is turned on.</p>

<p>This allows web apps to override text edit behavior before the browser modifies the DOM tree, and provides more control over input events to improve performance.</p>

<p>In the case of <code>contenteditable</code> and <code>designMode</code>, the event target is the <strong>editing host</strong>. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.</p>

<table class="properties">
 <tbody>
  <tr>
   <th>Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th>Cancelable</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th>Interface</th>
   <td>{{DOMxRef("InputEvent")}}</td>
  </tr>
  <tr>
   <th>Event handler property</th>
   <td>None</td>
  </tr>
  <tr>
   <th>Sync / Async</th>
   <td>Sync</td>
  </tr>
  <tr>
   <th>Composed</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th>Default Action</th>
   <td>Update the DOM element</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<h3 id="Feature_Detection">Feature Detection</h3>

<p>The following function returns true if <code>beforeinput</code>, and thus <code>getTargetRanges</code>, is supported.</p>

<pre class="brush: js">function isBeforeInputEventAvailable() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === "function";
}
</pre>

<h3 id="Simple_logger">Simple logger</h3>

<p>This example logs the current value of the element, immediately before replacing that value with the new one applied to the {{HtmlElement("input")}} element.</p>

<h4 id="HTML">HTML</h4>

<pre class="brush: html">&lt;input placeholder="Enter some text" name="name"/&gt;
&lt;p id="values"&gt;&lt;/p&gt;</pre>

<h4 id="JavaScript">JavaScript</h4>

<pre class="brush: js">const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('beforeinput', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}</pre>

<h4 id="Result">Result</h4>

<p>{{EmbedLiveSample("Simple_logger")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related event: <code><a href="/en-US/docs/Web/API/HTMLElement/input_event">input</a></code></li>
</ul>
