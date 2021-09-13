---
title: XMLHttpRequestEventTarget.onloadstart
slug: Web/API/XMLHttpRequestEventTarget/onloadstart
tags:
- API
- Event Handler
- Property
- Reference
- Web
- XMLHttpRequestEventTarget
browser-compat: api.XMLHttpRequestEventTarget.onloadstart
---
<div>{{APIRef("XMLHttpRequest")}}</div>

<p>The <strong><code>XMLHttpRequestEventTarget.onloadstart</code></strong> is the function
  called when an {{domxref("XMLHttpRequest")}} transaction starts transferring data.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>XMLHttpRequest</em>.onloadstart = <em>callback</em>;</pre>

<h3 id="Values">Values</h3>

<ul>
  <li><code><em>callback</em></code> is the function to be called when the transaction
    begins to transfer data.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(<em>method</em>, <em>url</em>, true);
xmlhttp.onloadstart = function () {
  console.log("Download underway");
};
xmlhttp.send();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
