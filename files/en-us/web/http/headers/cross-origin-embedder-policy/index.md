---
title: Cross-Origin-Embedder-Policy
slug: Web/HTTP/Headers/Cross-Origin-Embedder-Policy
tags:
  - HTTP
  - HTTP Header
  - Reference
  - Response Header
  - header
browser-compat: http.headers.Cross-Origin-Embedder-Policy
---
<div>{{HTTPSidebar}}</div>

<p>The HTTP <strong><code>Cross-Origin-Embedder-Policy</code></strong> (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using <a href="/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)">CORP</a> or <a href="/en-US/docs/Web/HTTP/CORS">CORS</a>).</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: html">Cross-Origin-Embedder-Policy: unsafe-none | require-corp
</pre>

<h3 id="Directives">Directives</h3>

<dl>
 <dt><code>unsafe-none</code></dt>
 <dd>This is the default value. Allows the document to fetch cross-origin resources without giving explicit permission through the CORS protocol or the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header.</dd>
 <dt><code>require-corp</code></dt>
 <dd>A document can only load resources from the same origin, or resources explicitly marked as loadable from another origin.<br>
 If a cross origin resource supports CORS, the <code><a href="/en-US/docs/Web/HTML/Attributes/crossorigin">crossorigin</a></code> attribute or the {{HTTPHeader("Cross-Origin-Resource-Policy")}} header must be used to load it without being blocked by COEP.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Certain_features_depend_on_cross-origin_isolation">Certain features depend on cross-origin isolation</h3>

<p>You can only access certain features like {{jsxref("SharedArrayBuffer")}} objects or {{domxref("Performance.now()")}} with unthrottled timers, if your document has a COEP header with the value <code>require-corp</code> value set.</p>

<pre>Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
</pre>

<p>See also the {{HTTPHeader("Cross-Origin-Opener-Policy")}} header which you'll need to set as well.</p>

<p>To check if cross origin isolation has been successful, you can test against the <code><a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/crossOriginIsolated">crossOriginIsolated</a></code> property available to window and worker contexts:</p>

<pre class="brush: js">if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}</pre>

<h3 id="Avoiding_COEP_blockage_with_CORS">Avoiding COEP blockage with CORS</h3>

<p>If you enable COEP using <code>require-corp</code> and have a cross origin resource that needs to be loaded, it needs to support <a href="/en-US/docs/Web/HTTP/CORS">CORS</a> and you need to explicitly mark the resource as loadable from another origin to avoid blockage from COEP. For example, you can use the <code><a href="/en-US/docs/Web/HTML/Attributes/crossorigin">crossorigin</a></code> attribute for this image from a third-party site:</p>

<pre class="brush: html">&lt;img src="https://thirdparty.com/img.png" crossorigin&gt;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{httpheader("Cross-Origin-Opener-Policy")}}</li>
</ul>
