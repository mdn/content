---
title: Using the User Timing API
slug: Web/API/User_Timing_API/Using_the_User_Timing_API
page-type: guide
tags:
  - Guide
  - Web Performance
---
{{DefaultAPISidebar("User Timing API")}}

The **`User Timing`** interface allows the developer to create application specific {{domxref("DOMHighResTimeStamp","timestamps")}} that are part of the browser's _performance timeline_. There are two types of _user_ defined timing entry types: the "`mark`" {{domxref("PerformanceEntry.entryType","entry type")}} and the "`measure`" {{domxref("PerformanceEntry.entryType","entry type")}}.

**`mark`** events are _named_ by the application and can be set at any location in an application. **`measure`** events are also _named_ by the application but they are placed between two marks thus they are effectively a _midpoint_ between two marks.

This document shows how to create `mark` and `measure` {{domxref("PerformanceEntry.entryType","performance entry types")}} and how to use `User Timing` methods (which are extensions of the {{domxref("Performance")}} interface) to retrieve and remove entries from the browser's _performance timeline_.

A _live_ version of the examples is available on [GitHub](https://mdn.github.io/dom-examples/performance-apis/Using_the_User_Timing_API.html), as is the [source code](https://github.com/mdn/dom-examples/blob/main/performance-apis/Using_the_User_Timing_API.html). Pull requests, enhancement requests and [bug reports](https://github.com/mdn/dom-examples/issues) are welcome.

## Performance `marks`

A performance **`mark`** is a _named_ {{domxref("PerformanceEntry","performance entry")}} that is created by the application at some location in an application. The mark is a {{domxref("DOMHighResTimeStamp","timestamp")}} in the browser's _performance timeline_.

### Creating a performance `mark`

The {{domxref("Performance.mark","performance.mark()")}} method is used to create a performance mark. The method takes one argument, the _name_ of the mark, as shown in the following example.

```js
function create_marks(ev) {
  if (performance.mark === undefined) {
    log("Create Marks: performance.mark Not supported", 0);
    return;
  } else {
    log("Create marks", 0);
    // Create several performance marks including two with the same name
    performance.mark("mark-1");
    do_work(50000);
    performance.mark("mark-2");
    do_work(50000);
    performance.mark("mark-2");
    const marks = ["mark-1", "mark-2", "mark-2"];
    marks.forEach((mark) => {
      log(`... Created mark = ${mark}`, 0);
    });
  }
}
```

### Retrieving performance `marks`

The {{domxref("Performance")}} interface has three methods to retrieve marks. The following examples shows how to use each of these methods ({{domxref("Performance.getEntries","performance.getEntries()")}}, {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}, and {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}} ) to retrieve one or more marks.

```js
function display_marks(ev) {
  if (performance.getEntries === undefined) {
    log("Display Marks: performance.getEntries Not supported", 0);
    return;
  }
  log("Display marks", 0);

  // Display each mark using getEntries()
  let entries = performance.getEntries();
  let j=0;
  entries.forEach((entry, i) => {
    if (entry.entryType === "mark") {
      if (j === 0) { log("= getEntries()", 0); j++ }
      log(`... [${i}] = ${entry.name}`, 0);
    };
  });

  // Display each mark using getEntriesByType()
  entries = performance.getEntriesByType("mark");
  entries.forEach((entry, i) => {
    if (i === 0) log("= getEntriesByType('mark')", 0);
    log(`... [${i}] = ${entry.name}`, 0);
  });

  // Display each mark using getEntriesName(); must look for each mark separately
  entries = performance.getEntriesByName("mark-1","mark");
  entries.forEach((entry, i) => {
    if (i === 0) log("= getEntriesByName('mark-1', 'mark')", 0);
    log(`... ${entry.name}`, 0);
  });
  entries = performance.getEntriesByName("mark-2","mark");
  entries.forEach((entry, i) => {
    if (i === 0) log("= getEntriesByName('mark-2', 'mark')", 0);
    log(`... ${entry.name}`, 0);
  });
}
```

### Removing performance `marks`

The {{domxref("Performance.clearMarks","performance.clearMarks()")}} method is used to remove one or more marks from the browser's performance timeline. If a specific mark _name_ is given to this method, only the mark(s) with that name will be removed. However, if no argument is given, then all {{domxref("PerformanceEntry","performance entries")}} of type "`mark`" will be removed from the performance timeline. The following example demonstrates both uses of this method.

```js
function clear_marks(obj) {
  if (performance.clearMarks === undefined) {
    log("Clear Marks: performance.clearMarks Not supported", 0);
    return;
  }
  log("Clear marks", 0);

  if (typeof obj === "string") {
    log(`... cleared '${obj}' mark(s)`, 0);
    performance.clearMarks(obj);
  } else {
    // No argument specified so clear all marks
    log("... cleared All marks", 0);
    performance.clearMarks();
  }
}
```

