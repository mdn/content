---
title: XMLHttpRequestEventTarget.onprogress
slug: Web/API/XMLHttpRequestEventTarget/onprogress
tags:
  - Event Handler
  - Property
  - Reference
  - Web
  - XHR
  - XMLHttpRequestEventTarget
browser-compat: api.XMLHttpRequestEventTarget.onprogress
---
<p>{{APIRef("XMLHttpRequest")}}</p>

<p>The <strong><code>XMLHttpRequestEventTarget.onprogress</code></strong> is the function called periodically with information when an {{domxref("XMLHttpRequest")}} before success completely.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>XMLHttpRequest</em>.onprogress = <em>callback</em>;</pre>

<h3 id="Values">Values</h3>

<ul>
 <li><code><em>callback</em></code> is the function to be called periodically before the request is completed.</li>
</ul>

<h3 id="Event">Event</h3>

<ul>
 <li><em><code>event.loaded</code></em>  the amount of data currently transfered.</li>
 <li><em><code>event.total</code></em>  the total amount of data to be transferred.</li>
</ul>

<pre class="brush: js">XMLHttpRequest.onprogress = function (event) {
  event.loaded;
  event.total;
};</pre>

<h2 id="Example">Example</h2>

<pre class="brush: js">var xmlhttp = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://developer.mozilla.org/';

xmlhttp.open(<em>method</em>, <em>url</em>, true);
xmlhttp.onprogress = function () {
  //do something
};
xmlhttp.send();
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
