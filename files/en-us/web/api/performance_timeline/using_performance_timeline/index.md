---
title: Using Performance Timeline
slug: Web/API/Performance_Timeline/Using_Performance_Timeline
page-type: guide
tags:
  - Guide
  - Web Performance
---
{{DefaultAPISidebar("Performance Timeline API")}}

The **[Performance Timeline](https://w3c.github.io/performance-timeline/)** standard defines extensions to the {{domxref("Performance")}} interface to support client-side latency measurements within applications. The standard also includes interfaces that allow an application to be notified when specific performance events occur. Together, these interfaces can be used to help identify an application's performance bottlenecks.

## Performance extensions

**Performance Timeline** extends the {{domxref("Performance")}} object with three methods that provide different mechanisms to get a set of {{domxref("PerformanceEntry","performance records (metrics)")}}, depending on the specified filter criteria. The following example show the usage of these methods {{domxref("Performance.getEntries","getEntries()")}}, {{domxref("Performance.getEntriesByName","getEntriesByName()")}} and {{domxref("Performance.getEntriesByType","getEntriesByType()")}}.

```js
function log(s) {
  const o = document.getElementsByTagName("output")[0];
  o.innerHTML += `${s} <br>`;
}

function doWork(n) {
  for (let i = 0; i < n; i++) {
     const m = Math.random(); // This is an example of work taking some time
  }
}

function printPerfEntry(pe) {
  log(`name: ${pe.name}`);
  log(`entryType: ${pe.entryType}`);
  log(`startTime: ${pe.startTime}`);
  log(`duration: ${pe.duration}`);
}

function printPerformanceEntries() {
  if (performance.mark === undefined) {
    console.error("The property performance.mark is not supported.");
    return;
  }

  // Create some performance entries via the mark() and measure() methods
  performance.mark("Begin");
  doWork(50000);
  performance.mark("End");
  doWork(50000);
  performance.measure("Measure1", "Begin", "End");

  // Use getEntries() to iterate all entries
  performance.getEntries()
    .forEach((entry, i) => {
      log(`All Entry[${i}]`);
      printPerfEntry(entry);
    });

  // Use getEntries(name, entryType) to get specific entries
  performance.getEntries({ name: "Measure1", entryType: "measure" })
    .forEach((entry, i) => {
      log(`Begin and Measure [${i}]`);
      printPerfEntry(entry);
    });

  // Use getEntriesByType() to get all "mark" entries
  performance.getEntriesByType("mark")
    .forEach((entry, i) => {
      log(`Mark only [${i}]`);
      printPerfEntry(entry);
    });

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  performance.getEntriesByName("Begin", "mark")
    .forEach((entry, i) => {
      log(`Begin and Mark [${i}]`);
      printPerfEntry(entry);
    });
}
```

## PerformanceEntry interface

The {{domxref("PerformanceEntry")}} interface encapsulates a single _performance entry_ i.e. a single performance metric. This interface has four properties and a JSON _serializer_ ({{domxref("Performance.toJSON","toJSON()")}}. The following example shows the use of these properties.

```js
function printPerformanceEntry(ev) {
  const properties = ["name", "entryType", "startTime", "duration"];

  // Create a few performance entries
  performance.mark("Start");
  doWork(50000);
  performance.mark("Stop");
  performance.measure("measure-1");

  performance.getEntries()
    .forEach((perfEntry, i) => {
      log(`PerfEntry[${i}]`);
      properties.forEach((prop) => {
        // Check each property in window.performance
        const supported = prop in perfEntry;
        log(`… ${prop} = ${supported ? perfEntry[prop] : "Not supported"}`);
      });
    });
}
```

This interface also includes a {{domxref("PerformanceEntry.toJSON","toJSON()")}} method that returns the serialization of the {{domxref("PerformanceEntry")}} object. The following examples show the use of this method.

```js
function perfEntryToJSON() {
  // Create a few performance entries
  performance.mark("mark-1");
  performance.mark("mark-2");
  performance.measure("meas-1", "mark-1", "mark-2");

  const peList = performance.getEntries();
  const pe = peList[0];

  if (pe.toJSON === undefined) {
    log ("PerformanceEntry.toJSON() is NOT supported");
    return;
  }

  // Print the PerformanceEntry object
  const json = pe.toJSON();
  const s = JSON.stringify(json);
  log(`PerformanceEntry.toJSON = ${s}`);
}
```

## Performance Observers

{{SeeCompatTable}}

The _performance observer_ interfaces allow an application to register an _observer_ for specific performance event types, and when one of those event types is recorded, the application is _notified_ of the event via the observer's callback function that was specified at the time, the observer was created. When the observer (callback) is invoked the callback's parameters include a _{{domxref("PerformanceObserverEntryList","performance observer entry list")}}_ that only contains _observed_ {{domxref("PerformanceEntry","performance entries")}}. That is, the list only contains entries for the event types that were specified when the observer's {{domxref("PerformanceObserver.observe","observe()")}} method was invoked.

The following example shows how to register two observers: the first one registers for several event types and the second observer only registers for one event type.

```js
function PerformanceObservers() {
  // Create observer for all performance event types
  const observeAll = new PerformanceObserver((list, obs) => {
    // Print all entries
    list.getEntries().forEach((entry) => {
      printPerfEntry(entry);
    });

    // Print entries named "Begin" with type "mark"
    list.getEntriesByName("Begin", "mark").forEach((entry) => {
      printPerfEntry(entry);
    });

    // Print entries with type "mark"
    list.getEntriesByType("mark").forEach((entry) => {
      printPerfEntry(entry);
    });
  });

  // Subscribe to all performance event types
  observeAll.observe({
    entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server'],
  });

  // Create observer for just the "mark" event type
  const observeMark = new PerformanceObserver((list, obs) => { 
    // Should only have 'mark' entries
    list.getEntries().forEach((entry) =>  {
      printPerfEntry(entry);
    });
  });

  // Subscribe to only the 'mark' event
  observeMark.observe({ entryTypes: ['mark'] });
}

function printPerfEntry(pe) {
  log(`name: ${pe.name}`);
  log(`entryType: ${pe.entryType}`);
  log(`startTime: ${pe.startTime}`);
  log(`duration: ${pe.duration}`);
}
```

The {{domxref("PerformanceObserverEntryList","performance observer entry list")}} interface has the same three `getEntries*()` methods as the {{domxref("Performance")}} interface and these methods are used to retrieve _observed_ performance entries within the observer callback. These methods have been used in the above stated example.

## Specifications

The interfaces described in this document are defined in the **Performance Timeline** standard which has two levels:

- [Performance Timeline Level 2](https://w3c.github.io/performance-timeline/); Editors Draft; Work In Progress. This version introduces _performance observers_ (and the {{domxref("PerformanceObserver")}} and {{domxref("PerformanceObserverEntryList")}} interfaces).
- [Performance Timeline](https://www.w3.org/TR/performance-timeline/); W3C Recommendation 12 December 2013

## See also

- [Performance Timeline (Overview)](/en-US/docs/Web/API/Performance_Timeline)
- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/)
