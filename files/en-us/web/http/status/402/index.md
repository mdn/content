---
title: 402 Payment Required
slug: Web/HTTP/Status/402
tags:
  - Browser
  - Client error
  - HTTP
  - Status code
browser-compat: http.status.402
---
<p>{{HTTPSidebar}}{{SeeCompatTable}}</p>

<p>The HTTP <strong><code>402 Payment Required</code></strong> is a nonstandard client error status response code that is reserved for future use.</p>

<p>Sometimes, this code indicates that the request can not be processed until the client makes a payment. Originally it was created to enable digital cash or (micro) payment systems and would indicate that the requested content is not available until the client makes a payment. However, no standard use convention exists and different entities use it in different contexts.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">402 Payment Required</pre>

<h2 id="Example_response">Example response</h2>

<pre class="brush: bash">HTTP/1.1 402 Payment Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
</pre>

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
   <td>{{RFC("7231", "402 Payment Required" , "6.5.2")}}</td>
   <td>HTTP/1.1: Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Authentication">HTTP authentication</a></li>
</ul>
