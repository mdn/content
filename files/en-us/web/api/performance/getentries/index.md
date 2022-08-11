---
title: performance.getEntries()
slug: Web/API/Performance/getEntries
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.getEntries
---
{{APIRef("Performance Timeline API")}}

The **`getEntries()`** method returns a list of all
{{domxref("PerformanceEntry")}} objects for the page. The list's members
(_entries_) can be created by making performance _marks_ or
_measures_ (for example by calling the {{domxref("Performance.mark","mark()")}}
method) at explicit points in time. If you are only interested in performance entries of
certain types or that have certain names, see {{domxref("Performance.getEntriesByType",
  "getEntriesByType()")}} and {{domxref("Performance.getEntriesByName",
  "getEntriesByName()")}}.

{{AvailableInWorkers}}

## Syntax

```js
getEntries()
```

### Parameters

None.

### Return value

- entries
  - : An array of {{domxref("PerformanceEntry")}} objects. The items will be in
    chronological order based on the entries'
    {{domxref("PerformanceEntry.startTime","startTime")}}.

## Examples

```js
function use_PerformanceEntry_methods() {
  console.log("PerformanceEntry tests…");

  if (performance.mark === undefined) {
    console.error("The property performance.mark is not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  performance.mark("Begin");
  do_work(100000);
  performance.mark("End");
  do_work(200000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  let perf = performance.getEntries();
  perf.forEach((entry, i) => {
    log(`Entry[${i}]`);
    checkPerformanceEntry(entry);
  });

  // Use getEntriesByType() to get all "mark" entries
  perf = performance.getEntriesByType("mark");
  perf.forEach((entry, i) => {
    log(`Mark only entry[${i}]:`);
    log(`  name      = ${entry.name}`);
    log(`  startTime = ${entry.startTime}`);
    log(`  duration  = ${entry.duration}`);
  });

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  perf = performance.getEntriesByName("Begin", "mark");
  perf.forEach((entry, i) => {
    log(`Mark and Begin entry[${i}]:`);
    log(`  name      = ${perf.name}`);
    log(`  startTime = ${perf.startTime}`);
    log(`  duration  = ${perf.duration}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
