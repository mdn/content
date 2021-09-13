---
title: Element.removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
tags:
- API
- DOM
- Element
- Method
- NeedsSpecTable
- Reference
browser-compat: api.Element.removeAttributeNode
---
<div>{{ APIRef("DOM") }}</div>

<p>The <strong><code>removeAttributeNode()</code></strong> method of the
  {{domxref("Element")}} object removes the specified attribute from the current element.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>removedAttr</em> = <em>element</em>.removeAttributeNode(<em>attributeNode</em>)
</pre>

<ul>
  <li><var>attributeNode</var> is the <code>Attr</code> node that needs to be removed.
  </li>
  <li><var>removedAttr</var> is the removed <code>Attr</code> node.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">// Given: &lt;div id="top" align="center" /&gt;
var d = document.getElementById("top");
var d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align is now removed: &lt;div id="top" /&gt;
</pre>

<h2 id="Notes">Notes</h2>

<p>If the removed attribute has a default value, it is immediately replaced. The replacing
  attribute has the same namespace URI and local name, as well as the original prefix,
  when applicable.</p>

<p>There is no <code>removeAttributeNodeNS</code> method; the
  <code>removeAttributeNode</code> method can remove both namespaced attributes and
  non-namespaced attributes.</p>

<p>{{ DOMAttributeMethods() }}</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
