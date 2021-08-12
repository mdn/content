---
title: Access-Control-Allow-Credentials
slug: Web/HTTP/Headers/Access-Control-Allow-Credentials
tags:
- Access-Control-Allow-Credentials
- CORS
- HTTP
- Reference
- credentials
- header
browser-compat: http.headers.Access-Control-Allow-Credentials
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Access-Control-Allow-Credentials</code></strong> response header
  tells browsers whether to expose the response to frontend JavaScript code when the
  request's credentials mode ({{domxref("Request.credentials")}}) is <code>include</code>.
</p>

<p>When a request's credentials mode ({{domxref("Request.credentials")}}) is
  <code>include</code>, browsers will only expose the response to frontend JavaScript code
  if the <code>Access-Control-Allow-Credentials</code> value is <code>true</code>.</p>

<p>Credentials are cookies, authorization headers or TLS client certificates.</p>

<p>When used as part of a response to a preflight request, this indicates whether or not
  the actual request can be made using credentials. Note that simple {{HTTPMethod("GET")}}
  requests are not preflighted, and so if a request is made for a resource with
  credentials, if this header is not returned with the resource, the response is ignored
  by the browser and not returned to web content.</p>

<p>The <code>Access-Control-Allow-Credentials</code> header works in conjunction with the
  {{domxref("XMLHttpRequest.withCredentials")}} property or with the
  <code>credentials</code> option in the {{domxref("Request.Request()", "Request()")}}
  constructor of the Fetch API. For a CORS request with credentials, in order for browsers
  to expose the response to frontend JavaScript code, both the server (using the
  <code>Access-Control-Allow-Credentials</code> header) and the client (by setting the
  credentials mode for the XHR, Fetch, or Ajax request) must indicate that they’re opting
  in to including credentials.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Access-Control-Allow-Credentials: true
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>true</dt>
  <dd>The only valid value for this header is <code>true</code> (case-sensitive). If you
    don't need credentials, omit this header entirely (rather than setting its value to
    <code>false</code>).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>Allow credentials:</p>

<pre>Access-Control-Allow-Credentials: true</pre>

<p>Using <a href="/en-US/docs/Web/API/XMLHttpRequest">XHR</a> with credentials:</p>

<pre class="brush: js">var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);</pre>

<p>Using <a href="/en-US/docs/Web/API/Fetch_API">Fetch</a> with credentials:</p>

<pre class="brush: js">fetch(url, {
  credentials: 'include'
})</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("XMLHttpRequest.withCredentials")}}</li>
  <li>{{domxref("Request.Request()", "Request()")}}</li>
</ul>
