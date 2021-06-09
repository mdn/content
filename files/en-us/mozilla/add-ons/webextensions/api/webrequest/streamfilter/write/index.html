---
title: webRequest.StreamFilter.write()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter/write
tags:
  - API
  - Add-ons
  - Extensions
  - Reference
  - StreamFilter.write()
  - WebExtensions
  - webRequest
browser-compat: webextensions.api.webRequest.StreamFilter.write
---
<div>{{AddonSidebar()}}</div>

<p>Writes some response data to the output stream.</p>

<div>You can only call this function after the {{WebExtAPIRef("webRequest.StreamFilter.onstart", "onstart")}} event has fired.</div>

<h2 id="Syntax">Syntax</h2>

<pre class="brush:js">filter.write(
  data    // ArrayBuffer or Uint8Array
)
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>data</code></dt>
 <dd><code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array">Uint8Array</a></code> or <code><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a></code>: array of bytes containing the data to pass to the browser's rendering engine.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>None.</p>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>

<h2 id="Examples">Examples</h2>

<p>This example uses <code>write()</code>, to replace "Example" in the first chunk of the response with "WebExtension Example".</p>

<pre class="brush: js">function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);
  let decoder = new TextDecoder("utf-8");
  let encoder = new TextEncoder();

  filter.ondata = event =&gt; {
    let str = decoder.decode(event.data, {stream: true});
    // Just change any instance of Example in the HTTP response
    // to WebExtension Example.
    str = str.replace(/Example/g, 'WebExtension Example');
    filter.write(encoder.encode(str));
    filter.disconnect();
  }

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  {urls: ["https://example.com/*"], types: ["main_frame"]},
  ["blocking"]
);
</pre>

<p>{{WebExtExamples}}</p>
