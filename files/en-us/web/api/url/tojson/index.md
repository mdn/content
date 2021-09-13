---
title: URL.toJSON()
slug: Web/API/URL/toJSON
tags:
- API
- Method
- Reference
- URL
- URL API
- Polyfill
browser-compat: api.URL.toJSON
---
<div>{{APIRef("URL API")}}</div>

<p>The <strong><code>toJSON()</code></strong> method of the {{domxref("URL")}} interface
	returns a {{domxref("USVString")}} containing a serialized version of the URL,
	although in practice it seems to have the same effect as
	{{domxref("URL.toString()")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre
	class="brush: js">const <em>href</em> = <em>url</em>.toJSON()</pre>

<h3 id="Return_value">Return value</h3>

<p>A {{domxref("USVString")}}.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const url = new URL("https://developer.mozilla.org/en-US/docs/Web/API/URL/toString");
url.toJSON(); // should return the URL as a string</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>A polyfill of <code>URL.prototype.toJSON</code> is available in <a href="https://github.com/zloirock/core-js#url-and-urlsearchparams"><code>core-js</code></a></li>
</ul>
