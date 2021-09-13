---
title: XMLHttpRequestEventTarget.onload
slug: Web/API/XMLHttpRequestEventTarget/onload
tags:
- API
- Event Handler
- Property
- Reference
- Web
- XMLHttpRequestEventTarget
browser-compat: api.XMLHttpRequestEventTarget.onload
---
<div>{{APIRef("XMLHttpRequest")}}</div>

<p>The <strong><code>XMLHttpRequestEventTarget.onload</code></strong> is the function
	called when an {{domxref("XMLHttpRequest")}} transaction completes successfully.</p>

<h2 id="Syntax">Syntax</h2>

<pre
	class="brush: js"><em>XMLHttpRequest</em>.onload = <em>callback</em>;</pre>

<h3 id="Values">Values</h3>

<ul>
	<li><code><em>callback</em></code> is the function to be executed when the request
		completes successfully. It receives a {{domxref("ProgressEvent")}} object as its
		first argument. The value of <em>this</em> (i.e. the context) is the
		same {{domxref("XMLHttpRequest")}} this callback is related to.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(<em>method</em>, <em>url</em>, true);
xmlhttp.onload = function () {
  // Do something with the retrieved data ( found in xmlhttp.response )
};
xmlhttp.send();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
