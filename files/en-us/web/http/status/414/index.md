---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
tags:
- Client error
- HTTP
- Reference
- Status code
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <code><strong>414 URI Too Long</strong></code> response status code indicates
  that the URI requested by the client is longer than the server is willing to interpret.
</p>

<p>There are a few rare conditions when this might occur:</p>

<ul>
  <li>when a client has improperly converted a {{HTTPMethod("POST")}} request to a
    {{HTTPMethod("GET")}} request with long query information,</li>
  <li>when the client has descended into a loop of redirection (for example, a redirected
    URI prefix that points to a suffix of itself),</li>
  <li>or when the server is under attack by a client attempting to exploit potential
    security holes.</li>
</ul>

<h2 id="Status">Status</h2>

<pre class="brush: html">414 URI Too Long</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Title</th>
    </tr>
    <tr>
      <td>{{RFC("7231", "414 URI Too Long" , "6.5.12")}}</td>
      <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{Glossary("URI")}}</li>
</ul>
