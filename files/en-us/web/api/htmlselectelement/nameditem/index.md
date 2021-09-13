---
title: HTMLSelectElement.namedItem()
slug: Web/API/HTMLSelectElement/namedItem
tags:
- API
- HTML DOM
- HTMLSelectElement
- Method
- Reference
browser-compat: api.HTMLSelectElement.namedItem
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>The <code><strong>HTMLSelectElement.namedItem()</strong></code> method returns the
  {{domxref("HTMLOptionElement")}} corresponding to the {{domxref("HTMLOptionElement")}}
  whose <code>name</code> or <code>id</code> match the specified name, or
  <code>null</code> if no option matches.</p>

<p>In JavaScript, using the array bracket syntax with a {{jsxref("String")}}, like
  <code>selectElt["value"]</code> is equivalent to
  <code>selectElt</code><code>.namedItem("value")</code>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var <em>item</em> = <em>collection</em>.namedItem(<em>str</em>);
var <em>item </em>=<em> collection</em>[<em>str</em>];
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code>str</code> is a {{domxref("DOMString")}}.</li>
</ul>

<h3 id="Return_value">Return value</h3>

<ul>
  <li><code>item</code> is a {{domxref("HTMLOptionElement")}}.</li>
</ul>

<h2 id="Example">Example</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;form&gt;
  &lt;select id="myFormControl"&gt;
    &lt;option id="o1"&gt;Opt 1&lt;/option&gt;
    &lt;option id="o2"&gt;Opt 2&lt;/option&gt;
  &lt;/select&gt;
&lt;/form&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">elem1 = document.forms[0]['myFormControl']['o1']; // Returns the HTMLOptionElement representing #o1
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("HTMLSelectElement")}} that implements it.</li>
</ul>
