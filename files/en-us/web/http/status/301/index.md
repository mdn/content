---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
tags:
  - HTTP
  - Redirect
  - Reference
  - Status code
browser-compat: http.status.301
---
<div>{{HTTPSidebar}}</div>

<p>The HyperText Transfer Protocol (HTTP) <code><strong>301 Moved Permanently</strong></code> redirect status response code indicates that the resource requested has been definitively moved to the URL given by the {{HTTPHeader("Location")}} headers. A browser redirects to this page and search engines update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is sent to the new URL).</p>

<p>Even if the specification requires the method (and the body) not to be altered when the redirection is performed, not all user-agents align with it - you can still find this type of bugged software out there. It is therefore recommended to use the <code>301</code> code only as a response for {{HTTPMethod("GET")}} or {{HTTPMethod("HEAD")}} methods and to use the {{HTTPStatus("308", "308 Permanent Redirect")}} for {{HTTPMethod("POST")}} methods instead, as the method change is explicitly prohibited with this status.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">301 Moved Permanently</pre>

<h2 id="Example">Example</h2>

<h3 id="Client_request">Client request</h3>

<pre>GET /index.php HTTP/1.1
Host: www.example.org</pre>

<h3 id="Server_response">Server response</h3>

<pre>HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPStatus("308", "308 Permanent Redirect")}}</li>
 <li>{{HTTPStatus("302", "302 Found")}}, the temporary redirect</li>
</ul>
