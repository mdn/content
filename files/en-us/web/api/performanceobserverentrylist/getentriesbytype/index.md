---
title: "PerformanceObserverEntryList: getEntriesByType() method"
short-title: getEntriesByType()
slug: Web/API/PerformanceObserverEntryList/getEntriesByType
page-type: web-api-instance-method
browser-compat: api.PerformanceObserverEntryList.getEntriesByType
---

{{APIRef("Performance API")}}

The **`getEntriesByType()`** method of the {{domxref("PerformanceObserverEntryList")}} returns a list of explicitly _observed_ {{domxref("PerformanceEntry","performance entry", '', 'true')}} objects for a given {{domxref("PerformanceEntry.entryType","performance entry type", '', 'true')}}. The list's members are determined by the set of {{domxref("PerformanceEntry.entryType","entry types", '', 'true')}} specified in the call to the {{domxref("PerformanceObserver.observe","observe()")}} method. The list is available in the observer's callback function (as the first parameter in the callback).

## Syntax

```js-nolint
getEntriesByType(type)
```

### Parameters

- `type`
  - : The type of entry to retrieve such as `"mark"`. The valid entry types are listed in {{domxref("PerformanceEntry.entryType")}}.

### Return value

A list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects that have the specified `type`. The items will be in chronological order based on the entries' {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects have the specified `type`, or no argument is provided, an empty list is returned.

## Examples

### Working with getEntries, getEntriesByName and getEntriesByType

The following example shows the difference between the {{domxref("PerformanceObserverEntryList.getEntries", "getEntries()")}}, {{domxref("PerformanceObserverEntryList.getEntriesByName", "getEntriesByName()")}}, and `getEntriesByType()` methods.

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
