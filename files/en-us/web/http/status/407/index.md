---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
tags:
- Client error
- HTTP
- Reference
- Status code
browser-compat: http.status.407
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>407 Proxy Authentication Required </code></strong> client error
  status response code indicates that the request has not been applied because it lacks
  valid authentication credentials for a {{Glossary("proxy server")}} that is between the
  browser and the server that can access the requested resource.</p>

<p>This status is sent with a {{HTTPHeader("Proxy-Authenticate")}} header that contains
  information on how to authorize correctly.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">407 Proxy Authentication Required </pre>

<h2 id="Example_response">Example response</h2>

<pre>HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/HTTP/Authentication">HTTP authentication</a></li>
  <li>{{HTTPHeader("WWW-Authenticate")}}</li>
  <li>{{HTTPHeader("Authorization")}}</li>
  <li>{{HTTPHeader("Proxy-Authorization")}}</li>
  <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
  <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}</li>
</ul>
