---
title: PerformanceObserverEntryList.getEntries()
slug: Web/API/PerformanceObserverEntryList/getEntries
page-type: web-api-instance-method
tags:
  - API
  - Method
  - PerformanceObserverEntryList
  - Reference
  - Web Performance
browser-compat: api.PerformanceObserverEntryList.getEntries
---
{{APIRef("Performance Timeline API")}}

The **`getEntries()`** method of the
{{domxref("PerformanceObserverEntryList")}} interface returns a list of explicitly
_observed_ {{domxref("PerformanceEntry","performance entry", '', 'true')}}
objects for a given filter. The list's members are determined by the set of
{{domxref("PerformanceEntry.entryType","entry types", '', 'true')}} specified in the
call to the {{domxref("PerformanceObserver.observe","observe()")}} method. The list is
available in the observer's callback function (as the first parameter in the callback).

This method is exposed to {{domxref("Window")}} and {{domxref("Worker")}}
interfaces.

## Syntax

```js
getEntries()
getEntries(performanceEntryFilterOptions)
```

### Parameters

- `performanceEntryFilterOptions` {{optional_inline}}

  - : A `PerformanceEntryFilterOptions` object, having the following
    fields:

    - `"name"`, the name of a performance entry.
    - `"entryType"`, the entry type. The valid entry types are listed in
      the {{domxref("PerformanceEntry.entryType")}} method.
    - `"initiatorType"`, the type of the initiating resource (for example
      an HTML element). The values are defined by the
      {{domxref("PerformanceResourceTiming.initiatorType")}} interface.

    This parameter is currently not supported on Chrome or Opera.

### Return value

A list of explicitly _observed_ {{domxref("PerformanceEntry")}} objects that
meets the criteria of the filter. The items will be in chronological order based on the
entries' {{domxref("PerformanceEntry.startTime","startTime")}}. If no objects that meet
the filter are found, an empty list is returned. If no argument is given, all entries
are returned.

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
observe_all.observe({
  entryTypes: ['frame', 'mark', 'measure', 'navigation', 'resource', 'server'],
});

const observe_frame = new PerformanceObserver((list, obs) => {
  const perfEntries = list.getEntries();

  // Should only have 'frame' entries
  perfEntries.forEach((entry) => print_perf_entry(entry));
});

// Subscribe to frame event only
observe_frame.observe({entryTypes: ['frame']});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
