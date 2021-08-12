---
title: X-Forwarded-Proto
slug: Web/HTTP/Headers/X-Forwarded-Proto
tags:
- HTTP
- HTTP Header
- Non-standard
- Reference
- Request header
- header
browser-compat: http.headers.X-Forwarded-Proto
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>X-Forwarded-Proto</code></strong> (XFP) header is a de-facto standard
  header for identifying the protocol (HTTP or HTTPS) that a client used to connect to
  your proxy or load balancer. Your server access logs contain the protocol used between
  the server and the load balancer, but not the protocol used between the client and the
  load balancer. To determine the protocol used between the client and the load balancer,
  the <code>X-Forwarded-Proto</code> request header can be used.</p>

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

<pre class="brush: html">X-Forwarded-Proto: &lt;protocol&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>&lt;protocol&gt;</dt>
  <dd>The forwarded protocol (http or https).</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>X-Forwarded-Proto: https</pre>

<p>Other non-standard forms:</p>

<pre># Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
</pre>

<h2 id="Specifications">Specifications</h2>

<p>Not part of any current specification. The standardized version of this header is
  {{HTTPHeader("Forwarded")}}.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Forwarded")}}</li>
  <li>{{HTTPHeader("X-Forwarded-For")}}</li>
  <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
</ul>
