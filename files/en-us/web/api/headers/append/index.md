---
title: Headers.append()
slug: Web/API/Headers/append
tags:
  - API
  - Append
  - Experimental
  - Fetch
  - Method
  - Reference
browser-compat: api.Headers.append
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>append()</code></strong> method of the {{domxref("Headers")}}
  interface appends a new value onto an existing header inside a <code>Headers</code>
  object, or adds the header if it does not already exist.</p>

<p>The difference between {{domxref("Headers.set", "set()")}} and <code>append()</code> is
  that if the specified header already exists and accepts multiple values,
  <code>set()</code> will overwrite the existing value with the new one, whereas
  <code>append()</code> will append the new value onto the end of the set of values.</p>

<p>For security reasons, some headers can only be controlled by the user agent. These
  headers include the {{Glossary("Forbidden_header_name", "forbidden header names", 1)}}
  and {{Glossary("Forbidden_response_header_name", "forbidden response header names",
  1)}}.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js"><em>myHeaders</em>.append(<em>name</em>, <em>value</em>);</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><code>name</code></dt>
  <dd>The name of the HTTP header you want to add to the <code>Headers</code> object.</dd>
  <dt><code>value</code></dt>
  <dd>The value of the HTTP header you want to add.</dd>
</dl>

<h3 id="Returns">Returns</h3>

<p>Void.</p>

<h2 id="Example">Example</h2>

<p>Creating an empty <code>Headers</code> object is simple:</p>

<pre class="brush: js">var myHeaders = new Headers(); // Currently empty</pre>

<p>You could add a header to this using <code>append()</code>:</p>

<pre class="brush: js">myHeaders.append('Content-Type', 'image/jpeg');
myHeaders.get('Content-Type'); // Returns 'image/jpeg'
</pre>

<p>If the specified header already exists, <code>append()</code> will change its value to
  the specified value. If the specified header already exists and accepts multiple values,
  <code>append()</code> will append the new value to the end of the value set:</p>

<pre class="brush: js">myHeaders.append('Accept-Encoding', 'deflate');
myHeaders.append('Accept-Encoding', 'gzip');
myHeaders.get('Accept-Encoding'); // Returns 'deflate, gzip'</pre>

<p>To overwrite the old value with a new one, use {{domxref("Headers.set")}}.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">HTTP access control (CORS)</a>
  </li>
  <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
