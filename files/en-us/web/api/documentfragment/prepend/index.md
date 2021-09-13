---
title: DocumentFragment.prepend()
slug: Web/API/DocumentFragment/prepend
tags:
  - API
  - DOM
  - Method
  - Node
  - DocumentFragment
  - Reference
browser-compat: api.DocumentFragment.prepend
---
<p>{{APIRef("DOM")}}</p>

<p>The <strong><code>DocumentFragment.prepend()</code></strong> method
  inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects before
  the first child of the document fragment. {{domxref("DOMString")}} objects
  are inserted as equivalent {{domxref("Text")}} nodes.</p>

<p>This method prepends a child to a <code>DocumentFragment</code>. To prepend to an arbitrary element in the tree, see {{domxref("Element.prepend()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
prepend(...nodesOrDOMStrings)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>nodesOrDOMStrings</code></dt>
  <dd>A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
    in the hierarchy.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Prepending_an_element_to_a_document_fragment">Prepending an element to a document fragment</h3>

<pre class="brush: js">
let fragment = new DocumentFragment();
let div = document.createElement("div");
let p = document.createElement("p");
fragment.append(p);
fragment.prepend(div);

fragment.children; // HTMLCollection [&lt;div&gt;, &lt;p&gt;]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("DocumentFragment.append()")}}</li>
  <li>{{domxref("Element.prepend()")}}</li>
</ul>
