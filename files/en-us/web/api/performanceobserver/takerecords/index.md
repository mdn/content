---
title: "PerformanceObserver: takeRecords() method"
short-title: takeRecords()
slug: Web/API/PerformanceObserver/takeRecords
page-type: web-api-instance-method
browser-compat: api.PerformanceObserver.takeRecords
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`takeRecords()`** method of the {{domxref('PerformanceObserver')}} interface returns the current list of {{domxref("PerformanceEntry")}} objects stored in the performance observer, emptying it out.

## Syntax

```js-nolint
takeRecords()
```

### Parameters

None.

### Return value

A list of {{domxref("PerformanceEntry")}} objects.

## Examples

### Taking records

The following example stores the current list of performance entries into `records` and empties the performance observer.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "mark" and "measure" events
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
const records = observer.takeRecords();
console.log(records[0].name);
console.log(records[0].startTime);
console.log(records[0].duration);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
