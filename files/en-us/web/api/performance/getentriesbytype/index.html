---
title: performance.getEntriesByType()
slug: Web/API/Performance/getEntriesByType
tags:
- API
- Method
- Reference
- Web Performance
browser-compat: api.Performance.getEntriesByType
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>The <strong><code>getEntriesByType()</code></strong> method returns a list of
  {{domxref("PerformanceEntry")}} objects for a given <em>type</em>. The list's members
  (<em>entries</em>) can be created by making performance <em>marks</em> or
  <em>measures</em> (for example by calling the {{domxref("Performance.mark","mark()")}}
  method) at explicit points in time.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax">Syntax</h2>

<pre class="brush: js"><em>entries</em> = window.performance.getEntriesByType(type);
</pre>

<h3 id="Arguments">Arguments</h3>

<dl>
  <dt>type</dt>
  <dd>The type of entry to retrieve such as "<code>mark</code>". The valid entry types are
    listed in {{domxref("PerformanceEntry.entryType")}}.</dd>
</dl>

<h3 id="Return_Value">Return value</h3>

<dl>
  <dt>entries</dt>
  <dd>A list of {{domxref("PerformanceEntry")}} objects that have the specified
    <code>type</code>. The items will be in chronological order based on the entries'
    {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects have the
    specified <code>type</code>, or no argument is provided, an empty list is returned.
  </dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush: js">function usePerformanceEntryMethods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  doWork(50000);
  performance.mark("End");
  performance.mark("Begin");
  doWork(100000);
  performance.mark("End");
  doWork(200000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  var p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    log("Entry[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (var i=0; i &lt; p.length; i++) {
    log("Begin[" + i + "]");
    checkPerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (var i=0; i &lt; p.length; i++) {
    log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (var i=0; i &lt; p.length; i++) {
    log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat}}</p>
