---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
tags:
- Client error
- HTTP
- HTTP Status Code
- Reference
- Status code
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <code><strong>415 Unsupported Media Type</strong></code> client error response
  code indicates that the server refuses to accept the request because the payload format
  is in an unsupported format.</p>

<p>The format problem might be due to the request's indicated
  {{HTTPHeader("Content-Type")}} or {{HTTPHeader("Content-Encoding")}}, or as a result of
  inspecting the data directly.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">415 Unsupported Media Type</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Title</th>
    </tr>
    <tr>
      <td>{{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}}</td>
      <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
    </tr>
  </tbody>
</table>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Content-Type")}}</li>
  <li>{{HTTPHeader("Content-Encoding")}}</li>
  <li>{{HTTPHeader("Accept")}}</li>
</ul>
