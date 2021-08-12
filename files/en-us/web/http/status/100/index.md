---
title: 100 Continue
slug: Web/HTTP/Status/100
tags:
- HTTP
- Informational
- Status code
browser-compat: http.status.100
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>100 Continue</code></strong> informational status response code
  indicates that everything so far is OK and that the client should continue with the
  request or ignore it if it is already finished.</p>

<p>To have a server check the request's headers, a client must send
  {{HTTPHeader("Expect")}}<code>: 100-continue</code> as a header in its initial request
  and receive a <code>100 Continue</code> status code in response before sending the body.
</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">100 Continue</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Expect")}}</li>
  <li>{{HTTPStatus(417)}}</li>
</ul>
