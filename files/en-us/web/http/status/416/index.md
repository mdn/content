---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Status/416
tags:
  - Client error
  - HTTP
  - Status code
browser-compat: http.status.416
---
<div>{{HTTPSidebar}}</div>

<p>The HyperText Transfer Protocol (HTTP) <code><strong>416 Range Not Satisfiable</strong></code> error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the {{HTTPHeader("Range")}} header value, though syntactically correct, doesn't make sense.</p>

<p>The <code>416</code> response message contains a {{HTTPHeader("Content-Range")}} indicating an unsatisfied range (that is a <code>'*'</code>) followed by a <code>'/'</code> and the current length of the resource. E.g. <code>Content-Range: bytes */12777</code></p>

<p>Faced with this error, browsers usually either abort the operation (for example, a download will be considered as non-resumable) or ask for the whole document again.</p>

<h2 id="Status">Status</h2>

<pre class="brush: html">416 Range Not Satisfiable</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPStatus(206)}} <code>Partial Content</code></li>
 <li>{{HTTPHeader("Content-Range")}}</li>
 <li>{{HTTPHeader("Range")}}</li>
</ul>
