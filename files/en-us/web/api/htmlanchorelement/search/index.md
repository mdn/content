---
title: HTMLAnchorElement.search
slug: Web/API/HTMLAnchorElement/search
tags:
  - API
  - HTMLAnchorElement
  - Property
  - Reference
browser-compat: api.HTMLAnchorElement.search
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>The <strong><code>HTMLAnchorElement.search</code></strong> property is a search
  string, also called a <em>query string</em>, that is {{domxref("USVString")}} containing
  a <code>'?'</code> followed by the parameters of the URL.</p>

<p>Modern browsers provide
  <code><a href="/en-US/docs/Web/API/URLSearchParams/get#examples">URLSearchParams</a></code>
  and
  <code><a href="/en-US/docs/Web/API/URL/searchParams#examples">URL.searchParams</a></code>
  to make it easy to parse out the parameters from the querystring.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">
// Getter
<em>string</em> = <em>anchor</em>.search;
// Setter
<em>anchor</em>.search = <em>string</em>;
</pre>

<h2 id="Examples">Examples</h2>

<h3>Getting the search string from an anchor link</h3>

<pre class="brush: js">// An &lt;a id="myAnchor" href="/en-US/docs/HTMLAnchorElement?q=123"&gt; element is in the document
const anchor = document.getElementById("myAnchor");
anchor.search; // returns '?q=123'
</pre>

<h3>Advanced parsing using URLSearchParams</h3>
<p>Alternatively, <a href="/en-US/docs/Web/API/URLSearchParams/get#examples"><code>URLSearchParams</code></a> can be used:</p>
<pre class="brush: js">
let params = new URLSearchParams(queryString);
let q = parseInt(params.get("q"); // returns the number 123
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>The {{domxref("HTMLAnchorElement")}} interface it belongs to.</li>
</ul>
