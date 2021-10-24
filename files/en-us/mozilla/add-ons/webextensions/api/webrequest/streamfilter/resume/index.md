---
title: webRequest.StreamFilter.resume()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/resume
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.resume()
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.resume
---
<div>{{AddonSidebar()}}</div>

<p>Resumes a request that was previously suspended through a call to {{WebExtAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}}.</p>

<p>You can't call this function until after the {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} event has fired.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js"><em>StreamFilter</em>.resume()
</pre>

<h3 id="Parameters">Parameters</h3>

<p>None.</p>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This example uses suspend/resume to delay a web request.</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = event =&gt; {
    filter.suspend();

    setTimeout(() =&gt; {
      filter.resume();
      filter.disconnect();
    }, 1000);

  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.org/"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>{{WebExtExamples}}</p>
