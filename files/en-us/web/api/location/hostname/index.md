---
title: 'Location: hostname'
slug: Web/API/Location/hostname
tags:
- API
- Location
- Property
- Reference
browser-compat: api.Location.hostname
---
<p>{{ApiRef("URL API")}}</p>

<p>The <strong><code>hostname</code></strong> property of the {{domxref("Location")}}
  interface is a {{domxref("USVString")}} containing the domain of the URL.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>string</em> = <em>object</em>.hostname;
<em>object.</em>hostname = <em>string</em>;
</pre>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">// Let's an &lt;a id="myAnchor" href="/en-US/docs/Location.hostname"&gt; element be in the document
var anchor = document.getElementById("myAnchor");
var result = anchor.hostname; // Returns:'developer.mozilla.org'</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
