---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
tags:
- HTTP
- Reference
- Status code
browser-compat: http.status.406
---
<div>{{HTTPSidebar}}</div>

<p>The HyperText Transfer Protocol (HTTP) <code><strong>406 Not Acceptable</strong></code>
  client error response code indicates that the server cannot produce a response matching
  the list of acceptable values defined in the request's proactive <a
    href="/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a> headers, and
  that the server is unwilling to supply a default representation.</p>

<p>Proactive content negotiation headers include:</p>

<ul>
  <li>{{HTTPHeader("Accept")}}</li>
  <li>{{HTTPHeader("Accept-Encoding")}}</li>
  <li>{{HTTPHeader("Accept-Language")}}</li>
</ul>

<p>In practice, this error is very rarely used. Instead of responding using this error
  code, which would be cryptic for the end user and difficult to fix, servers ignore the
  relevant header and serve an actual page to the user. It is assumed that even if the
  user won't be completely happy, they will prefer this to an error code.</p>

<p>If a server returns such an error status, the body of the message should contain the
  list of the available representations of the resources, allowing the user to choose
  among them.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">406 Not Acceptable</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Accept")}}</li>
  <li>{{HTTPHeader("Accept-Encoding")}}</li>
  <li>{{HTTPHeader("Accept-Language")}}</li>
  <li>HTTP <a href="/en-US/docs/Web/HTTP/Content_negotiation">content negotiation</a></li>
</ul>
