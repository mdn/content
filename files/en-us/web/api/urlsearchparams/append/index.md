---
title: URLSearchParams.append()
slug: Web/API/URLSearchParams/append
tags:
- API
- Append
- Method
- URL API
- URLSearchParams
browser-compat: api.URLSearchParams.append
---
<p>{{ApiRef("URL API")}}</p>

<p>The <strong><code>append()</code></strong> method of the {{domxref("URLSearchParams")}}
  interface appends a specified key/value pair as a new search parameter.</p>

<p>As shown in the example below, if the same key is appended multiple times it will
  appear in the parameter string multiple times for each value.</p>

<p>{{availableinworkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">URLSearchParams.append(<em>name</em>, <em>value</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>name</dt>
  <dd>The name of the parameter to append.</dd>
  <dt>value </dt>
  <dd>The value of the parameter to append.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Void.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let url = new URL('https://example.com?foo=1&amp;bar=2');
let params = new URLSearchParams(url.search.slice(1));

//Add a second foo parameter.
params.append('foo', 4);
//Query string is now: 'foo=1&amp;bar=2&amp;foo=4'</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>Other URL-related interfaces: {{domxref("URL")}},
    {{domxref("HTMLHyperlinkElementUtils")}}.</li>
  <li><a
      href="https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en">Google
      Developers: Easy URL manipulation with URLSearchParams</a></li>
</ul>
