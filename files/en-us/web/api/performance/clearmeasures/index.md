---
title: performance.clearMeasures()
slug: Web/API/Performance/clearMeasures
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - Web Performance
browser-compat: api.Performance.clearMeasures
---
{{APIRef("User Timing API")}}

The **`clearMeasures()`** method removes the _named
measure_ from the browser's performance entry buffer. If the method is called with
no arguments, all {{domxref("PerformanceEntry","performance entries")}} with an
{{domxref("PerformanceEntry.entryType","entry type")}} of "`measure`" will be
removed from the performance entry buffer.

{{AvailableInWorkers}}

## Syntax

```js
clearMeasures()
clearMeasures(name)
```

### Parameters

- `name` {{optional_inline}}
  - : A string representing the name of the timestamp. If this argument
    is omitted, all {{domxref("PerformanceEntry","performance entries")}} with an
    {{domxref("PerformanceEntry.entryType","entry type")}} of "`measure`" will
    be removed.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example shows both uses of the `clearMeasures()` method.

```js
// Create a small helper to show how many PerformanceMeasure entries there are.
function logMeasureCount() {
  console.log(
    `Found this many entries: ${performance.getEntriesByType("measure").length}`
  );
}

// Create a bunch of measures.
performance.measure("from navigation");
performance.mark("a");
performance.measure("from mark a", "a");
performance.measure("from navigation");
performance.measure("from mark a", "a");
performance.mark("b");
performance.measure("between a and b", "a", "b");

logMeasureCount() // "Found this many entries: 5"

// Delete just the "from navigation" PerformanceMeasure entries.
performance.clearMeasures("from navigation");
logMeasureCount() // "Found this many entries: 3"

// Delete all of the PerformanceMeasure entries.
performance.clearMeasures();
logMeasureCount() // "Found this many entries: 0"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
