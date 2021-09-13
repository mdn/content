---
title: PerformanceObserver.takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
tags:
  - API
  - Method
  - Performance Observer API
  - PerformanceObserver
  - Reference
  - observers
  - takeRecords()
browser-compat: api.PerformanceObserver.takeRecords
---
{{APIRef("Performance Timeline API")}}

The **`takeRecords()`** method of the
{{domxref('PerformanceObserver')}} interface returns the current list of
{{domxref("PerformanceEntry","performance entries")}} stored in the performance
observer, emptying it out.

## Syntax

```js
var performanceEntryList = performanceObserver.takeRecords();
```

### Parameters

None.

### Return value

A list of {{domxref("PerformanceEntry")}} objects.

## Example

```js
var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});
var records = observer.takeRecords();
console.log(records[0].name);
console.log(records[0].startTime);
console.log(records[0].duration);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
