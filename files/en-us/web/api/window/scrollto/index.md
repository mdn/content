---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
tags:
- API
- CSSOM View
- Method
- NeedsMarkupWork
- Reference
browser-compat: api.Window.scrollTo
---
<p>{{APIRef}}</p>

<p><strong><code>Window.scrollTo()</code></strong> scrolls to a particular set of
  coordinates in the document.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">window.scrollTo(<var>x-coord</var>, <var>y-coord</var>)
window.scrollTo(<var>options</var>)
</pre>

<h3 id="Parameters">Parameters</h3>

<ul>
  <li><code><var>x-coord</var></code> is the pixel along the horizontal axis of the
    document that you want displayed in the upper left.</li>
  <li><code><var>y-coord</var></code> is the pixel along the vertical axis of the document
    that you want displayed in the upper left.</li>
</ul>

<p>- or -</p>

<ul>
  <li><code><var>options</var></code> is a {{domxref("ScrollToOptions")}} dictionary.</li>
</ul>

<h2 id="Examples">Examples</h2>

<pre class="brush:js">window.scrollTo(0, 1000);
</pre>

<p>Using <code><var>options</var></code>:</p>

<pre class="brush: js">window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});</pre>

<h2 id="Notes">Notes</h2>

<p>{{domxref("Window.scroll()")}} is effectively the same as this method. For relative
  scrolling, see {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}},
  and {{domxref("Window.scrollByPages()")}}.</p>

<p>For scrolling elements, see {{domxref("Element.scrollTop")}} and
  {{domxref("Element.scrollLeft")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
