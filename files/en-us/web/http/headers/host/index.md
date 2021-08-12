---
title: Host
slug: Web/HTTP/Headers/Host
tags:
- HTTP
- Reference
- header
browser-compat: http.headers.Host
---
<div>{{HTTPSidebar}}</div>

<p>The <code><strong>Host</strong></code> request header specifies the host and port
  number of the server to which the request is being sent.</p>

<p>If no port is included, the default port for the service requested (e.g.,
  <code>443</code> for an HTTPS URL, and <code>80</code> for an HTTP URL) is implied.</p>

<p>A <code>Host</code> header field must be sent in all HTTP/1.1 request messages. A
  {{HTTPStatus("400")}} (Bad Request) status code may be sent to any HTTP/1.1 request
  message that lacks a <code>Host</code> header field or that contains more than one.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Host: &lt;host&gt;:&lt;port&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>&lt;host&gt;</dt>
  <dd>the domain name of the server (for virtual hosting).</dd>
  <dt>&lt;port&gt; {{optional_inline}}</dt>
  <dd>TCP port number on which the server is listening.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>Host: developer.mozilla.org</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPStatus("400")}}</li>
  <li>{{HTMLElement("base")}}</li>
</ul>
