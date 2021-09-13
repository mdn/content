---
title: Request.headers
slug: Web/API/Request/headers
tags:
  - API
  - Experimental
  - Fetch
  - Headers
  - Property
  - Reference
  - request
browser-compat: api.Request.headers
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>headers</code></strong> read-only property of the
  {{domxref("Request")}} interface contains the {{domxref("Headers")}} object associated
  with the request.</p>

<h2 id="Syntax">Syntax</h2>

<pre
  class="brush: js">var <var>myHeaders</var> = <var>request</var>.headers;</pre>

<h3 id="Value">Value</h3>

<p>A {{domxref("Headers")}} object.</p>

<h2 id="Example">Example</h2>

<p>In the following snippet, we create a new request using the
  {{domxref("Request.Request()")}} constructor (for an image file in the same directory as
  the script), then save the request headers in a variable:</p>

<pre class="brush: js">var myRequest = new Request('flowers.jpg');
var myHeaders = myRequest.headers; // Headers {}</pre>

<p>To add a header to the {{domxref("Headers")}} object we use
  {{domxref("Headers.append")}}; we then create a new <code>Request</code> along with a
  2nd init parameter, passing headers in as an init option:</p>

<pre class="brush: js">var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  cache: 'default'
};

var myRequest = new Request('flowers.jpg', myInit);

myContentType = myRequest.headers.get('Content-Type'); // returns 'image/jpeg'</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="/en-US/docs/Web/API/Service_Worker_API">ServiceWorker API</a></li>
  <li><a href="/en-US/docs/Web/HTTP/CORS">HTTP access control (CORS)</a>
  </li>
  <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
