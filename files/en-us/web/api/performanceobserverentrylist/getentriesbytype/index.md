---
title: PerformanceObserverEntryList.getEntriesByType()
slug: Web/API/PerformanceObserverEntryList/getEntriesByType
page-type: web-api-instance-method
tags:
  - API
  - Method
  - PerformanceObserverEntryList
  - Reference
  - Web Performance
browser-compat: api.PerformanceObserverEntryList.getEntriesByType
---
{{APIRef("Performance Timeline API")}}

The **`getEntriesByType()`** method of the {{domxref("PerformanceObserverEntryList")}} returns a list of explicitly _observed_ {{domxref("PerformanceEntry","performance entry", '', 'true')}} objects for a given {{domxref("PerformanceEntry.entryType","performance entry type", '', 'true')}}. The list's members are determined by the set of {{domxref("PerformanceEntry.entryType","entry types", '', 'true')}} specified in the call to the {{domxref("PerformanceObserver.observe","observe()")}} method. The list is available in the observer's callback function (as the first parameter in the callback).

This method is exposed to {{domxref("Window")}} and {{domxref("Worker")}} interfaces.

## Syntax

```js
getEntriesByType(type)
```

### Parameters

- `type`
  - : The type of entry to retrieve such as "`frame`". The valid entry types are listed in {{domxref("PerformanceEntry.entryType")}}.

### Return value

A list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects that have the specified `type`. The items will be in chronological order based on the entries' {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects have the specified `type`, or no argument is provided, an empty list is returned.

## Examples

```js
function print_perf_entry(pe) {
  console.log(`name: ${pe.name}`);
  console.log(`entryType: ${pe.entryType}`);
  console.log(`startTime: ${pe.startTime}`);
  console.log(`duration: ${pe.duration}`);
}

// Create observer for all performance event types
const observe_all = new PerformanceObserver((list, obs) => {
  // Print all entries
  let perfEntries = list.getEntries();
  perfEntries.forEach((entry) => print_perf_entry(entry));

  // Print entries named "Begin" with type "mark"
  perfEntries = list.getEntriesByName("Begin", "mark");
  perfEntries.forEach((entry) => print_perf_entry(entry));

  // Print entries with type "mark"
  perfEntries = list.getEntriesByType("mark");
  perfEntries.forEach((entry) => print_perf_entry(entry));
});

// Subscribe to all performance event types
observe_all.observe({ entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server'] });

const observe_frame = new PerformanceObserver((list, obs) => {
  const perfEntries = list.getEntries();
  // Should only have 'frame' entries
  perfEntries.forEach((entry) => print_perf_entry(entry));
});

// Subscribe to only the 'frame' event
observe_frame.observe({entryTypes: ['frame']});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
