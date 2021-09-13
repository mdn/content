---
title: Request.integrity
slug: Web/API/Request/integrity
tags:
  - API
  - Experimental
  - Fetch
  - Property
  - Reference
  - integrity
  - request
browser-compat: api.Request.integrity
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>integrity</code></strong> read-only property of the {{domxref("Request")}} interface contains the <a href="/en-US/docs/Web/Security/Subresource_Integrity">subresource integrity</a> value of the request.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var myIntegrity = request.integrity;</pre>

<h3 id="Value">Value</h3>

<p>The <a href="/en-US/docs/Web/Security/Subresource_Integrity">subresource integrity</a> value of the request (e.g., <code>sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=</code>).</p>

<p>If an integrity has not been specified, the property returns <code>''</code>.</p>

<h2 id="Example">Example</h2>

<p>In the following snippet, we create a new request using the {{domxref("Request.Request()")}} constructor (for an image file in the same directory as the script), then save the request <code>integrity</code> value in a variable:</p>

<pre class="brush: js">var myRequest = new Request('flowers.jpg');
var myIntegrity = myRequest.integrity;</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">HTTP access control (CORS)</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
