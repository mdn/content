---
title: performance.getEntriesByType()
slug: Web/API/Performance/getEntriesByType
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.getEntriesByType
---

{{APIRef("Performance API")}}

The **`getEntriesByType()`** method returns a list of
{{domxref("PerformanceEntry")}} objects for a given _type_. The list's members
(_entries_) can be created by making performance _marks_ or
_measures_ (for example by calling the {{domxref("Performance.mark","mark()")}}
method) at explicit points in time.

{{AvailableInWorkers}}

## Syntax

```js-nolint
getEntriesByType(type)
```

### Parameters

- `type`
  - : The type of entry to retrieve such as "`mark`". The valid entry types are
    listed in {{domxref("PerformanceEntry.entryType")}}.

### Return value

A list of {{domxref("PerformanceEntry")}} objects that have the specified
`type`. The items will be in chronological order based on the entries'
{{domxref("PerformanceEntry.startTime","startTime")}}. If no objects have the
specified `type`, or no argument is provided, an empty list is returned.

## Examples

```js
function usePerformanceEntryMethods() {
  console.log("PerformanceEntry tests…");

  if (performance.mark === undefined) {
    console.error("The property performance.mark is not supported");
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
  performance.getEntries()
    .forEach((entry, i) => {
      console.log(`Entry[${i}]`);
      checkPerformanceEntry(entry);
    });

  // Use getEntries(name, entryType) to get specific entries
  performance.getEntries({ name: "Begin", entryType: "mark" })
    .forEach((entry, i) => {
      console.log(`Begin[${i}]`);
      checkPerformanceEntry(entry);
    });

  // Use getEntriesByType() to get all "mark" entries
  performance.getEntriesByType("mark")
    .forEach((entry, i) => {
      console.log(`Mark only entry[${i}]:`);
      checkPerformanceEntry(entry);
    });

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  performance.getEntriesByName("Begin", "mark")
    .forEach((entry, i) => {
      console.log(`Mark and Begin entry[${i}]:`);
      checkPerformanceEntry(entry);
    });
}

function checkPerformanceEntry(obj) {
  const properties = ["name", "entryType", "startTime", "duration"];
  const methods = ["toJSON"];

  // Check each property
  properties.forEach((property) => {
    const supported = property in obj;
    console.log(`…${property} = ${supported ? obj[property] : "Not supported"}`);
  });

  // Check each method
  methods.forEach((method) => {
    const supported = typeof obj[method] === "function";
    console.log(`…${method} = ${supported ? JSON.stringify(obj[method]()) : "Not supported"}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
