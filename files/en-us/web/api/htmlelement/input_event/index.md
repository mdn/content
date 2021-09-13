---
title: 'HTMLElement: input event'
slug: Web/API/HTMLElement/input_event
tags:
  - Content
  - Edit
  - Event
  - Forms
  - HTML DOM
  - HTMLElement
  - Input
  - InputEvent
  - NeedsMobileBrowserCompatibility
  - Reference
  - data
  - value
browser-compat: api.HTMLElement.input_event
---
<div>{{APIRef}}</div>

<p>The <strong><code>input</code></strong> event fires when the <code>value</code> of an {{HTMLElement("input")}}, {{HTMLElement("select")}}, or {{HTMLElement("textarea")}} element has been changed. </p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Bubbles</th>
   <td>Yes</td>
  </tr>
  <tr>
   <th scope="row">Cancelable</th>
   <td>No</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{DOMxRef("InputEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref("GlobalEventHandlers.oninput")}}</td>
  </tr>
 </tbody>
</table>

<p>The event also applies to elements with {{domxref("HTMLElement.contentEditable", "contenteditable")}} enabled, and to any element when {{domxref("Document.designMode", "designMode")}} is turned on. In the case of <code>contenteditable</code> and <code>designMode</code>, the event target is the <em>editing host</em>. If these properties apply to multiple elements, the editing host is the nearest ancestor element whose parent isn't editable.</p>

<p>For <code>&lt;input&gt;</code> elements with <code>type=checkbox</code> or <code>type=radio</code>, the <code>input</code> event should fire whenever a user toggles the control, per <a href="https://html.spec.whatwg.org/multipage/input.html#the-input-element:event-input-2">the HTML5 specification</a>. However, historically this has not always been the case. Check compatibility, or use the {{domxref("HTMLElement/change_event", "change")}} event instead for elements of these types.</p>

<div class="notecard note">
<p><strong>Note:</strong> The <code>input</code> event is fired every time the <code>value</code> of the element changes. This is unlike the {{domxref("HTMLElement/change_event", "change")}} event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.</p>
</div>

<h2 id="Examples">Examples</h2>

<p>This example logs the value whenever you change the value of the {{HtmlElement("input")}} element.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;input placeholder="Enter some text" name="name"/&gt;
&lt;p id="values"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const input = document.querySelector('input');
const log = document.getElementById('values');

input.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Examples")}}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>Related events
  <ul>
   <li>{{domxref("HTMLElement/beforeinput_event", "beforeinput")}}</li>
   <li>{{domxref("HTMLElement/change_event", "change")}}</li>
   <li>{{domxref("HTMLInputElement/invalid_event", "invalid")}}</li>
  </ul>
 </li>
</ul>
