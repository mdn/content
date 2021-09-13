---
title: PerformanceNavigationTiming.domContentLoadedEventStart
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventStart
tags:
- API
- Property
- Reference
- Web Performance
browser-compat: api.PerformanceNavigationTiming.domContentLoadedEventStart
---
<div>{{APIRef("Navigation Timing")}}{{SeeCompatTable}}</div>

<p>The <strong><code>domContentLoadedEventStart</code></strong> read-only property returns
  a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to
  the time immediately before the user agent fires the <a
    href="https://html.spec.whatwg.org/multipage/syntax.html#the-end">DOMContentLoaded</a>
  event at the current document.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>perfEntry</em>.domContentLoadedEventStart;
</pre>

<h3 id="Return_Value">Return Value</h3>

<p>A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to
  the time immediately before the user agent fires the <a
    href="https://html.spec.whatwg.org/multipage/syntax.html#the-end">DOMContentLoaded</a>
  event at the current document.</p>

<h2 id="Example">Example</h2>

<p>The following example illustrates this property's usage.</p>

<pre class="brush: js">function print_nav_timing_data() {
  // Use getEntriesByType() to just get the "navigation" events
  var perfEntries = performance.getEntriesByType("navigation");

  for (var i=0; i &lt; perfEntries.length; i++) {
    console.log("= Navigation entry[" + i + "]");
    var p = perfEntries[i];
    // dom Properties
    console.log("DOM content loaded = " + (p.domContentLoadedEventEnd - p.domContentLoadedEventStart));
    console.log("DOM complete = " + p.domComplete);
    console.log("DOM interactive = " + p.interactive);

    // document load and unload time
    console.log("document load = " + (p.loadEventEnd - p.loadEventStart));
    console.log("document unload = " + (p.unloadEventEnd - p.unloadEventStart));

    // other properties
    console.log("type = " + p.type);
    console.log("redirectCount = " + p.redirectCount);
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
