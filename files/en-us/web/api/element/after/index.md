---
title: Element.after()
slug: Web/API/Element/after
tags:
  - API
  - DOM
  - Method
  - Node
  - Reference
browser-compat: api.Element.after
---
<div>{{APIRef("DOM")}}</div>

<p>The <code><strong>Element.after()</strong></code> method inserts a set of
  {{domxref("Node")}} or {{domxref("DOMString")}} objects in the children list of the
  <code>Element</code>'s parent, just after the <code>Element</code>.
  {{domxref("DOMString")}} objects are inserted as equivalent {{domxref("Text")}} nodes.
</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
after(... nodes)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>nodes</code></dt>
  <dd>A set of {{domxref("Node")}} or {{domxref("DOMString")}} objects to insert.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<ul>
  <li>{{domxref("HierarchyRequestError")}}: Node cannot be inserted at the specified point
    in the hierarchy.</li>
</ul>

<h2 id="Examples">Examples</h2>

<h3 id="Inserting_an_element">Inserting an element</h3>

<pre class="brush: js">let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span);

console.log(container.outerHTML);
// "&lt;div&gt;&lt;p&gt;&lt;/p&gt;&lt;span&gt;&lt;/span&gt;&lt;/div&gt;"
</pre>

<h3 id="Inserting_text">Inserting text</h3>

<pre class="brush: js">let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);

p.after("Text");

console.log(container.outerHTML);
// "&lt;div&gt;&lt;p&gt;&lt;/p&gt;Text&lt;/div&gt;"</pre>

<h3 id="Inserting_an_element_and_text">Inserting an element and text</h3>

<pre class="brush: js">let container = document.createElement("div");
let p = document.createElement("p");
container.appendChild(p);
let span = document.createElement("span");

p.after(span, "Text");

console.log(container.outerHTML);
// "&lt;div&gt;&lt;p&gt;&lt;/p&gt;&lt;span&gt;&lt;/span&gt;Text&lt;/div&gt;"</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Element.before()")}}</li>
  <li>{{domxref("Element.append()")}}</li>
  <li>{{domxref("Node.appendChild()")}}</li>
  <li>{{domxref("Element.insertAdjacentElement()")}}</li>
  <li>{{domxref("NodeList")}}</li>
</ul>
