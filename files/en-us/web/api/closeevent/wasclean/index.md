---
title: CloseEvent.wasClean
slug: Web/API/CloseEvent/wasClean
tags:
  - API
  - Property
  - Reference
  - closeEvent
browser-compat: api.CloseEvent.wasClean
---
<div>{{APIRef("Websockets API")}}</div>

<p class="summary">The <strong><code>wasClean</code></strong> read-only property of the {{domxref("CloseEvent")}} interface returns <code>true</code> if the connection closed cleanly.</p>

<h3>Value</h3>

<p>A {{jsxref("Boolean")}}. True if the connection closed cleanly, false otherwise.</p>

<h2 id="Examples">Examples</h2>

<p>The following example prints the value of <code>wasClean</code> to the console.</p>

<pre class="brush: js">WebSocket.onclose = function(event) {
  console.log(event.wasClean);
};</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>


