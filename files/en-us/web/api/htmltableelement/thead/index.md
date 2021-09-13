---
title: HTMLTableElement.tHead
slug: Web/API/HTMLTableElement/tHead
tags:
- API
- HTML DOM
- HTMLTableElement
- Property
- Reference
browser-compat: api.HTMLTableElement.tHead
---
<div>{{APIRef("HTML DOM")}}</div>

<p>The <code><strong>HTMLTableElement.tHead</strong></code> represents the
  {{HTMLElement("thead")}} element of a {{HTMLElement("table")}} . Its value will be
  <code>null</code> if there is no such element.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>thead_element</em> = <em>table</em>.tHead;
<em>table</em>.tHead = <em>thead_element</em>;
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code>thead_element</code> is a {{domxref("HTMLTableSectionElement")}}.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush:js">if (table.tHead == my_head_el) {
  // ...
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The interface implementing this property: {{domxref("HTMLTableElement")}}.</li>
</ul>
