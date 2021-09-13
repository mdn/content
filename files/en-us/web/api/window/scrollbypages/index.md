---
title: Window.scrollByPages()
slug: Web/API/Window/scrollByPages
tags:
- API
- HTML DOM
- Method
- Non-standard
- Reference
- Window
- scrollByPages
- scrolling
browser-compat: api.Window.scrollByPages
---
<div>{{ ApiRef() }} {{Non-standard_header}}</div>

<p>The <code><strong>Window.scrollByPages()</strong></code> method scrolls the current
  document by the specified number of pages.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">window.scrollByPages(<em>pages</em>)
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code>pages</code> is the number of pages to scroll. It may be a positive or
    negative integer.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">// scroll down the document by 1 page
window.scrollByPages(1);

// scroll up the document by 1 page
window.scrollByPages(-1);
</pre>

<h2 id="Specifications">Specifications</h2>

<p>DOM Level 0. Not part of specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("window.scroll()")}}</li>
  <li>{{domxref("window.scrollBy()")}}</li>
  <li>{{domxref("window.scrollByLines()")}}</li>
  <li>{{domxref("window.scrollTo()")}}</li>
</ul>
