---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
tags:
- Client error
- HTTP
- HTTP Status Code
- Reference
- Status code
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <code><strong>426 Upgrade Required</strong></code> client error response code
  indicates that the server refuses to perform the request using the current protocol but
  might be willing to do so after the client upgrades to a different protocol.</p>

<p>The server sends an {{HTTPHeader("Upgrade")}} header with this response to indicate the
  required protocol(s).</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">426 Upgrade Required</pre>

<h2 id="Examples">Examples</h2>

<pre>HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol</pre>

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
      <td>{{RFC("7231", "426 Upgrade Required" , "6.5.15")}}</td>
      <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Upgrade")}}</li>
  <li>{{HTTPStatus("101")}} <code>Switching Protocol</code></li>
</ul>
