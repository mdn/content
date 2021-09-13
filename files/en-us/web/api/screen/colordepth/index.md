---
title: Screen.colorDepth
slug: Web/API/Screen/colorDepth
tags:
- API
- CSSOM View
- Property
- Reference
browser-compat: api.Screen.colorDepth
---
<p>{{APIRef("CSSOM")}}</p>

<p>The <strong><code>Screen.colorDepth</code></strong> read-only property returns the
  color depth of the screen. Per the CSSOM, some implementations return <code>24</code>
  for compatibility reasons. See the browser compatibility section for those that don't.
</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><var>bitDepth</var> = window.screen.colorDepth;</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js;">// Check the color depth of the screen
if ( window.screen.colorDepth &lt; 8) {
  // Use low-color version of page
} else {
  // Use regular, colorful page
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{DOMxRef("Screen.pixelDepth")}}</li>
</ul>
