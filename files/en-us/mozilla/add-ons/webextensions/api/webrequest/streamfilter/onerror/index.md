---
title: webRequest.StreamFilter.onerror
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/onerror
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.onerror
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.onerror
---
<div>{{AddonSidebar()}}</div>

<div>
<p>An event handler that will be called when an error occurs. This is most often because an invalid request ID was passed into {{WebExtAPIRef("webRequest.filterResponseData()")}}.</p>

<p>After this event is fired, the {{WebExtAPIRef("webRequest.StreamFilter.error")}} property will contain a message giving more information about the error.</p>

<p>Note that this event is <strong>not</strong> triggered for network errors.</p>
</div>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This example adds an <code>onerror</code> listener which logs the value of {{WebExtAPIRef("webRequest.StreamFilter.error")}}.</p>

<pre class="brush: js">function listener(details) {
  // This example seems not useful because,
  // a extension would use "details.requestId"
  let filter = browser.webRequest.filterResponseData("12345");

  filter.onerror = event =&gt; {
    console.log(`Error: ${filter.error}`);
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["&lt;all_urls&gt;"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>This example uses no <code>"blocking"</code>.</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onerror = event =&gt; {
    console.log(`Error: ${filter.error}`); // Error: Invalid request ID
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["&lt;all_urls&gt;"], types: ["main_frame"]}
);</pre>

<p>{{WebExtExamples}}</p>
