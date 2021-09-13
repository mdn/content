---
title: Window.scrollMaxY
slug: Web/API/Window/scrollMaxY
tags:
- API
- DOM_0
- HTML DOM
- NeedsExample
- NeedsMarkupWork
- NeedsSpecTable
- Non-standard
- Property
- Reference
- Window
browser-compat: api.Window.scrollMaxY
---
<div>{{APIRef}} {{Non-standard_header}}</div>

<p>The <code><strong>Window.scrollMaxY</strong></code> read-only property returns the
  maximum number of pixels that the document can be scrolled vertically.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>yMax</em> = window.scrollMaxY
</pre>

<ul>
  <li><code>yMax</code> is the number of pixels.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush:js">// Scroll to the bottom of the page
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
</pre>

<h2 id="Notes">Notes</h2>

<p>Do not use this property to get the total document height, which is not equivalent to
  {{domxref("window.innerHeight")}} + window.scrollMaxY, because
  {{domxref("window.innerHeight")}} includes the width of any visible horizontal
  scrollbar, thus the result would exceed the total document height by the width of any
  visible horizontal scrollbar. Instead use
  {{domxref("element.scrollHeight","document.body.scrollHeight")}}. See also
  {{domxref("window.scrollMaxX")}} and {{domxref("window.scrollTo")}}.</p>

<h2 id="Specifications">Specifications</h2>

<p>This is not part of any specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
