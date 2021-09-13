---
title: Element.hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.hasAttributeNS
---
<div>{{ APIRef("DOM") }}</div>

<p><code>hasAttributeNS</code> returns a boolean value indicating whether the current element has the specified attribute.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="eval"><em>result</em> = <em>element</em>.hasAttributeNS(<em>namespace</em>,<em>localName</em>)
</pre>

<ul>
 <li><code>result</code> is the boolean value <code>true</code> or <code>false</code>.</li>
 <li><code>namespace</code> is a string specifying the namespace of the attribute.</li>
 <li><code>localName</code> is the name of the attribute.</li>
</ul>

<h2 id="Example">Example</h2>

<pre>// Check that the attribute exists before you set a value
var d = document.getElementById("div1");
if (d.hasAttributeNS(
       "http://www.mozilla.org/ns/specialspace/",
       "special-align")) {
  d.setAttribute("align", "center");
}
</pre>

<h2 id="Notes">Notes</h2>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
