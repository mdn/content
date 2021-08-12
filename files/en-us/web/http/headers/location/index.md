---
title: Location
slug: Web/HTTP/Headers/Location
tags:
- HTTP
- HTTP Header
- Reference
- Response Header
browser-compat: http.headers.Location
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Location</code></strong> response header indicates the URL to
  redirect a page to. It only provides a meaning when served with a
  <code>3xx</code> (redirection) or <code>201</code> (created) status response.</p>

<p>In cases of redirection, the HTTP method used to make the new request to fetch the page
  pointed to by <code>Location</code> depends of the original method and of the kind of
  redirection:</p>

<ul>
  <li>If {{HTTPStatus("303")}} (See Also) responses always lead to the use of a
    {{HTTPMethod("GET")}} method, {{HTTPStatus("307")}} (Temporary Redirect) and
    {{HTTPStatus("308")}} (Permanent Redirect) don't change the method used in the
    original request;</li>
  <li>{{HTTPStatus("301")}} (Moved Permanently) and {{HTTPStatus("302")}} (Found) doesn't
    change the method most of the time, though older user-agents may (so you basically
    don't know).</li>
</ul>

<p>All responses with one of these status codes send a <code>Location</code> header.</p>

<p>In cases of resource creation, it indicates the URL to the newly created resource.</p>

<p><code>Location</code> and {{HTTPHeader("Content-Location")}} are different:
  <code>Location</code> indicates the target of a redirection (or the URL of a newly
  created resource), while {{HTTPHeader("Content-Location")}} indicates the direct URL to
  use to access the resource when <a
    href="/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a> happened,
  without the need of further content negotiation. <code>Location</code> is a header
  associated with the response, while {{HTTPHeader("Content-Location")}} is associated
  with the entity returned.</p>

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

<pre class="brush: html">Location: &lt;url&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>&lt;url&gt;</dt>
  <dd>A relative (to the request URL) or absolute URL.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>Location: /index.html</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Content-Location")}}</li>
  <li>Status of responses including a <code>Location</code> header: {{HTTPStatus("201")}},
    {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}},
    {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.</li>
</ul>
