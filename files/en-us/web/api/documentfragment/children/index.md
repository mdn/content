---
title: DocumentFragment.children
slug: Web/API/DocumentFragment/children
tags:
  - API
  - DOM
  - Element
  - HTMLCollection
  - Property
  - children
browser-compat: api.DocumentFragment.children
---
<div>{{ APIRef("DOM") }}</div>

<p>The read-only <code><strong>children</strong></code> property returns a live {{domxref("HTMLCollection")}}
which contains all of the child {{domxref("Element", "elements")}} of the document fragment upon which it was called.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Getter
collection = myFragment.children;

// No setter; read-only property
</pre>

<h3 id="Return_value">Return value</h3>

<p>An {{ domxref("HTMLCollection") }} which is a live, ordered collection of the DOM
  elements which are children of the document fragment. You can access the
  individual child nodes in the collection by using either the
  {{domxref("HTMLCollection.item()", "item()")}} method on the collection, or by using
  JavaScript array-style notation.</p>

<p>If the document fragment has no element children, then <code>children</code> is an empty list with a
  <code>length</code> of <code>0</code>.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">
let fragment = new DocumentFragment()
fragment.children; // HTMLCollection []

let paragraph = document.createElement('p')
fragment.appendChild(paragraph)

fragment.children; // HTMLCollection [&lt;p&gt;]
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>
    {{domxref("Node.childNodes")}}
  </li>
</ul>
