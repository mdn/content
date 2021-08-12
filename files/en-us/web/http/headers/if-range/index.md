---
title: If-Range
slug: Web/HTTP/Headers/If-Range
tags:
- Condtional Requests
- HTTP
- HTTP Header
- Range Requests
- Reference
- Request header
browser-compat: http.headers.If-Range
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>If-Range</code></strong> HTTP request header makes a range request
  conditional: if the condition is fulfilled, the range request will be issued and the
  server sends back a {{HTTPStatus("206")}} <code>Partial Content</code> answer with the
  appropriate body. If the condition is not fulfilled, the full resource is sent back,
  with a {{HTTPStatus("200")}} <code>OK</code> status.</p>

<p>This header can be used either with a {{HTTPHeader("Last-Modified")}} validator, or
  with an {{HTTPHeader("ETag")}}, but not with both.</p>

<p>The most common use case is to resume a download, to guarantee that the stored resource
  has not been modified since the last fragment has been received.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">If-Range: &lt;day-name&gt;, &lt;day&gt; &lt;month&gt; &lt;year&gt; &lt;hour&gt;:&lt;minute&gt;:&lt;second&gt; GMT
If-Range: &lt;etag&gt;</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>&lt;etag&gt;</dt>
  <dd>An entity tag uniquely representing the requested resource. It is a string of ASCII
    characters placed between double quotes (Like <code>"675af34563dc-tr34"</code>) and
    may be prefixed by <code>W/</code> to indicate that the weak comparison algorithm
    should be used.</dd>
  <dt>&lt;day-name&gt;</dt>
  <dd>One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).</dd>
  <dt>&lt;day&gt;</dt>
  <dd>2 digit day number, e.g. "04" or "23".</dd>
  <dt>&lt;month&gt;</dt>
  <dd>One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov",
    "Dec" (case sensitive).</dd>
  <dt>&lt;year&gt;</dt>
  <dd>4 digit year number, e.g. "1990" or "2016".</dd>
  <dt>&lt;hour&gt;</dt>
  <dd>2 digit hour number, e.g. "09" or "23".</dd>
  <dt>&lt;minute&gt;</dt>
  <dd>2 digit minute number, e.g. "04" or "59".</dd>
  <dt>&lt;second&gt;</dt>
  <dd>2 digit second number, e.g. "04" or "59".</dd>
  <dt><code>GMT</code></dt>
  <dd>
    <p>Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.
    </p>
  </dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>If-Range: Wed, 21 Oct 2015 07:28:00 GMT
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("ETag")}}</li>
  <li>{{HTTPHeader("Last-Modified")}}</li>
  <li>{{HTTPHeader("If-Modified-Since")}}</li>
  <li>{{HTTPHeader("If-Unmodified-Since")}}</li>
  <li>{{HTTPHeader("If-Match")}}</li>
  <li>{{HTTPHeader("If-None-Match")}}</li>
  <li>{{HTTPStatus("206")}}<code> Partial Content</code></li>
  <li><a href="/en-US/docs/Web/HTTP/Conditional_requests">HTTP Conditional Requests</a>
  </li>
</ul>
