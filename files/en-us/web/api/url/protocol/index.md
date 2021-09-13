---
title: URL.protocol
slug: Web/API/URL/protocol
tags:
- API
- Property
- Reference
- URL
- URL API
browser-compat: api.URL.protocol
---
<div>{{ApiRef("URL API")}}</div>

<p>The <strong><code>protocol</code></strong> property of the {{domxref("URL")}} interface
  is a {{domxref("USVString")}} representing the protocol scheme of the URL, including the
  final <code>':'</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">const <em>protocol</em> = <em>url</em>.protocol
<em>url</em>.protocol = <em>newProtocol</em>
</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("USVString")}}.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">const url = new URL('https://developer.mozilla.org/en-US/docs/Web/API/URL/protocol');
console.log(url.protocol); // Logs "https:"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("URL")}} interface it belongs to.</li>
</ul>
