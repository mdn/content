---
title: Element.previousElementSibling
slug: Web/API/Element/previousElementSibling
tags:
  - API
  - DOM
  - Element
  - Property
  - Read-only
  - Reference
browser-compat: api.Element.previousElementSibling
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.previousElementSibling</strong></code>
read-only property returns the {{domxref("Element")}} immediately prior to the specified
one in its parent's children list, or <code>null</code> if the specified element is the first one in the list.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Getter
element = el.previousElementSibling;

// No setter; read-only property
</pre>

<h2 id="Example">Example</h2>

<pre class="brush: html">&lt;div id="div-01"&gt;Here is div-01&lt;/div&gt;
&lt;div id="div-02"&gt;Here is div-02&lt;/div&gt;
&lt;li&gt;This is a list item&lt;/li&gt;
&lt;li&gt;This is another list item&lt;/li&gt;
&lt;div id="div-03"&gt;Here is div-03&lt;/div&gt;

&lt;script&gt;
  let el = document.getElementById('div-03').previousElementSibling;
  document.write('&lt;p&gt;Siblings of div-03&lt;/p&gt;&lt;ol&gt;');
  while (el) {
    document.write('&lt;li&gt;' + el.nodeName + '&lt;/li&gt;');
    el = el.previousElementSibling;
  }
  document.write('&lt;/ol&gt;');
&lt;/script&gt;
</pre>

<p>This example outputs the following into the page when it loads:</p>

<pre>Siblings of div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Element.nextElementSibling")}}</li>
</ul>
