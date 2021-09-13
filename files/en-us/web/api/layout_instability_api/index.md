---
title: Layout Instability API
slug: Web/API/Layout_Instability_API
tags:
  - API
  - Layout Instability API
  - Overview
  - Reference
browser-compat: api.LayoutShift
---
<div>{{DefaultAPISidebar("Layout Instability API")}}</div>

<p>The <strong>Layout Instability API</strong> provides interfaces for measuring and reporting layout shifts.</p>

<h2> Concepts and Usage</h2>

<p>A layout shift happens when any element that is visible in the viewport changes its start position between two frames. These elements are described as being <strong>unstable</strong>, and contribute to a poor <a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a> score, indicating a lack of visual stability.</p>

<p>The Layout Instabiliy API provides a way to measure and report on these layout shifts. All tools for debugging layout shifts, including those in DevTools, use this API. The API can also be used to observe and debug layout shifts by logging the information to the console, to send the data to a server endpoint, or to Google Analytics.</p>

<h2 id="Interfaces">Interfaces</h2>

<dl>
  <dt>{{domxref("LayoutShift")}}</dt>
  <dd>Provides insights into the stability of web pages based on movements of the elements on the page.</dd>
  <dt>{{domxref("LayoutShiftAttribution")}}</dt>
  <dd>Provides debugging information about elements which have shifted.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<p>The following example observes all layout shifts, and prints them to the console.</p>

<pre class="brush: js">new PerformanceObserver((list) => {
	console.log(list.getEntries());
}).observe({type: 'layout-shift', buffered: true});</pre>

<h2 id="Specifications">Specifications</h2>

<p>{{Specifications}}</p>

<h2 id="See_also">See also</h2>

<ul>
  <li><a href="https://web.dev/cls/">Cumulative Layout Shift</a></li>
  <li><a href="https://web.dev/debug-layout-shifts/">Debug layout shifts</a></li>
  <li><a href="https://web.dev/debug-web-vitals-in-the-field/">Debug Web Vitals in the field</a></li>
</ul>
