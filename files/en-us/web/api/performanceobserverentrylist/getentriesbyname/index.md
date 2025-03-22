---
title: "PerformanceObserverEntryList: getEntriesByName() method"
short-title: getEntriesByName()
slug: Web/API/PerformanceObserverEntryList/getEntriesByName
page-type: web-api-instance-method
browser-compat: api.PerformanceObserverEntryList.getEntriesByName
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`getEntriesByName()`** method of the {{domxref("PerformanceObserverEntryList")}} interface returns a list of explicitly observed {{domxref("PerformanceEntry")}} objects for a given {{domxref("PerformanceEntry.name","name")}} and {{domxref("PerformanceEntry.entryType","entryType")}}. The list's members are determined by the set of {{domxref("PerformanceEntry.entryType","entry types", '', 'entry')}} specified in the call to the {{domxref("PerformanceObserver.observe","observe()")}} method. The list is available in the observer's callback function (as the first parameter in the callback).

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameters

- `name`
  - : A string representing the name of the entry to retrieve.
- `type` {{optional_inline}}
  - : A string representing the type of entry to retrieve such as `"mark"`. The valid entry types are listed in {{domxref("PerformanceEntry.entryType")}}.

### Return value

A list of explicitly _observed_ {{domxref("PerformanceEntry","performance entry", '', 'true')}} objects that have the specified `name` and `type`. If the `type` argument is not specified, only the `name` will be used to determine the entries to return. The items will be in chronological order based on the entries' {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects meet the specified criteria, an empty list is returned.

## Examples

### Working with getEntries, getEntriesByName and getEntriesByType

The following example shows the difference between the {{domxref("PerformanceObserverEntryList.getEntries", "getEntries()")}}, `getEntriesByName()`, and {{domxref("PerformanceObserverEntryList.getEntriesByType", "getEntriesByType()")}} methods.

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
