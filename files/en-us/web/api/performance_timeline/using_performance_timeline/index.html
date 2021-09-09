---
title: Using Performance Timeline
slug: Web/API/Performance_Timeline/Using_Performance_Timeline
tags:
  - Guide
  - Web Performance
---
<div>{{DefaultAPISidebar("Performance Timeline API")}}</div>

<p>The <strong><a href="https://w3c.github.io/performance-timeline/">Performance Timeline</a></strong> standard defines extensions to the {{domxref("Performance")}} interface to support client-side latency measurements within applications. The standard also includes interfaces that allow an application to be notified when specific performance events occur. Together, these interfaces can be used to help identify an application's performance bottlenecks.</p>

<h2 id="Performance_extensions">Performance extensions</h2>

<p><strong>Performance Timeline</strong> extends the {{domxref("Performance")}} object with three methods that provide different mechanisms to get a set of {{domxref("PerformanceEntry","performance records (metrics)")}}, depending on the specified filter criteria. The following example show the usage of these methods {{domxref("Performance.getEntries","getEntries()")}}, {{domxref("Performance.getEntriesByName","getEntriesByName()")}} and {{domxref("Performance.getEntriesByType","getEntriesByType()")}}.</p>

<pre class="brush: js">function log(s) {
  var o = document.getElementsByTagName("output")[0];
  o.innerHTML += s + " &lt;br&gt;";
}
function do_work (n) {
  for (var i=0 ; i &lt; n; i++) {
     var m = Math.random();
  }
}
function print_perf_entry(pe) {
  log("..name: "        + pe.name      +
      "; entryType: " + pe.entryType +
      "; startTime: " + pe.startTime +
      "; duration: "  + pe.duration);
}
function print_PerformanceEntries() {
  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() and measure() methods
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  do_work(50000);
  performance.measure("Measure1", "Begin", "End");

  // Use getEntries() to iterate all entries
  var p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    log("All Entry[" + i + "]");
    print_perf_entry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  p = performance.getEntries({name : "Measure1", entryType: "measure"});
  for (var i=0; i &lt; p.length; i++) {
    log("Begin and Measure [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (var i=0; i &lt; p.length; i++) {
    log ("Mark only [" + i + "]");
    print_perf_entry(p[i]);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (var i=0; i &lt; p.length; i++) {
    log ("Begin and Mark [" + i + "]");
    print_perf_entry(p[i]);
  }
}
</pre>

<h2 id="PerformanceEntry_interface">PerformanceEntry interface</h2>

<p>The <code>{{domxref("PerformanceEntry")}}</code> interface encapsulates a single <em>performance entry</em> i.e. a single performance metric. This interface has four properties and a JSON <em>serializer</em> ({{domxref("Performance.toJSON","toJSON()")}}. The following example shows the use of these properties.</p>

<pre class="brush: js">function print_PerformanceEntry(ev) {
  var properties = ["name", "entryType", "startTime", "duration"];

  // Create a few performance entries
  performance.mark("Start");
  do_work(50000);
  performance.mark("Stop");
  performance.measure("measure-1");

  var p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    log("PerfEntry[" + i + "]");
    for (var j=0; j &lt; properties.length; j++) {
      // check each property in window.performance
      var supported = properties[j] in p[i];
      if (supported) {
        var pe = p[i];
        log("... " + properties[j] + " = " + pe[properties[j]]);
      } else {
        log("... " + properties[j] + " = Not supported");
      }
    }
  }
}
</pre>

<p>This interface also includes a {{domxref("PerformanceEntry.toJSON","toJSON()")}} method that returns the serialization of the {{domxref("PerformanceEntry")}} object. The following examples show the use of this method.</p>

<pre class="brush: js">function PerfEntry_toJSON() {

  // Create a few performance entries
  performance.mark("mark-1");
  performance.mark("mark-2");
  performance.measure("meas-1", "mark-1", "mark-2");

  var peList = performance.getEntries();
  var pe = peList[0];

  if (pe.toJSON === undefined) {
    log ("PerformanceEntry.toJSON() is NOT supported");
    return;
  }

  // Print the PerformanceEntry object
  var json = pe.toJSON();
  var s = JSON.stringify(json);
  log("PerformanceEntry.toJSON = " + s);
}
</pre>

<h2 id="Performance_Observers">Performance Observers</h2>

<p>{{SeeCompatTable}}</p>

<p>The <em>performance observer</em> interfaces allow an application to register an <em>observer</em> for specific performance event types, and when one of those event types is recorded, the application is <em>notified</em> of the event via the observer's callback function that was specified at the time, the observer was created. When the observer (callback) is invoked  the callback's parameters include a <em>{{domxref("PerformanceObserverEntryList","performance observer entry list")}}</em> that only contains <em>observed</em> {{domxref("PerformanceEntry","performance entries")}}. That is, the list only contains entries for the event types that were specified when the observer's {{domxref("PerformanceObserver.observe","observe()")}} method was invoked.</p>

<p>The following example shows how to register two observers: the first one registers for several event types and the second observer only registers for one event type.</p>

<pre class="brush: js">function PerformanceObservers() {
  // Create observer for all performance event types
  var observe_all = new PerformanceObserver(function(list, obs) {
    var perfEntries;

    // Print all entries
    perfEntries = list.getEntries();
    for (var i=0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }

    // Print entries named "Begin" with type "mark"
    perfEntries = list.getEntriesByName("Begin", "mark");
    for (var i=0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }

    // Print entries with type "mark"
    perfEntries = list.getEntriesByType("mark");
    for (var i=0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }
  });
  // subscribe to all performance event types
  observe_all.observe({entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server']});

  // Create observer for just the "mark" event type
  var observe_mark = new PerformanceObserver(function(list, obs) {
    var perfEntries = list.getEntries();
    // Should only have 'mark' entries
    for (var i=0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
    }
  });
  // subscribe to only the 'mark' event
  observe_mark.observe({entryTypes: ['mark']});
}
function print_perf_entry(pe) {
  log("name: "        + pe.name      +
      "; entryType: " + pe.entryType +
      "; startTime: " + pe.startTime +
      "; duration: "  + pe.duration);
}
</pre>

<p>The {{domxref("PerformanceObserverEntryList","performance observer entry list")}} interface has the same three <code>getEntries*()</code> methods as the {{domxref("Performance")}} interface and these methods are used to retrieve <em>observed</em> performance entries within the observer callback. These methods have been used in the above stated example.</p>

<h2 id="Specifications">Specifications</h2>

<p>The interfaces described in this document are defined in the <strong>Performance Timeline</strong> standard which has two levels:</p>

<ul>
 <li><a href="https://w3c.github.io/performance-timeline/">Performance Timeline Level 2</a>; Editors Draft; Work In Progress. This version introduces <em>performance observers</em> (and the {{domxref("PerformanceObserver")}} and {{domxref("PerformanceObserverEntryList")}} interfaces).</li>
 <li><a href="https://www.w3.org/TR/performance-timeline/">Performance Timeline</a>; W3C Recommendation 12 December 2013</li>
</ul>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Performance_Timeline">Performance Timeline (Overview)</a></li>
 <li><a href="https://siusin.github.io/perf-timing-primer/">A Primer for Web Performance Timing APIs</a></li>
</ul>
