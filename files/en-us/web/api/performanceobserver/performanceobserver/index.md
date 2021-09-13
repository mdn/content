---
title: PerformanceObserver()
slug: Web/API/PerformanceObserver/PerformanceObserver
tags:
- API
- Constructor
- PerformanceObserver
- Reference
- Web Performance
browser-compat: api.PerformanceObserver.PerformanceObserver
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>The <strong><code>PerformanceObserver()</code></strong> constructor creates a new
  {{domxref("PerformanceObserver")}} object with the given observer <code>callback</code>.
  The observer callback is invoked when {{domxref("PerformanceEntry","performance entry
  events", '', 'true')}} are recorded for the
  {{domxref("PerformanceEntry.entryType","entry types",'','true')}} that have been
  registered, via the {{domxref("PerformanceObserver.observe","observe()")}} method.</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js">var observer = new PerformanceObserver(<em>callback</em>);
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
  <dt><em><code>callback</code></em></dt>
  <dd>A <code>PerformanceObserverCallback</code> callback that will be invoked when
    <em>observed</em> performance events are recorded. When the callback is invoked, its
    first parameter is a {{domxref("PerformanceObserverEntryList","list of performance
    observer entries", '', 'true')}} and the second parameter is the
    {{domxref("PerformanceObserver","observer")}} object.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>A new {{domxref("PerformanceObserver")}} object which will call the specified
  <code>callback</code> when observed performance events occur.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i &lt; entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Process the "measure" event
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
