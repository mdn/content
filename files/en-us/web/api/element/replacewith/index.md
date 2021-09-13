---
title: Element.replaceWith()
slug: Web/API/Element/replaceWith
tags:
  - API
  - DOM
  - Method
  - Element
  - Reference
browser-compat: api.Element.replaceWith
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.replaceWith()</strong></code> method replaces this
  <code>Element</code> in the children list of its parent with a set of
  {{domxref("Node")}} or {{domxref("DOMString")}} objects. {{domxref("DOMString")}}
  objects are inserted as equivalent {{domxref("Text")}} nodes.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">replaceWith(...nodes)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>nodes</code></dt>
  <dd>A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to replace.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
    in the hierarchy.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Using_replaceWith">Using <code>replaceWith()</code></h3>

<pre class="brush: js">const div = document.createElement("div");
const p = document.createElement("p");
div.appendChild(p);
const span = document.createElement("span");

p.replaceWith(span);

console.log(div.outerHTML);
// "&lt;div&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;"
</pre>

<h3 id="replaceWith_is_unscopable"><code>replaceWith()</code> is
  unscopable</h3>

<p>The <code>replaceWith()</code> method is not scoped into the <code>with</code>
  statement. See {{jsxref("Symbol.unscopables")}} for more information.</p>

<pre class="brush: js">with(node) {
  replaceWith("foo");
}
// ReferenceError: replaceWith is not defined </pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}

</p>
<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Node.replaceChild()")}}</li>
  <li>{{domxref("NodeList")}}</li>
</ul>
