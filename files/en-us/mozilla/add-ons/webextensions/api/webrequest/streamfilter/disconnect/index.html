---
title: webRequest.StreamFilter.disconnect()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/disconnect
tags:
  - API
  - Add-ons
  - Extensions
  - StreamFilter.disconnect
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.disconnect
---
<div>{{AddonSidebar()}}</div>

<div>Disconnects the filter from the request. After this, the browser will continue to process the response, but no more filter events will fire, and no more filter function calls will have any effect.</div>


<div>Note the difference between this function and {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}. With <code>disconnect()</code>, the browser will continue to process any further response data, but it won't be accessible through the filter. With <code>close()</code>, the browser will ignore any response data that hasn't already been passed through to the rendering engine.</div>


<p>You should always call <code>disconnect()</code> or <code>close()</code> once you don't need to interact with the response any further.</p>

<p>You can't call this function until after the {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} event has fired.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">filter.disconnect()
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This example will prepend "preface text" to the response body. It then disconnects, so the original response body will load normally:</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event =&gt; {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("preface text"));
    filter.disconnect();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>{{WebExtExamples}}</p>
