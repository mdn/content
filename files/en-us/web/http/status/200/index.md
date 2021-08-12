---
title: 200 OK
slug: Web/HTTP/Status/200
tags:
  - HTTP
  - Status code
  - Success
browser-compat: http.status.200
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>200 OK</code></strong> success status response code indicates that the request has succeeded. A 200 response is cacheable by default.</p>

<p>The meaning of a success depends on the HTTP request method:</p>

<ul>
 <li>{{HTTPMethod("GET")}}: The resource has been fetched and is transmitted in the message body.</li>
 <li>{{HTTPMethod("HEAD")}}: The representation headers are included in the response without any message body </li>
 <li>{{HTTPMethod("POST")}}: The resource describing the result of the action is transmitted in the message body</li>
 <li>{{HTTPMethod("TRACE")}}: The message body contains the request message as received by the server.</li>
</ul>

<p>The successful result of a {{HTTPMethod("PUT")}} or a {{HTTPMethod("DELETE")}} is often not a <code>200</code> <code>OK</code> but a {{HTTPStatus("204")}} <code>No Content</code> (or a {{HTTPStatus("201")}} <code>Created</code> when the resource is uploaded for the first time).</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">200 OK</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a></li>
</ul>
