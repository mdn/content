---
title: PerformanceResourceTiming.transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
tags:
- API
- Property
- Reference
- Web Performance
browser-compat: api.PerformanceResourceTiming.transferSize
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>The <strong><code>transferSize</code></strong> read-only property represents the size
  (in octets) of the fetched resource. The size includes the response header fields plus
  the response payload body (as defined by <a
    href="https://httpwg.github.io/specs/rfc7230.html#message.body">RFC7230</a>).</p>

<p>{{AvailableInWorkers}}</p>

<p>If the resource is fetched from a local cache, or if it is a cross-origin resource,
  this property returns zero.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>resource</em>.transferSize;
</pre>

<h3 id="Return_Value">Return value</h3>

<p>A <code>number</code> representing the size (in octets) of the fetched resource. The
  size includes the response header fields plus the <a
    href="https://httpwg.github.io/specs/rfc7230.html#message.body">response payload
    body</a> (RFC7230).</p>

<h2 id="Example">Example</h2>

<p>The following example, the value of size properties of all "<code>resource</code>"
  {{domxref("PerformanceEntry.entryType","type")}} events are logged.</p>

<pre class="brush: js">function log_sizes(perfEntry){
  // Check for support of the PerformanceEntry.*size properties and print their values
  // if supported.
  if ("decodedBodySize" in perfEntry)
    console.log("decodedBodySize = " + perfEntry.decodedBodySize);
  else
    console.log("decodedBodySize = NOT supported");

  if ("encodedBodySize" in perfEntry)
    console.log("encodedBodySize = " + perfEntry.encodedBodySize);
  else
    console.log("encodedBodySize = NOT supported");

  if ("transferSize" in perfEntry)
    console.log("transferSize = " + perfEntry.transferSize);
  else
    console.log("transferSize = NOT supported");
}
function check_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i &lt; p.length; i++) {
    log_sizes(p[i]);
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
