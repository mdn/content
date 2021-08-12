---
title: Access-Control-Request-Headers
slug: Web/HTTP/Headers/Access-Control-Request-Headers
tags:
  - CORS
  - HTTP
  - Reference
  - header
browser-compat: http.headers.Access-Control-Request-Headers
---
<p>{{HTTPSidebar}}</p>

<p>The <strong><code>Access-Control-Request-Headers</code></strong> request header is used by browsers when issuing a {{glossary("preflight request")}}, to let the server know which <a href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a> the client might send when the actual request is made (such as with {{domxref("XMLHttpRequest.setRequestHeader()","setRequestHeader()")}}). This browser side header will be answered by the complementary server side header of {{HTTPHeader("Access-Control-Allow-Headers")}}.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>yes</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Access-Control-Request-Headers: &lt;header-name&gt;, &lt;header-name&gt;, ...
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;header-name&gt;</dt>
 <dd>A comma-delimited list of <a href="/en-US/docs/Web/HTTP/Headers">HTTP headers</a> that are included in the request.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<pre>Access-Control-Request-Headers: X-PINGOTHER, Content-Type</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Access-Control-Request-Method")}}</li>
</ul>
