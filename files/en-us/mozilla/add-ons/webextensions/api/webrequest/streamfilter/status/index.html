---
title: webRequest.StreamFilter.status
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/status
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.status
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.status
---
<div>{{AddonSidebar()}}</div>

<p><span class="summary">A string that describes the current status of the request.</span> It will be one of the following values:</p>

<dl>
 <dt><code>"uninitialized"</code></dt>
 <dd>The filter is not fully initialized. No filter functions may be called.</dd>
 <dt><code>"transferringdata"</code></dt>
 <dd>The underlying channel is currently transferring data, which will be routed to the extension in one or more {{WebExtAPIRef("webRequest.StreamFilter.ondata", "ondata")}} events. The extension can call filter functions such as {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}, {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}}, or {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}}.</dd>
 <dt><code>"finishedtransferringdata"</code></dt>
 <dd>The underlying channel has finished transferring data. In this state the extension can still write response data using the filter's {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} function.</dd>
 <dt><code>"suspended"</code></dt>
 <dd> Data transfer is currently suspended. In this state the extension can resume the request by calling the filter's {{WebExtAPIRef("webRequest.StreamFilter.resume()", "resume()")}} function, and can write response data using the filter's {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}} function.</dd>
 <dt><code>"closed"</code></dt>
 <dd>The extension has closed the request by calling the filter's {{WebExtAPIRef("webRequest.StreamFilter.close()", "close()")}} function. The filter will not fire any more events, and the extension may not call any filter functions.</dd>
 <dt><code>"disconnected"</code></dt>
 <dd> The extension has disconnected the filter from the request by calling the filter's {{WebExtAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} function. All further data will be delivered directly, without passing through the filter. The filter will not fire any more events, and the extension may not call any filter functions.</dd>
 <dt><code>"failed"</code></dt>
 <dd> An error has occurred and the filter has been disconnected from the request. The extension can find an error message in {{WebExtAPIRef("webRequest.StreamFilter.error", "error")}}, and may not call any filter functions.</dd>
</dl>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  console.log(filter.status);          // uninitialized

  filter.onstart = event =&gt; {
    console.log(filter.status);        // transferringdata
  }

  filter.ondata = event =&gt; {
    console.log(filter.status);        // transferringdata
    // pass through the response data
    filter.write(event.data);
  }

  filter.onstop = event =&gt; {
    console.log(filter.status);        // finishedtransferringdata
    filter.disconnect();
    console.log(filter.status);        // disconnected
  }
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);</pre>

<p>{{WebExtExamples}}</p>
