---
title: performance.getEntriesByName()
slug: Web/API/Performance/getEntriesByName
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.getEntriesByName
---
{{APIRef("Performance Timeline API")}}

The **`getEntriesByName()`** method returns a list of
{{domxref("PerformanceEntry")}} objects for the given _name_ and _type_.
The list's members (_entries_) can be created by making performance
_marks_ or _measures_ (for example by calling the
{{domxref("Performance.mark","mark()")}} method) at explicit points in time.

{{AvailableInWorkers}}

## Syntax

```js
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameters

- `name`
  - : The name of the entry to retrieve.
- `type` {{optional_inline}}
  - : The type of entry to retrieve such as "`mark`". The valid entry types are
    listed in {{domxref("PerformanceEntry.entryType")}}.

### Return value

A list of {{domxref("PerformanceEntry")}} objects that have the specified
    `name` and `type`. If the `type` argument is not
    specified, only the `name` will be used to determine the entries to return.
    The items will be in chronological order based on the entries'
    {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects meet the
    specified criteria, an empty list is returned.

## Examples

```js
function use_PerformanceEntry_methods() {
  console.log("PerformanceEntry tests…");

  if (performance.mark === undefined) {
    console.error("The property performance.mark is not supported.");
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
  for (let i=0; i < p.length; i++) {
    log(`Entry[${i}]`);
    check_PerformanceEntry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (let i=0; i < p.length; i++) {
    log(`Begin[${i}]`);
    check_PerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (let i=0; i < p.length; i++) {
    log(`Mark only entry[${i}]:`);
    log(`  name      = ${p[i].name}`);
    log(`  startTime = ${p[i].startTime}`);
    log(`  duration  = ${p[i].duration}`);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (let i=0; i < p.length; i++) {
    log(`Mark and Begin entry[${i}]:`);
    log(`  name      = ${p[i].name}`);
    log(`  startTime = ${p[i].startTime}`);
    log(`  duration  = ${p[i].duration}`);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
