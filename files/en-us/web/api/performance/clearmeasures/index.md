---
title: "Performance: clearMeasures() method"
short-title: clearMeasures()
slug: Web/API/Performance/clearMeasures
page-type: web-api-instance-method
browser-compat: api.Performance.clearMeasures
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`clearMeasures()`** method removes all or specific {{domxref("PerformanceMeasure")}} objects from the browser's performance timeline.

## Syntax

```js-nolint
clearMeasures()
clearMeasures(name)
```

### Parameters

- `name` {{optional_inline}}
  - : A string representing the {{domxref("PerformanceEntry.name", "name")}} of the {{domxref("PerformanceMeasure")}} object. If this argument is omitted, all entries with an {{domxref("PerformanceEntry.entryType","entryType")}} of `"measure"` will be removed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Removing measures

To clean up all performance measure, or just specific entries, use the `clearMeasures()` method like this:

```js
// Create a bunch of measures
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

performance.getEntriesByType("measure").length; // 5

// Delete just the "from navigation" measure entries
performance.clearMeasures("from navigation");
performance.getEntriesByType("measure").length; // 3

// Delete all of the measure entries
performance.clearMeasures();
performance.getEntriesByType("measure").length; // 0
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceMeasure")}}
