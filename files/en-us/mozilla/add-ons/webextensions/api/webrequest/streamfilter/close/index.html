---
title: webRequest.StreamFilter.close()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/close
tags:
  - Add-ons
  - Extensions
  - Method
  - StreamFilter.close
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.close
---
<div>{{AddonSidebar()}}</div>

<p>Closes the request. After this is called, no further response data will be passed to the browser's rendering engine and no more filter events will be given to the extension.</p>

<p>Note the difference between this function and {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}. With <code>disconnect()</code>, the browser will continue to process any further response data, but it won't be accessible through the filter. With <code>close()</code>, the browser will ignore any response data that hasn't already been passed through to the rendering engine.</p>

<p>You should always call <code>close()</code> or <code>disconnect()</code> once you don't need to interact with the response any further.</p>

<p>You can't call this function until after the {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} event has fired.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">filter.close()
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This example will replace the page content with "replacement text":</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event =&gt; {
    console.log("started");
    let encoder = new TextEncoder();
    filter.write(encoder.encode("replacement content"));
    filter.close();
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>{{WebExtExamples}}</p>