## Performance `measures`

A **`measure`** performance entry type is _named_ by the application and its {{domxref("DOMHighResTimeStamp","timestamp")}} is placed between two _named_ marks thus a measure is effectively a _midpoint_ between two marks in the browser's performance timeline.

### Creating a performance `measure`

A `measure` is created by calling `performance.measure(measureName, startMarkName, endMarkName)` where `measureName` is the measure's name and `startMarkName` and `endMarkName` are the start and end names, respectively, of the marks the measure will be placed between (in the performance timeline).

```js
function create_measures(ev) {
  if (performance.measure === undefined) {
    log("Create Measures: performance.measure Not supported", 1);
    return;
  }
  log("Create measures", 1);

  // Create several performance marks
  performance.mark("mark-A");
  do_work(50000);
  performance.mark("mark-B");

  performance.mark("mark-C");
  do_work(50000);
  performance.mark("mark-D");

  // Create some measures
  performance.measure("measure-1", "mark-A", "mark-B");
  performance.measure("measure-2", "mark-C", "mark-D");

  // Log the marks and measures
  const marks = ["mark-A", "mark-B", "mark-C", "mark-D"];
  marks.forEach((mark) => {
    log(`... Created mark = ${mark}`, 1);
  });
  const measures = ["measures-1", "measures-2"];
  measures.forEach((measure) => {
    log(`... Created measure = ${measure}`, 1);
  });
}
```

### Retrieving performance `measures`

The {{domxref("Performance")}} interface has three methods to retrieve measures. The following examples shows how to use each of these methods ({{domxref("Performance.getEntries","performance.getEntries()")}}, {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}}, and {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}}) to retrieve one or more measures.

```js
function display_measures(ev) {
  if (performance.getEntries === undefined) {
    log("Display Measures: performance.getEntries Not supported", 1);
    return;
  }
  log("Display measures", 1);

  // Display each measure using getEntries()
  let entries = performance.getEntries();
  let j=0;
  entries.forEach((entry, i) => {
    if (entry.entryType === "measure") {
      if (j === 0) { log("= getEntries()", 1); j++ }
      log(`... [${i}] = ${entry.name}`, 1);
    }
  });

  // Display each measure using getEntriesByType
  entries = performance.getEntriesByType("measure");
  entries.forEach((entry, i) => {
    if (i === 0) log("= getEntriesByType('measure')", 1);
    log(`... [${i}] = ${entry.name}`, 1);
  });

  // Display each measure using getEntriesName() - have to look for each measure separately
  entries = performance.getEntriesByName("measure-1","measure");
  entries.forEach((entry, i) => {
    if (i === 0) log("= getEntriesByName('measure-1', 'measure')", 1);
    log(`... ${entry.name}`, 1);
  });
  entries = performance.getEntriesByName("measure-2","measure");
  entries.forEach((entry, i) => {
    if (i === 0) log("= getEntriesByName('measure-2', 'measure')", 1);
    log(`... ${entry.name}`, 1);
  });
}
```

### Removing performance `measures`

The {{domxref("Performance.clearMeasures","performance.clearMeasures()")}} method is used to remove _measures_ from the browser's performance timeline. If the method is called with a specific measure name, all measures with that name will be removed from the timeline. If the method is called with no arguments, all {{domxref("PerformanceEntry","performance entries")}} with a type of "`measure`" will be removed from the timeline. The following examples shows both uses of this method.

```js
function clear_measures(obj) {
  if (performance.clearMeasures === undefined) {
    log("Clear Measures: performance.clearMeasures Not supported", 1);
    return;
  }
  log("Clear measures", 1);

  if (typeof obj === "string") {
    log(`... cleared '${obj}' measure(s)`, 1);
    performance.clearMeasures(obj);
  } else {
    // No argument specified so clear all measures
    log("... cleared All measures", 1);
    performance.clearMeasures();
  }
}
```

## Interoperability

As shown in the {{domxref("Performance")}} interface's [Browser Compatibility](/en-US/docs/Web/API/Performance#browser_compatibility) table, the `User Timing` methods are broadly implemented by desktop and mobile browsers (the only exceptions are no support for Desktop Safari and Mobile Safari).

## See also

- [User Timing Standard](https://w3c.github.io/user-timing/); W3C Editor's Draft
- [A Primer for Web Performance Timing APIs](https://siusin.github.io/perf-timing-primer/); Xiaoqian Wu; W3C Editor's Draft
