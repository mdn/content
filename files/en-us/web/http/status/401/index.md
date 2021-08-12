---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
tags:
- Client error
- HTTP
- Reference
- Status code
browser-compat: http.status.401
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>401 Unauthorized</code></strong> client error status response
  code indicates that the request has not been applied because it lacks valid
  authentication credentials for the target resource.</p>

<p>This status is sent with a {{HTTPHeader("WWW-Authenticate")}} header that contains
  information on how to authorize correctly.</p>

<p>This status is similar to {{HTTPStatus("403")}}, but in this case, authentication is
  possible.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">401 Unauthorized</pre>

<h2 id="Example_response">Example response</h2>

<pre>HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"</pre>

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
  <li>{{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
