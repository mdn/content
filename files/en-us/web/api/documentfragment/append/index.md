---
title: DocumentFragment.append()
slug: Web/API/DocumentFragment/append
tags:
  - API
  - DOM
  - Method
  - Node
  - DocumentFragment
  - Reference
browser-compat: api.DocumentFragment.append
---
<p>{{APIRef("DOM")}}</p>

<p>The <strong><code>DocumentFragment.append()</code></strong> method
  inserts a set of {{domxref("Node")}} objects or {{domxref("DOMString")}} objects after
  the last child of the document fragment. {{domxref("DOMString")}} objects
  are inserted as equivalent {{domxref("Text")}} nodes.</p>

<p>This method appends a child to a <code>DocumentFragment</code>. To append to an arbitrary element in the tree, see {{domxref("Element.append()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
append(...nodesOrDOMStrings)
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

<h3 id="Appending_an_element_to_a_document_fragment">Appending an element to a document fragment</h3>

<pre class="brush: js">
let fragment = new DocumentFragment();
let div = document.createElement("div");
fragment.append(div);

fragment.children; // HTMLCollection [&lt;div&gt;]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("DocumentFragment.prepend()")}}</li>
  <li>{{domxref("Element.append()")}}</li>
</ul>
