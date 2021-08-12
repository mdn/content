---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
tags:
  - Content-Length
  - HTTP
  - HTTP header
  - Request header
  - Response header
  - Reference
  - Payload header
browser-compat: http.headers.Content-Length
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Content-Length</code></strong> header indicates the size of the message body, in bytes, sent to the recipient.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}, {{Glossary("Response header")}}, {{Glossary("Payload header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("CORS-safelisted response header")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Content-Length: &lt;length&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
  <dt>&lt;length&gt;</dt>
  <dd>The length in decimal number of octets.</dd>
</dl>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Transfer-Encoding")}}</li>
</ul>
