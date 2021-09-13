---
title: Element.lastElementChild
slug: Web/API/Element/lastElementChild
tags:
  - API
  - DOM
  - Element
  - Property
browser-compat: api.Element.lastElementChild
---
<p>{{ APIRef("DOM") }}</p>

<p>The <strong><code>Element.lastElementChild</code></strong> read-only property
returns an element's last child {{domxref("Element")}}, or <code>null</code> if there
are no child elements.</p>

<p><code>Element.lastElementChild</code> includes only element nodes.
To get all child nodes, including non-element nodes like text and comment nodes, use {{domxref("Node.lastChild")}}.</p>


<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Getter
element = el.lastElementChild;

// No setter; read-only property
</pre>
<h2 id="Example">Example</h2>

<pre class="brush: html">&lt;ul id="list"&gt;
  &lt;li&gt;First  (1)&lt;/li&gt;
  &lt;li&gt;Second (2)&lt;/li&gt;
  &lt;li&gt;Third  (3)&lt;/li&gt;
&lt;/ul&gt;

&lt;script&gt;
const list = document.getElementById('list');
console.log(list.lastElementChild.textContent);
// logs "Third (3)"
&lt;/script&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
    <li>{{domxref("Element.previousElementSibling")}}</li>
    <li>{{domxref("Element.firstElementChild")}}</li>
</ul>
