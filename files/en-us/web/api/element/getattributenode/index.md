---
title: Element.getAttributeNode()
slug: Web/API/Element/getAttributeNode
tags:
  - API
  - DOM
  - Element
  - Method
  - Reference
browser-compat: api.Element.getAttributeNode
---
<div>{{ APIRef("DOM") }}</div>

<p>Returns the specified attribute of the specified element, as an <code>Attr</code> node.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="eval"><em>var attrNode</em> = <em>element</em>.getAttributeNode(<em>attrName</em>);
</pre>

<ul>
 <li><code>attrNode</code> is an <code>Attr</code> node for the attribute.</li>
 <li><code>attrName</code> is a string containing the name of the attribute.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">// html: &lt;div id="top" /&gt;
let t = document.getElementById("top");
let idAttr = t.getAttributeNode("id");
alert(idAttr.value == "top")
</pre>

<h2 id="Notes">Notes</h2>

<p>When called on an HTML element in a DOM flagged as an HTML document, <code>getAttributeNode</code> lower-cases its argument before proceeding.</p>

<p>The <code>Attr</code> node inherits from <code>Node</code>, but is not considered a part of the document tree. Common <code>Node</code> attributes like <a href="/en-US/docs/Web/API/Node/parentNode">parentNode</a>, <a href="/en-US/docs/Web/API/Node/previousSibling">previousSibling</a>, and <a href="/en-US/docs/Web/API/Node/nextSibling">nextSibling</a> are <code>null</code> for an <code>Attr</code> node. You can, however, get the element to which the attribute belongs with the <code>ownerElement</code> property.</p>

<p><a href="/en-US/docs/Web/API/Element/getAttribute">getAttribute</a> is usually used instead of <code>getAttributeNode</code> to get the value of an element's attribute.</p>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
