---
title: LayoutShift
slug: Web/API/LayoutShift
tags:
  - API
  - Interface
  - Layout Instability API
  - LayoutShift
  - Performance
  - Reference
  - Web Performance
browser-compat: api.LayoutShift
---
<p>The <code>LayoutShift</code> interface of the Layout Instability API provides insights into the stability of web pages based on movements of the elements on the page.</p>

<h2 id="Properties">Properties</h2>

<dl>
 <dt><strong><code>{{domxref("LayoutShift.value")}}</code></strong></dt>
 <dd>Returns the <code>impact fraction</code> (fraction of the viewport that was shifted) times the <code>distance fraction</code> (distance moved as a fraction of viewport).</dd>
 <dt><strong><code>{{domxref("LayoutShift.hadRecentInput")}}</code></strong></dt>
 <dd>Returns <code>true</code> if there was a user input in the past 500 milliseconds.</dd>
 <dt><strong><code>{{domxref("LayoutShift.lastInputTime")}}</code></strong></dt>
 <dd>Returns the time of the most recent user input.</dd>
 <dt><strong><code>{{domxref("LayoutShift.sources")}}</code></strong></dt>
 <dd>Returns an array of {{domxref('LayoutShiftAttribution')}} objects with information on the elements that were shifted.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt><strong><code>{{domxref("LayoutShift.toJSON()")}}</code></strong></dt>
 <dd>Converts the properties to JSON.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example shows how to capture layout shifts and log them to the console.</p>

<p>Note that in this example data is only sent to the server when the user leaves the tab.</p>

<pre class="brush: js">// Catch errors since some browsers throw when using the new `type` option.
// https://bugs.webkit.org/show_bug.cgi?id=209216
try {
  let cumulativeLayoutShiftScore = 0;

  const observer = new PerformanceObserver((list) =&gt; {
  for (const entry of list.getEntries()) {
    // Only count layout shifts without recent user input.
    if (!entry.hadRecentInput) {
      cumulativeLayoutShiftScore += entry.value;
    }
  }
  });

  observer.observe({type: 'layout-shift', buffered: true});

  document.addEventListener('visibilitychange', () =&gt; {
  if (document.visibilityState === 'hidden') {
    // Force any pending records to be dispatched.
    observer.takeRecords();
    observer.disconnect();

    console.log('CLS:', cumulativeLayoutShiftScore);
  }
  });
} catch (e) {
  // Do nothing if the browser doesn't support this API.
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
