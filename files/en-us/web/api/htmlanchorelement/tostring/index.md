---
title: HTMLAnchorElement.toString()
slug: Web/API/HTMLAnchorElement/toString
tags:
  - API
  - HTMLAnchorElement
  - Method
  - Stringifier
browser-compat: api.HTMLAnchorElement.toString
---
<p>{{ApiRef("URL API")}}</p>

<p>The <strong><code>HTMLAnchorElement.toString()</code></strong> stringifier
  method returns a {{domxref("USVString")}} containing the whole URL. It is a read-only
  version of {{domxref("HTMLAnchorElement.href")}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>anchor</em>.toString();</pre>

<h2 id="Examples">Examples</h2>

<h3>Calling toString on an anchor element</h3>

<pre class="brush: js">// An &lt;a id="myAnchor" href="/en-US/docs/HTMLAnchorElement"&gt; element is in the document
const anchor = document.getElementById("myAnchor");
anchor.toString(); // returns 'https://developer.mozilla.org/en-US/docs/HTMLAnchorElement'
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("HTMLAnchorElement")}} interface it belongs to.</li>
</ul>
