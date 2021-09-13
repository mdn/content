---
title: performance.getEntries()
slug: Web/API/Performance/getEntries
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

General syntax:

```js
entries = window.performance.getEntries();
```

### Return value

- entries
  - : An array of {{domxref("PerformanceEntry")}} objects. The items will be in
    chronological order based on the entries'
    {{domxref("PerformanceEntry.startTime","startTime")}}.

## Example

```js
function use_PerformanceEntry_methods() {
  console.log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark Not supported");
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
  let p = performance.getEntries();
  for (var i=0; i < p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (let i=0; i < p.length; i++) {
    console.log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (let i=0; i < p.length; i++) {
    console.log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
