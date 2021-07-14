---
title: Using the Performance API
slug: Web/API/Performance_API/Using_the_Performance_API
tags:
  - Guide
  - Performance
  - Web Performance
---
<div>{{DefaultAPISidebar("High Resolution Time")}}</div>

<p>A fundamental requirement of web performance is a precise and consistent definition of <em>time.</em> The {{domxref("DOMHighResTimeStamp")}} type (a <code>double</code>) is used by all performance interfaces to hold such time values. Additionally, there must be a way to create a <em>timestamp</em> for a specific point in time; this is done with the {{domxref("Performance.now","now()")}} method.</p>

<p>Web performance interfaces are defined in a <a href="https://www.w3.org/wiki/Web_Performance/Publications">suite of standards</a>. The <em>base</em> interface for these standards is the {{domxref("Performance")}} interface and its methods and properties are extended by different standards. This guide describes how to use the {{domxref("Performance")}} interfaces that are defined in the <a href="https://w3c.github.io/hr-time/">High-Resolution Time</a> standard. Other web performance guides (listed in the {{anch("See_also","See also")}} section) describe how to use additional methods and properties of the {{domxref("Performance")}} interface.</p>

<h2 id="High_precision_timing">High precision timing</h2>

<p><em>High precision timing</em> is achieved by using the {{domxref("DOMHighResTimeStamp")}} type for time values. The unit is milliseconds and should be accurate to 5 µs (microseconds). However, if the browser is unable to provide a time value accurate to 5 microseconds (because of hardware or software constraints, for example), the browser can represent the value as a time in milliseconds accurate to a millisecond.</p>

<p>The following code example shows the use of {{domxref("DOMHighResTimeStamp")}} and the {{domxref("Performance.now","Performance.now()")}} method. The {{domxref("Performance.now","now()")}} method returns a <em>timestamp</em> (of type {{domxref("DOMHighResTimeStamp")}}) that is a discrete point in time. By calling this method before and after a task, the time it takes to do the task can be measured.</p>

<pre class="brush: js">function calculate_time() {
  var startTime;
  var endTime;

  startTime = performance.now();
  do_task();
  endTime = performance.now();

  return (endTime - startTime);
}
</pre>

<h2 id="Serializing_the_Performance_object">Serializing the <code>Performance</code> object</h2>

<p>JSON serialization of the {{domxref("Performance")}} object is done via the {{domxref("Performance.toJSON","toJSON()")}} method. In the following example, JSON serialization for the {{domxref("Performance")}}, {{domxref("Performance.timing")}} and {{domxref("Performance.navigation")}} objects is printed in the <code>object</code> element.</p>

<pre class="brush: js">function print_json() {
  var json;
  var o = document.getElementsByTagName("output")[0];

  if (window.performance.toJSON === undefined) {
    json = "window.performance.toJSON() is NOT supported";
    o.innerHTML += json + "&lt;br&gt;";
  } else {
    var s;
    json = window.performance.toJSON();

    // Print the performance object
    s = JSON.stringify(json);
    o.innerHTML = "&lt;p&gt;performance = " + s + "&lt;/p&gt;";

    // Print the performance.timing and performance.navigation objects
    var perf = JSON.parse(s);

    var timing = perf.timing;
    o.innerHTML += "&lt;p&gt;peformance.timing = " + JSON.stringify(timing) + "&lt;/p&gt;";

    var navigation = perf.navigation;
    o.innerHTML += "&lt;p&gt;peformance.navigation = " + JSON.stringify(navigation) + "&lt;/p&gt;";
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

<p>The interfaces described in this document are defined in the <code>High Resolution Time</code> standard which has two levels:</p>

<ul>
 <li><a href="https://w3c.github.io/hr-time/">High-Resolution Time Level 2</a>; Editors Draft; Work In Progress</li>
 <li><a href="https://www.w3.org/TR/hr-time/">High-Resolution Time</a>; W3C Recommendation 17 December 2012</li>
</ul>

<h2 id="Interoperability">Interoperability</h2>

<p>As shown in the {{domxref("Performance")}} interface's <a href="/en-US/docs/Web/API/Performance#browser_compatibility">Browser Compatibility</a> table, most of the {{domxref("Performance")}} interfaces are broadly implemented by desktop browsers.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("Performance_API","Performance API Overview")}}</li>
 <li><a href="https://siusin.github.io/perf-timing-primer/">A Primer for Web Performance Timing APIs</a></li>
 <li><a href="https://docs.google.com/document/d/1ZKW9N0cteHgK91SyYQONFuy2ZW6J4Oak398niTo232E/edit">Graphic of Web Performance Layers</a></li>
 <li><a href="https://caniuse.com/#search=high-resolution-time">CanIUse data for High-Resolution Time</a></li>
 <li><a href="https://www.w3.org/wiki/Web_Performance/Publications">Web Performance Standards Status and Roadmap</a></li>
</ul>
