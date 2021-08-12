---
title: 403 Forbidden
slug: Web/HTTP/Status/403
tags:
  - Client error
  - HTTP
  - Reference
  - Status code
browser-compat: http.status.403
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>403 Forbidden</code></strong> client error status response code indicates that the server understood the request but refuses to authorize it.</p>

<p>This status is similar to {{HTTPStatus("401")}}, but in this case, re-authenticating will make no difference. The access is permanently forbidden and tied to the application logic, such as insufficient rights to a resource.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">403 Forbidden</pre>

<h2 id="Example_response">Example response</h2>

<pre>HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPStatus("401")}}</li>
 <li><a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html" rel="noopener">HTTP/1.1: Status Code Definitions</a></li>
</ul>
