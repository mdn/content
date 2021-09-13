---
title: Window.scrollByLines()
slug: Web/API/Window/scrollByLines
tags:
- API
- HTML DOM
- Method
- Non-standard
- Reference
- Window
browser-compat: api.Window.scrollByLines
---
<div>{{ ApiRef() }} {{Non-standard_header}}</div>

<p>The <code><strong>Window.scrollByLines()</strong></code> method scrolls the document by
  the specified number of lines.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">window.scrollByLines(<em>lines</em>)
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code>lines</code> is the number of lines to scroll the document by. It may be a
    positive or negative integer.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush:html">&lt;!-- Scroll up the document by 5 lines --&gt;
&lt;button id="scroll-up" onclick="scrollByLines(-5);"&gt;Up 5 lines&lt;/button&gt;

&lt;!-- Scroll down the document by 5 lines --&gt;
&lt;button id="scroll-down" onclick="scrollByLines(5);"&gt;Down 5 lines&lt;/button&gt;
</pre>

<h2 id="Specifications">Specifications</h2>

<p>This is not part of any specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("window.scroll()")}}</li>
  <li>{{domxref("window.scrollBy()")}}</li>
  <li>{{domxref("window.scrollByPages()")}}</li>
  <li>{{domxref("window.scrollTo()")}}</li>
</ul>
