---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
tags:
  - HTTP
  - HTTP Status Code
  - Reference
  - Status code
  - Successful response
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>203 Non-Authoritative Information</code></strong> response
  status indicates that the request was successful but the enclosed payload has been
  modified by a transforming {{Glossary("Proxy server", "proxy")}} from that of the origin
  server's {{HTTPStatus("200")}} (<code>OK</code>) response .</p>

<p>The <code>203</code> response is similar to the value
  <code><a href="/en-US/docs/Web/HTTP/Headers/Warning#warning_codes">214</a></code>,
  meaning <code>Transformation Applied</code>, of the {{HTTPHeader("Warning")}} header
  code, which has the additional advantage of being applicable to responses with any
  status code.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">203 Non-Authoritative Information</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}}</td>
      <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPStatus("200")}}</li>
  <li>{{Glossary("Proxy server")}}</li>
  <li>{{HTTPHeader("Warning")}}</li>
</ul>
