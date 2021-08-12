---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
tags:
  - HTTP
  - HTTPS
  - Security
  - header
browser-compat: http.headers.Upgrade-Insecure-Requests
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>Upgrade-Insecure-Requests</code></strong> request header sends a signal to the server expressing the client’s preference for an encrypted and authenticated response, and that it can successfully handle the {{CSP("upgrade-insecure-requests")}} <a href="/en-US/docs/Web/HTTP/CSP">CSP</a> directive.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Upgrade-Insecure-Requests: 1</pre>

<h2 id="Examples">Examples</h2>

<p>A client's request signals to the server that it supports the upgrade mechanisms of {{CSP("upgrade-insecure-requests")}}:</p>

<pre>GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1</pre>

<p>The server can now redirect to a secure version of the site. A {{HTTPHeader("Vary")}} header can be used so that the site isn't served by caches to clients that don’t support the upgrade mechanism.</p>

<pre>Location: https://example.com/
Vary: Upgrade-Insecure-Requests</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("Content-Security-Policy")}}</li>
 <li>CSP {{CSP("upgrade-insecure-requests")}} directive</li>
</ul>
