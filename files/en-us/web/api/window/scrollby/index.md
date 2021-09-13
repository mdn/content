---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
tags:
- API
- CSSOM View
- Method
- Reference
browser-compat: api.Window.scrollBy
---
<div>{{ APIRef() }}</div>

<p>The <code><strong>Window.scrollBy()</strong></code> method scrolls the document in the
  window by the given amount.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">window.scrollBy(<em>x-coord</em>, <em>y-coord</em>);
window.scrollBy(<em>options</em>)
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code>x-coord</code> is the horizontal pixel value that you want to scroll by.</li>
  <li><code>y-coord</code> is the vertical pixel value that you want to scroll by.</li>
</ul>

<p>- or -</p>

<ul>
  <li><code>options</code> is a {{domxref("ScrollToOptions")}} dictionary.</li>
</ul>

<h2 id="Examples">Examples</h2>

<p>To scroll down one page:</p>

<pre class="eval">window.scrollBy(0, window.innerHeight);
</pre>

<p>To scroll up:</p>

<pre>window.scrollBy(0, -window.innerHeight);</pre>

<p>Using <code>options</code>:</p>

<pre>window.scrollBy({
  top: 100,
  left: 100,
  behavior: 'smooth'
});</pre>

<h2 id="Notes">Notes</h2>

<p><code>window.scrollBy()</code> scrolls by a particular amount, whereas
  {{domxref("window.scroll()")}} scrolls to an absolute position in the document. See also
  {{domxref("window.scrollByLines()")}} and {{domxref("window.scrollByPages()")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
