---
title: PerformanceResourceTiming.connectEnd
slug: Web/API/PerformanceResourceTiming/connectEnd
tags:
- API
- Property
- Reference
- Web Performance
browser-compat: api.PerformanceResourceTiming.connectEnd
---
<div>{{APIRef("Resource Timing API")}}</div>

<p>The <strong><code>connectEnd</code></strong> read-only property returns the
  {{domxref("DOMHighResTimeStamp","timestamp")}} immediately after the browser finishes
  establishing the connection to the server to retrieve the resource. The timestamp value
  includes the time interval to establish the transport connection, as well as other time
  intervals such as SSL handshake and SOCKS authentication.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>resource</em>.connectEnd;
</pre>

<h3 id="Return_Value">Return value</h3>

<p>A {{domxref("DOMHighResTimeStamp")}} representing the time after a connection is
  established.</p>

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
  // Print timestamps of the *start and *end properties
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
