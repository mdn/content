---
title: 'CSP: require-sri-for'
slug: Web/HTTP/Headers/Content-Security-Policy/require-sri-for
tags:
- CSP
- Directive
- HTTP
- Reference
- Security
- Subresource Integrity
- require-sri-for
browser-compat: http.headers.csp.Content-Security-Policy.require-sri-for
---
<div>{{deprecated_header}}</div>

<p>The <a href="/en-US/docs/Web/HTTP">HTTP</a> {{HTTPHeader("Content-Security-Policy")}}
  <code><strong>require-sri-for</strong></code> directive instructs the client to require
  the use of <a href="/en-US/docs/Web/Security/Subresource_Integrity">Subresource
    Integrity</a> for scripts or styles on the page.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Content-Security-Policy: require-sri-for script;
Content-Security-Policy: require-sri-for style;
Content-Security-Policy: require-sri-for script style;
</pre>

<dl>
  <dt><code>script</code></dt>
  <dd>Requires {{Glossary("SRI")}} for scripts.</dd>
  <dt><code>style</code></dt>
  <dd>Requires {{Glossary("SRI")}} for style sheets.</dd>
  <dt><code>script style</code></dt>
  <dd>Requires {{Glossary("SRI")}} for both, scripts and style sheets.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>If you set your site to require SRI for script and styles using this directive:</p>

<pre>Content-Security-Policy: require-sri-for script style</pre>

<p>{{HTMLElement("script")}} elements like the following will be loaded as they use a
  valid integrity attribute.</p>

<pre class="brush: html; example-good">&lt;script src="https://code.jquery.com/jquery-3.1.1.slim.js"
        integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
        crossorigin="anonymous"&gt;&lt;/script&gt;</pre>

<p>However, scripts without integrity won't load anymore:</p>

<pre
  class="brush: html; example-bad">&lt;script src="https://code.jquery.com/jquery-3.1.1.slim.js"&gt;&lt;/script&gt;</pre>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Content-Security-Policy")}}</li>
  <li><a href="/en-US/docs/Web/Security/Subresource_Integrity">Subresource Integrity</a>
  </li>
</ul>
