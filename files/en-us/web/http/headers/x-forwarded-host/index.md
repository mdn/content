---
title: X-Forwarded-Host
slug: Web/HTTP/Headers/X-Forwarded-Host
tags:
- HTTP
- HTTP Header
- Non-standard
- Reference
- Request header
- header
browser-compat: http.headers.X-Forwarded-Host
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>X-Forwarded-Host</code></strong> (XFH) header is a de-facto standard
  header for identifying the original host requested by the client in the
  {{HTTPHeader("Host")}} HTTP request header.</p>

<p>Host names and ports of reverse proxies (load balancers, CDNs) may differ from the
  origin server handling the request, in that case the <code>X-Forwarded-Host</code>
  header is useful to determine which Host was originally used.</p>

<p>This header is used for debugging, statistics, and generating location-dependent
  content and by design it exposes privacy sensitive information, such as the IP address
  of the client. Therefore the user's privacy must be kept in mind when deploying this
  header.</p>

<p>A standardized version of this header is the HTTP {{HTTPHeader("Forwarded")}} header.
</p>

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

<pre class="brush: html">X-Forwarded-Host: &lt;host&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>&lt;host&gt;</dt>
  <dd>The domain name of the forwarded server.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>X-Forwarded-Host: id42.example-cdn.com
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any current specification. The standardized version of this header is
  {{HTTPHeader("Forwarded")}}.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Host")}}</li>
  <li>{{HTTPHeader("Forwarded")}}</li>
  <li>{{HTTPHeader("X-Forwarded-For")}}</li>
  <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
</ul>
