---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
tags:
  - API
  - Error
  - Property
  - Reference
  - XMLHttpRequest
  - XMLHttpRequest Status
  - result
  - status
browser-compat: api.XMLHttpRequest.status
---
<div>{{APIRef('XMLHttpRequest')}}</div>

<p>The read-only <code><strong>XMLHttpRequest.status</strong></code> property returns the numerical HTTP <a href="/en-US/docs/Web/HTTP/Status">status code</a> of the <code>XMLHttpRequest</code>'s response.</p>

<p>Before the request completes, the value of <code>status</code> is 0. Browsers also report a status of 0 in case of <code>XMLHttpRequest</code> errors.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
  console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>List of <a href="/en-US/docs/Web/HTTP/Response_codes">HTTP response codes</a></li>
 <li><a href="/en-US/docs/Web/HTTP">HTTP</a></li>
</ul>
