---
title: Timing-Allow-Origin
slug: Web/HTTP/Headers/Timing-Allow-Origin
tags:
  - CORS
  - HTTP
  - Reference
  - Timing-Allow-Origin
  - header
browser-compat: http.headers.Timing-Allow-Origin
---
<div>{{HTTPSidebar}}</div>

<p>The <strong><code>Timing-Allow-Origin</code></strong> response header specifies origins that are allowed to see values of attributes retrieved via features of the <a href="/en-US/docs/Web/API/Resource_Timing_API">Resource Timing API</a>, which would otherwise be reported as zero due to cross-origin restrictions.</p>

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

<pre class="brush: html">Timing-Allow-Origin: *
Timing-Allow-Origin: &lt;origin&gt;[, &lt;origin&gt;]*
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt><code>*</code></dt>
 <dd>The server may specify "*" as a wildcard, thereby allowing any origin to see timing resources.</dd>
 <dt><code>&lt;origin&gt;</code></dt>
 <dd>Specifies a URI that may see the timing resources. You can specify multiple origins, separated by commas.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>To allow any resource to see timing resources:</p>

<pre>Timing-Allow-Origin: *</pre>

<p>To allow <code>https://developer.mozilla.org</code> to see timing resources, you can specify:</p>

<pre>Timing-Allow-Origin: https://developer.mozilla.org</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Resource_Timing_API">Resource Timing API</a></li>
 <li><a href="/en-US/docs/Web/API/Resource_Timing_API/Using_the_Resource_Timing_API">Using the Resource Timing API</a></li>
 <li>{{HTTPHeader("Vary")}}</li>
</ul>
