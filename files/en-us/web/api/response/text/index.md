---
title: Response.text()
slug: Web/API/Response/text
tags:
  - API
  - Fetch
  - Method
  - Reference
  - Text
  - Response
browser-compat: api.Response.text
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>text()</code></strong> method of the {{domxref("Response")}} interface takes
  a {{domxref("Response")}} stream and reads it to completion. It returns a promise that
  resolves with a {{jsxref("String")}}. The response
  is <em>always</em> decoded using UTF-8.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><var>response</var>.text().then(function (<var>text</var>) {
  // do something with the text response
});</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>A Promise that resolves with a {{jsxref("String")}}.</p>

<h2 id="Example">Example</h2>

<p>In our <a href="https://github.com/mdn/fetch-examples/tree/master/fetch-text">fetch
    text example</a> (run <a href="https://mdn.github.io/fetch-examples/fetch-text/">fetch
    text live</a>), we have an {{htmlelement("article")}} element and three links (stored
  in the <code>myLinks</code> array.) First, we loop through all of these and give each
  one an <code>onclick</code> event handler so that the <code>getData()</code> function is
  run — with the link's <code>data-page</code> identifier passed to it as an argument —
  when one of the links is clicked.</p>

<p>When <code>getData()</code> is run, we create a new request using the
  {{domxref("Request.Request","Request()")}} constructor, then use it to fetch a specific
  <code>.txt</code> file. When the fetch is successful, we read a {{domxref("USVString")}}
  (text) object out of the response using <code>text()</code>, then set the
  {{domxref("Element.innerHTML","innerHTML")}} of the {{htmlelement("article")}} element
  equal to the text object.</p>

<pre class="brush: js">let myArticle = document.querySelector('article');
let myLinks = document.querySelectorAll('ul a');

for(let i = 0; i &lt;= myLinks.length-1; i++) {
  myLinks[i].onclick = function(e) {
    e.preventDefault();
    let linkData = e.target.getAttribute('data-page');
    getData(linkData);
  }
};

function getData(pageId) {
  console.log(pageId);
  var myRequest = new Request(pageId + '.txt');
  fetch(myRequest).then(function(response) {
    return response.text().then(function(text) {
      myArticle.innerHTML = text;
    });
  });
}</pre>

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
