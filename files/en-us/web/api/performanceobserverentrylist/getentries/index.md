---
title: "PerformanceObserverEntryList: getEntries() method"
short-title: getEntries()
slug: Web/API/PerformanceObserverEntryList/getEntries
page-type: web-api-instance-method
browser-compat: api.PerformanceObserverEntryList.getEntries
---

{{APIRef("Performance API")}}

The **`getEntries()`** method of the {{domxref("PerformanceObserverEntryList")}} interface returns a list of explicitly observed {{domxref("PerformanceEntry","performance entry", '', 'true')}} objects. The list's members are determined by the set of {{domxref("PerformanceEntry.entryType","entry types", '', 'true')}} specified in the call to the {{domxref("PerformanceObserver.observe","observe()")}} method. The list is available in the observer's callback function (as the first parameter in the callback).

## Syntax

```js-nolint
getEntries()
```

### Return value

A list of explicitly observed {{domxref("PerformanceEntry")}} objects. The items will be in chronological order based on the entries' {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects are found, an empty list is returned.

## Examples

### Working with getEntries, getEntriesByName and getEntriesByType

The following example shows the difference between the `getEntries()`, {{domxref("PerformanceObserverEntryList.getEntriesByName", "getEntriesByName()")}}, and {{domxref("PerformanceObserverEntryList.getEntriesByType", "getEntriesByType()")}} methods.

```js
const observer = new PerformanceObserver((list, obs) => {
  // Log all entries
  let perfEntries = list.getEntries();
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Log entries named "debugging" with type "measure"
  perfEntries = list.getEntriesByName("debugging", "measure");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Log entries with type "mark"
  perfEntries = list.getEntriesByType("mark");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
});

// Subscribe to various performance event types
observer.observe({
  entryTypes: ["mark", "measure", "navigation", "resource"],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
