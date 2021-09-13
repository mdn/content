---
title: window.cancelAnimationFrame()
slug: Web/API/Window/cancelAnimationFrame
tags:
- API
- Animation
- DOM
- Experimental
- Method
- Reference
- Window
- Polyfill
browser-compat: api.Window.cancelAnimationFrame
---
<div>{{APIRef}}</div>

<p>The <code><strong>window.cancelAnimationFrame()</strong></code> method cancels an
  animation frame request previously scheduled through a call to
  {{domxref("window.requestAnimationFrame()")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">window.cancelAnimationFrame(<em>requestID</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>requestID</code></dt>
  <dd>The ID value returned by the call to {{domxref("window.requestAnimationFrame()")}}
    that requested the callback.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

var start = window.mozAnimationStartTime;  // Only supported in FF. Other browsers can use something like Date.now().

var myReq;

function step(timestamp) {
  var progress = timestamp - start;
  d.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress &lt; 2000) {
    // it's important to update the requestId each time you're calling requestAnimationFrame
    myReq = requestAnimationFrame(step);
  }
}
myReq = requestAnimationFrame(step);
// the cancelation uses the last requestId
cancelAnimationFrame(myReq);
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("window.mozAnimationStartTime")}}</li>
  <li>{{domxref("window.requestAnimationFrame()")}}</li>
  <li><a href="https://github.com/behnammodi/polyfill/blob/master/window.polyfill.js">A polyfill</a></li>
</ul>
