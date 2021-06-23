---
title: Request.cache
slug: Web/API/Request/cache
tags:
  - API
  - Cache
  - Experimental
  - Fetch
  - Property
  - Reference
  - request
browser-compat: api.Request.cache
---
<div>{{APIRef("Fetch")}}</div>

<p>The <strong><code>cache</code></strong> read-only property of the {{domxref("Request")}} interface contains the cache mode of the request. It controls how the request will interact with the browser's <a href="/en-US/docs/Web/HTTP/Caching">HTTP cache</a>.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var currentCacheMode = request.cache;</pre>

<h3 id="Value">Value</h3>

<p>A <code>RequestCache</code> value. The available values are:</p>

<ul>
 <li><code>default</code> — The browser looks for a matching request in its HTTP cache.

  <ul>
   <li>If there is a match and it is <a href="/en-US/docs/Web/HTTP/Caching#freshness">fresh</a>, it will be returned from the cache.</li>
   <li>If there is a match but it is stale, the browser will make a <a href="/en-US/docs/Web/HTTP/Conditional_requests">conditional request</a> to the remote server. If the server indicates that the resource has not changed, it will be returned from the cache. Otherwise the resource will be downloaded from the server and the cache will be updated.</li>
   <li>If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.</li>
  </ul>
 </li>
 <li><code>no-store</code> — The browser fetches the resource from the remote server without first looking in the cache,<em> and will not</em> update the cache with the downloaded resource.</li>
 <li><code>reload</code> — The browser fetches the resource from the remote server without first looking in the cache, <em>but then will</em> update the cache with the downloaded resource.</li>
 <li><code>no-cache</code> — The browser looks for a matching request in its HTTP cache.
  <ul>
   <li>If there is a match,<em> fresh or stale,</em> the browser will make a <a href="/en-US/docs/Web/HTTP/Conditional_requests">conditional request</a> to the remote server. If the server indicates that the resource has not changed, it will be returned from the cache. Otherwise the resource will be downloaded from the server and the cache will be updated.</li>
   <li>If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.</li>
  </ul>
 </li>
 <li><code>force-cache</code> — The browser looks for a matching request in its HTTP cache.
  <ul>
   <li>If there is a match, <em>fresh or stale</em>, it will be returned from the cache.</li>
   <li>If there is no match, the browser will make a normal request, and will update the cache with the downloaded resource.</li>
  </ul>
 </li>
 <li><code>only-if-cached</code> — The browser looks for a matching request in its HTTP cache.
  <ul>
   <li>If there is a match, <em>fresh or stale</em>, it will be returned from the cache.</li>
   <li>If there is no match, the browser will respond with a <a href="/en-US/docs/Web/HTTP/Status/504">504 Gateway timeout</a> status.</li>
  </ul>
  The <code>"only-if-cached"</code> mode can only be used if the request's <code><a href="/en-US/docs/Web/API/Request/mode">mode</a></code> is <code>"same-origin"</code>. Cached redirects will be followed if the request's <code>redirect</code> property is <code>"follow"</code> and the redirects do not violate the <code>"same-origin"</code> mode.</li>
</ul>

<h2 id="Example">Example</h2>

<pre class="brush: js">// Download a resource with cache busting, to bypass the cache
// completely.
fetch("some.json", {cache: "no-store"})
  .then(function(response) { /* consume the response */ });

// Download a resource with cache busting, but update the HTTP
// cache with the downloaded resource.
fetch("some.json", {cache: "reload"})
  .then(function(response) { /* consume the response */ });

// Download a resource with cache busting when dealing with a
// properly configured server that will send the correct ETag
// and Date headers and properly handle If-Modified-Since and
// If-None-Match request headers, therefore we can rely on the
// validation to guarantee a fresh response.
fetch("some.json", {cache: "no-cache"})
  .then(function(response) { /* consume the response */ });

// Download a resource with economics in mind!  Prefer a cached
// albeit stale response to conserve as much bandwidth as possible.
fetch("some.json", {cache: "force-cache"})
  .then(function(response) { /* consume the response */ });

// Naive stale-while-revalidate client-level implementation.
// Prefer a cached albeit stale response; but update if it's too old.
// AbortController and signal to allow better memory cleaning.
// In reality; this would be a function that takes a path and a
// reference to the controller since it would need to change the value
let controller = new AbortController();
fetch("some.json", {cache: "only-if-cached", mode: "same-origin", signal: controller.signal})
  .catch(e =&gt; e instanceof TypeError &amp;&amp; e.message === "Failed to fetch" ?
    ({status: 504}) : // Workaround for chrome; which fails with a typeerror
    Promise.reject(e))
  .then(res =&gt; {
    if (res.status === 504) {
      controller.abort()
      controller = new AbortController();
      return fetch("some.json", {cache: "force-cache", mode: "same-origin", signal: controller.signal})
    }
    const date = res.headers.get("date"), dt = date ? new Date(date).getTime() : 0
    if (dt &lt; (Date.now() - 86400000)) {
      // if older than 24 hours
      controller.abort()
      controller = new AbortController();
      return fetch("some.json", {cache: "reload", mode: "same-origin", signal: controller.signal})
    }

    // Other possible conditions
    if (dt &lt; (Date.now() - 300000)) // If it's older than 5 minutes
      fetch("some.json", {cache: "no-cache", mode: "same-origin"}) // no cancellation or return value.
    return res
  })
  .then(function(response) { /* consume the (possibly stale) response */ })
  .catch(error =&gt; { /* Can be an AbortError/DOMError or a TypeError */ });</pre>

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
