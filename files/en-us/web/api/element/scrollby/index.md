---
title: Element.scrollBy()
slug: Web/API/Element/scrollBy
tags:
- API
- CSSOM View
- Element
- Method
- Reference
- scrollBy
browser-compat: api.Element.scrollBy
---
<p>{{APIRef}}</p>

<p>The <strong><code>scrollBy()</code></strong> method of the {{domxref("Element")}}
  interface scrolls an element by the given amount.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">element.scrollBy(<var>x-coord</var>, <var>y-coord</var>);
element.scrollBy(<var>options</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code><var>x-coord</var></code> is the horizontal pixel value that you want to
    scroll by.</li>
  <li><code><var>y-coord</var></code> is the vertical pixel value that you want to scroll
    by.</li>
</ul>

<p>- or -</p>

<ul>
  <li><code><var>options</var></code> is a {{domxref("ScrollToOptions")}} dictionary.</li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// scroll an element
element.scrollBy(300, 300);
</pre>

<p>Using <code>options</code>:</p>

<pre class="brush: js">element.scrollBy({
  top: 100,
  left: 100,
  behavior: 'smooth'
});</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
