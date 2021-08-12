---
title: 'CSP: worker-src'
slug: Web/HTTP/Headers/Content-Security-Policy/worker-src
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
browser-compat: http.headers.csp.Content-Security-Policy.worker-src
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
  <code><strong>worker-src</strong></code> directive specifies valid sources for
  {{domxref("Worker")}}, {{domxref("SharedWorker")}}, or {{domxref("ServiceWorker")}}
  scripts.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>3</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">Fallback</th>
      <td>
        <p>If this directive is absent, the user agent will first look for the
          {{CSP("child-src")}} directive, then the {{CSP("script-src")}} directive, then
          finally for the {{CSP("default-src")}} directive, when governing worker
          execution.</p>
        </p>
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<p>One or more sources can be allowed for the <code>worker-src</code> policy:</p>

<pre class="brush: html">Content-Security-Policy: worker-src &lt;source&gt;;
Content-Security-Policy: worker-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources">Sources</h3>

<p>{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<h2 id="Examples">Examples</h2>

<h3 id="Violation_cases">Violation cases</h3>

<p>Given this CSP header:</p>

<pre class="brush: bash">Content-Security-Policy: worker-src https://example.com/</pre>

<p>{{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}} are
  blocked and won't load:</p>

<pre class="brush: html">&lt;script&gt;
  var blockedWorker = new Worker("data:application/javascript,...");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register('https://not-example.com/sw.js');
&lt;/script&gt;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Content-Security-Policy")}}</li>
  <li><a
      href="/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#content_security_policy">CSP
      for Web Workers</a></li>
  <li>{{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
  </li>
</ul>
