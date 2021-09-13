---
title: Document.onafterscriptexecute
slug: Web/API/Document/onafterscriptexecute
tags:
  - API
  - DOM
  - Non-standard
  - Property
  - Reference
browser-compat: api.Document.onafterscriptexecute
---
<div>{{ApiRef("DOM")}}{{non-standard_header}}</div>

<p>The <strong><code>Document.onafterscriptexecute</code></strong> property references a
  function that fires when a static {{HTMLElement("script")}} element finishes executing
  its script. It does not fire if the element is added dynamically, such as with
  {{domxref("Node.appendChild()", "appendChild()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>document</var>.onafterscriptexecute = <var>funcRef</var>;
</pre>

<p><var>funcRef</var> is a function reference, called when the event is fired. The event's
  <code>target</code> attribute is set to the {{HTMLElement("script")}} element that just
  finished executing.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener('afterscriptexecute', finished, true);
</pre>

<p><a href="https://media.prod.mdn.mozit.cloud/samples/html/currentScript.html">View Live Example</a></p>

<h2 id="Specifications">Specifications</h2>

<ul>
 <li><a href="https://www.whatwg.org/specs/web-apps/current-work/#the-script-element">HTML5</a></li>
</ul>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Document.onbeforescriptexecute")}}</li>
  <li>{{domxref("Document.currentScript")}}</li>
</ul>
