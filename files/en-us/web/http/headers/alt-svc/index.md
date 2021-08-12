---
title: Alt-Svc
slug: Web/HTTP/Headers/Alt-Svc
tags:
- HTTP
- HTTP Header
- NeedsCompatTable
- Reference
browser-compat: http.headers.Alt-Svc
---
<div>{{HTTPSidebar}}</div>

<p>The {{HTTPHeader("Alt-Svc")}} HTTP header allows a server to indicate that a particular resource should be loaded from a different server — while still appearing to the user as if were loaded from the same server.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: html">Alt-Svc: clear
Alt-Svc: <var>&lt;protocol-id&gt;</var>=<em>&lt;alt-authority&gt;</em>; ma=<var>&lt;max-age&gt;</var>
Alt-Svc: <var>&lt;protocol-id&gt;</var>=<em>&lt;alt-authority&gt;</em>; ma=<var>&lt;max-age&gt;</var>; persist=1</pre>

<dl>
  <dt><code>clear</code></dt>
  <dd>The special value ''clear" indicates that the origin requests all alternatives for
    that origin to be invalidated.</dd>
  <dt><code>&lt;protocol-id&gt;</code></dt>
  <dd>The {{Glossary("ALPN")}} protocol identifier. Examples include h2 for HTTP/2 and
    h3-25 for draft 25 of the HTTP/3 protocol.</dd>
  <dt><code>&lt;alt-authority&gt;</code></dt>
  <dd>The quoted string specifying the alternative authority which consists of an optional
    host override, a colon, and a mandatory port number.</dd>
  <dt><code>ma=&lt;max-age&gt;</code>{{Optional_Inline}}</dt>
  <dd>The number of seconds for which the alternative service is considered fresh. If
    omitted, it defaults to 24 hours. Alternative service entries can be cached for up to
    <em>&lt;max-age&gt;</em> seconds, minus the age of the response (from the {{
    httpheader("Age") }} header). If the cached entry expires, the client can no longer
    use this alternative service for new connections.</dd>
  <dt><code>persist=1</code>{{Optional_Inline}}</dt>
  <dd>Usually cached alternative service entries are cleared on network configuration
    changes. Use of the persist=1 parameter ensures that the entry is not deleted through
    such changes.</dd>
</dl>

<p>Multiple entries can be specified in a single <code>Alt-Svc</code> header using comma
  as separator. In that case, early entries are considered more preferable.</p>

<h2 id="Example">Example</h2>

<pre>Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="https://www.mnot.net/blog/2016/03/09/alt-svc"> Alternative Services</a> (article about <code>Alt-Svc</code> by HTTP Working Group chair Mark Nottingham)</li>
</ul>
