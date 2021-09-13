---
title: PerformanceResourceTiming.requestStart
slug: Web/API/PerformanceResourceTiming/requestStart
tags:
- API
- Property
- Reference
- Web Performance
browser-compat: api.PerformanceResourceTiming.requestStart
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>The <strong><code>requestStart</code></strong> read-only property returns a
  {{domxref("DOMHighResTimeStamp","timestamp")}} of the time immediately before the
  browser starts requesting the resource from the server, cache, or local resource. If the
  transport connection fails and the browser retires the request, the value returned will
  be the start of the retry request.</p>

<p>There is no <em>end</em> property for <code>requestStart</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>resource</em>.requestStart;
</pre>

<h3 id="Return_Value">Return value</h3>

<p>A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the
  browser starts requesting the resource from the server</p>

<h2 id="Example">Example</h2>

<p>In the following example, the value of the <code>*Start</code> and <code>*End</code>
  properties of all "<code>resource</code>"
  {{domxref("PerformanceEntry.entryType","type")}} events are logged.</p>

<pre class="brush: js">function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i &lt; p.length; i++) {
    print_start_and_end_properties(p[i]);
  }
}
function print_start_and_end_properties(perfEntry) {
  // Print timestamps of the PerformanceEntry *start and *end properties
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart"];

  for (var i=0; i &lt; properties.length; i++) {
    // check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = NOT supported");
    }
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
