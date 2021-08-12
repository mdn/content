---
title: 'CSP: child-src'
slug: Web/HTTP/Headers/Content-Security-Policy/child-src
tags:
- CSP
- Child
- Content-Security-Policy
- Directive
- HTTP
- Reference
- Security
- child-src
- source
browser-compat: http.headers.csp.Content-Security-Policy.child-src
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP)
  <strong><code>child-src</code></strong> directive defines the valid sources for <a
    href="/en-US/docs/Web/API/Web_Workers_API">web workers</a> and nested browsing
  contexts loaded using elements such as {{HTMLElement("frame")}} and
  {{HTMLElement("iframe")}}. For workers, non-compliant requests are treated as fatal
  network errors by the user agent.</p>

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Directive type</th>
      <td>{{Glossary("Fetch directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>Yes. If this directive is absent, the user agent will look for the
        <code>default-src</code> directive.</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<p>One or more sources can be allowed for the child-src policy:</p>

<pre class="brush: html">Content-Security-Policy: child-src &lt;source&gt;;
Content-Security-Policy: child-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources">Sources</h3>

<p>{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<h2 id="Examples">Examples</h2>

<h3 id="Violation_cases">Violation cases</h3>

<p>Given this CSP header:</p>

<pre class="brush: bash">Content-Security-Policy: child-src https://example.com/</pre>

<p>This {{HTMLElement("iframe")}} and worker are blocked and won't load:</p>

<pre class="brush: html">&lt;iframe src="https://not-example.com"&gt;&lt;/iframe&gt;

&lt;script&gt;
  var blockedWorker = new Worker("data:application/javascript,...");
&lt;/script&gt;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Content-Security-Policy")}}</li>
  <li>{{HTMLElement("frame")}} and {{HTMLElement("iframe")}}</li>
  <li>{{domxref("Worker")}}, {{domxref("SharedWorker")}}, {{domxref("ServiceWorker")}}
  </li>
</ul>
