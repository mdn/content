---
title: User Timing API
slug: Web/API/User_Timing_API
tags:
  - Guide
  - Overview
  - Web Performance
---
<div>{{DefaultAPISidebar("User Timing API")}}</div>

<p>The <strong><code>User Timing</code></strong> interface allows the developer to create application specific {{domxref("DOMHighResTimeStamp","timestamps")}} that are part of the browser's <em>performance timeline</em>. There are two types of <em>user</em> defined timing event types: the "<code>mark</code>" {{domxref("PerformanceEntry.entryType","event type")}} and the "<code>measure</code>" {{domxref("PerformanceEntry.entryType","event type")}}.</p>

<p><code><strong>mark</strong></code> events are <em>named</em> by the application and can be set at any location in an application. <code><strong>measure</strong></code> events are also <em>named</em> by the application but they are placed between two marks thus they are effectively a <em>midpoint</em> between two marks.</p>

<p>This document provides an overview of the <code>mark</code> and <code>measure</code> {{domxref("PerformanceEntry.entryType","performance event types")}} including the four <code>User Timing</code> methods that extend the {{domxref("Performance")}} interface. For more details and example code regarding these two performance event types and the methods, see <a href="/en-US/docs/Web/API/User_Timing_API/Using_the_User_Timing_API">Using the User Timing API</a>.</p>

<h2 id="Performance_marks">Performance <code>marks</code></h2>

<p>A performance <code><strong>mark</strong></code> is a <em>named</em> {{domxref("PerformanceEntry","performance entry")}} that is created by the application. The mark is a {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's <em>performance timeline</em>.</p>

<h3 id="Creating_a_performance_mark">Creating a performance <code>mark</code></h3>

<p>The {{domxref("Performance.mark","performance.mark()")}} method is used to create a performance mark. The method takes one argument, the <em>name</em> of the mark (for example <code>performance.mark("mark-1")</code>).</p>

<p>The <code>mark's</code> {{domxref("PerformanceEntry","performance entry")}} will have the following property values:</p>

<ul>
 <li>{{domxref("PerformanceEntry.entryType","entryType")}} - set to "<code>mark</code>".</li>
 <li>{{domxref("PerformanceEntry.name","name")}} - set to the "<code>name</code>" given when the mark was created.</li>
 <li>{{domxref("PerformanceEntry.startTime","startTime")}} - set to the {{domxref("DOMHighResTimeStamp","timestamp")}} when <code>mark()</code> was called.</li>
 <li>{{domxref("PerformanceEntry.duration","duration")}} - set to "<code>0</code>" (a mark has no <em>duration</em>).</li>
</ul>

<h3 id="Retrieving_performance_marks">Retrieving performance <code>marks</code></h3>

<p>The {{domxref("Performance")}} interface has three methods that can be used to retrieve a mark:</p>

<dl>
 <dt>{{domxref("Performance.getEntries","performance.getEntries()")}}</dt>
 <dd>Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline. Finding only <code>mark</code> entries requires checking each entry's {{domxref("PerformanceEntry.entryType","entryType")}} for "<code>mark</code>".</dd>
 <dt>{{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}}</dt>
 <dd>Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified <code>name</code> and <code>entryType</code>, thus set <code>entryType</code> to "<code>mark</code>" to get all marks (and set <code>name</code> accordingly to retrieve more specific entries).</dd>
 <dt>{{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}</dt>
 <dd>Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified <code>entryType</code>, thus set <code>entryType</code> to "<code>mark</code>" to get all marks.</dd>
</dl>

<h3 id="Removing_performance_marks">Removing performance <code>marks</code></h3>

<p>To remove a specific mark from the performance timeline, call <code>performance.clearMarks(name)</code> where <code>name</code> is the name of the mark(s) you want removed. If this method is called with no arguments, all mark type entries will be removed from the performance timeline.</p>

<h2 id="Performance_measures">Performance <code>measures</code></h2>

<p><code><strong>measure</strong></code> events are also <em>named</em> by the application but they are placed between two marks thus they are effectively a <em>midpoint</em> between two marks.</p>

<h3 id="Creating_a_performance_measure">Creating a performance <code>measure</code></h3>

<p>A <code>measure</code> is created by calling <code>performance.measure(measureName, startMarkName, endMarkName)</code> where <code>measureName</code> is the measure's name and <code>startMarkName</code> and <code>endMarkName</code> are the start and end names, respectively, of the marks the measure will be placed between (in the performance timeline).</p>

<p>The <code>measure's</code> {{domxref("PerformanceEntry","performance entry")}} will have the following property values:</p>

<ul>
 <li>{{domxref("PerformanceEntry.entryType","entryType")}} - set to "<code>measure</code>".</li>
 <li>{{domxref("PerformanceEntry.name","name")}} - set to the "<code>name</code>" given when the measure was created.</li>
 <li>{{domxref("PerformanceEntry.startTime","startTime")}} - set to the {{domxref("DOMHighResTimeStamp","timestamp")}} when <code>measure()</code> was called.</li>
 <li>{{domxref("PerformanceEntry.duration","duration")}} - set to a {{domxref("DOMHighResTimeStamp")}} that is the duration of the measure (typically, the end mark timestamp minus the start mark timestamp).</li>
</ul>

<h3 id="Retrieving_performance_measures">Retrieving performance <code>measures</code></h3>

<p>The {{domxref("Performance")}} interface has three methods that can be used to retrieve a measure:</p>

<dl>
 <dt>{{domxref("Performance.getEntries","performance.getEntries()")}}</dt>
 <dd>Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline. Finding the <code>measure</code> entries requires checking each entry's {{domxref("PerformanceEntry.entryType","entryType")}} for "<code>measure</code>".</dd>
 <dt>{{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}}</dt>
 <dd>Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified <code>name</code> and <code>entryType</code>, thus set <code>entryType</code> to "<code>measure</code>" to get all measures (and set <code>name</code> accordingly to retrieve more specific entries).</dd>
 <dt>{{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}</dt>
 <dd>Returns all {{domxref("PerformanceEntry","performance entries")}} in the performance timeline with the specified <code>entryType</code>, thus set <code>entryType</code> to "<code>measure</code>" to get all measures.</dd>
</dl>

<h3 id="Removing_performance_measures">Removing performance <code>measures</code></h3>

<p>To remove a specific measure from the performance timeline, call <code>performance.clearMeasures(name)</code> where <code>name</code> is the name of the measure(s) you want removed. If this method is called with no arguments, all measure type entries will be removed from the performance timeline.</p>

<h2 id="Interoperability">Interoperability</h2>

<p>As shown in the {{domxref("Performance")}} interface's <a href="/en-US/docs/Web/API/Performance#browser_compatibility">Browser Compatibility</a> table, the <code>User Timing</code> methods are broadly implemented by desktop and mobile browsers (the only exceptions are  Desktop Safari and Mobile Safari, however <a href="https://developer.apple.com/safari/technology-preview/release-notes/#r24">the Safari Technology Preview 24 has support</a>).</p>

<p>To test your browser's support for this API, run the <code><a href="https://mdn.github.io/dom-examples/performance-apis/perf-api-support.html">perf-api-support</a></code> application.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="https://w3c.github.io/user-timing/">User Timing Standard</a>; W3C Editor's Draft</li>
 <li><a href="https://caniuse.com/#search=user-timing">CanIUse data</a></li>
 <li><a href="https://siusin.github.io/perf-timing-primer/">A Primer for Web Performance Timing APIs</a>; Xiaoqian Wu; W3C Editor's Draft</li>
</ul>
