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

{{APIRef("Performance API")}}

The **`getEntriesByName()`** method returns a list of
{{domxref("PerformanceEntry")}} objects for the given _name_ and _type_.
The list's members (_entries_) can be created by making performance
_marks_ or _measures_ (for example by calling the
{{domxref("Performance.mark","mark()")}} method) at explicit points in time.

{{AvailableInWorkers}}

## Syntax

```js-nolint
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
function usePerformanceEntryMethods() {
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
    console.log(`…${method} = ${supported ? obj[method] : "Not supported"}`);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
