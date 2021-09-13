---
title: URLSearchParams.delete()
slug: Web/API/URLSearchParams/delete
tags:
- API
- Method
- URL API
- URLSearchParams
- delete
browser-compat: api.URLSearchParams.delete
---
<p>{{ApiRef("URL API")}}</p>

<p>The <strong><code>delete()</code></strong> method of the {{domxref("URLSearchParams")}}
  interface deletes the given search parameter and all its associated values, from the
  list of all search parameters.</p>

<p>{{availableinworkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">URLSearchParams.delete(<em>name</em>)</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt>name</dt>
  <dd>The name of the parameter to be deleted.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>Void</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">let url = new URL('https://example.com?foo=1&amp;bar=2&amp;foo=3');
let params = new URLSearchParams(url.search);

// Delete the foo parameter.
params.delete('foo'); //Query string is now: 'bar=2'</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
