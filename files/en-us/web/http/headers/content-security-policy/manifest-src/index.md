---
title: 'CSP: manifest-src'
slug: Web/HTTP/Headers/Content-Security-Policy/manifest-src
tags:
- CSP
- Content-Security-Policy
- Directive
- HTTP
- Manifest
- Reference
- Security
- manifest-src
- source
browser-compat: http.headers.csp.Content-Security-Policy.manifest-src
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP
  {{HTTPHeader("Content-Security-Policy")}}<code>: <strong>manifest-src</strong></code>
  directive specifies which <a href="/en-US/docs/Web/Manifest">manifest</a> can be applied
  to the resource.</p>

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
      <th scope="row">{{CSP("default-src")}} fallback</th>
      <td>Yes. If this directive is absent, the user agent will look for the
        <code>default-src</code> directive.</td>
    </tr>
  </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<p>One or more sources can be allowed for the <code>manifest-src</code> policy:</p>

<pre class="brush: html">Content-Security-Policy: manifest-src &lt;source&gt;;
Content-Security-Policy: manifest-src &lt;source&gt; &lt;source&gt;;
</pre>

<h3 id="Sources">Sources</h3>

<p>{{page("Web/HTTP/Headers/Content-Security-Policy/connect-src", "Sources")}}</p>

<h2 id="Examples">Examples</h2>

<h3 id="Violation_cases">Violation cases</h3>

<p>Given this CSP header:</p>

<pre class="brush: bash">Content-Security-Policy: manifest-src https://example.com/</pre>

<p>The following {{HTMLElement("link")}} is blocked and won't load:</p>

<pre
  class="brush: html">&lt;link rel="manifest" href="https://not-example.com/manifest"&gt;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{HTTPHeader("Content-Security-Policy")}}</li>
  <li><a href="/en-US/docs/Web/Manifest">Web app manifest</a></li>
  <li>{{HTMLElement("link")}}</li>
</ul>
