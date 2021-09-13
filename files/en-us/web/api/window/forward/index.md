---
title: Window.forward()
slug: Web/API/Window/forward
tags:
  - API
  - Deprecated
  - Firefox
  - HTML DOM
  - Method
  - Non-standard
  - Deprecated
  - Window
  - forward
---
<div>{{APIRef}}{{Non-standard_header}} {{deprecated_header}}</div>

<p>Moves the window one document forward in history. This was a Firefox-specific method and was removed in Firefox 31.</p>

<div class="notecard note">
<p><strong>Note:</strong> Use the standard {{domxref("History.forward", "window.history.forward()")}} method instead.</p>
</div>

<h2 id="Syntax">Syntax</h2>

<pre class="eval">window.forward();
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None</p>

<h3 id="Return_value">Return value</h3>

<p><code>undefined</code>.</p>

<h2 id="Example">Example</h2>

<pre class="eval">function goForward() {
  if (canGoForward) {
    window.forward();
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

<p>This is not part of any specification.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>This non-standard method was only implemented in Firefox, and was removed in Firefox 31.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("History.back()")}}</li>
 <li>{{domxref("History.forward()")}}</li>
</ul>
