---
title: Request.formData()
slug: Web/API/Request/formData
tags:
  - API
  - Fetch
  - Fetch API
  - FormData
  - Method
  - Reference
browser-compat: api.Request.formData
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>formData()</code></strong> method of the {{domxref("Request")}} interface
reads the request body and returns it as a promise that resolves with a {{domxref("FormData")}} object.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">request.formData().then(function(formdata) {
  // do something with your formdata
});</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A {{jsxref("Promise")}} that resolves with a {{domxref("FormData")}} object.</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

const request = new Request('/myEndpoint', {
  method: 'POST',
  body: formData
});

request.formData().then(function(data) {
  // do something with the formdata sent in the request
});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li>{{domxref("Response.formData()")}}</li>
</ul>
