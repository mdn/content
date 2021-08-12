---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Request header
  - header
browser-compat: http.headers.Forwarded
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Forwarded</code></strong> header contains information from the <a href="/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling">reverse proxy servers</a> that is altered or lost when a proxy is involved in the path of the request.</p>

<p>The alternative and de-facto standard versions of this header are the {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} and {{HTTPHeader("X-Forwarded-Proto")}} headers.</p>

<p>This header is used for debugging, statistics, and generating location-dependent content and by design it exposes privacy sensitive information, such as the IP address of the client. Therefore the user's privacy must be kept in mind when deploying this header.</p>

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

<pre class="brush: html">Forwarded: by=&lt;identifier&gt;;for=&lt;identifier&gt;;host=&lt;host&gt;;proto=&lt;http|https&gt;
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;identifier&gt;</dt>
 <dd>An identifier disclosing the information that is altered or lost when using a proxy. This can be either:
 <ul>
  <li>an IP address (v4 or v6, optionally with a port, and ipv6 quoted and enclosed in square brackets),</li>
  <li>an obfuscated identifier (such as "_hidden" or "_secret"),</li>
  <li>or "unknown" when the preceding entity is not known (and you still want to indicate that forwarding of the request was made).</li>
 </ul>
 </dd>
 <dt>by=&lt;identifier&gt;</dt>
 <dd>The interface where the request came in to the proxy server.</dd>
 <dt>for=&lt;identifier&gt;</dt>
 <dd>The client that initiated the request and subsequent proxies in a chain of proxies.</dd>
 <dt>host=&lt;host&gt;</dt>
 <dd>The {{HTTPHeader("Host")}} request header field as received by the proxy.</dd>
 <dt>proto=&lt;http|https&gt;</dt>
 <dd>
 <p>Indicates which protocol was used to make the request (typically "http" or "https").</p>
 </dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Using_the_Forwarded_header">Using the <code>Forwarded</code> header</h3>

<pre>Forwarded: for="_mdn"

# case insensitive
Forwarded: For="[2001:db8:cafe::17]:4711"

# separated by semicolon
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# multiple values can be appended using a comma
Forwarded: for=192.0.2.43, for=198.51.100.17
</pre>

<h3 id="Transitioning_from_X-Forwarded-For_to_Forwarded">Transitioning from <code>X-Forwarded-For</code> to <code>Forwarded</code></h3>

<p>If your application, server, or proxy supports the standardized <code>Forwarded</code> header, the {{HTTPHeader("X-Forwarded-For")}} header can be replaced. Note that IPv6 address are quoted and enclosed in square brackets in <code>Forwarded</code>.</p>

<pre>X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, "[2001:db8:cafe::17]"
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPHeader("X-Forwarded-For")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
 <li>{{HTTPHeader("Via")}} – provides information about the proxy itself, not about the client connecting to it.</li>
</ul>
