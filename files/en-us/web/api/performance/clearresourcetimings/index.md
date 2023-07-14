---
title: "Performance: clearResourceTimings() method"
short-title: clearResourceTimings()
slug: Web/API/Performance/clearResourceTimings
page-type: web-api-instance-method
browser-compat: api.Performance.clearResourceTimings
---

{{APIRef("Performance API")}}

The **`clearResourceTimings()`** method removes all performance entries with an {{domxref("PerformanceEntry.entryType","entryType")}} of "`resource`" from the browser's performance timeline and sets the size of the performance resource data buffer to zero.

To set the size of the browser's performance resource data buffer, use the
{{domxref("Performance.setResourceTimingBufferSize()")}} method.

To get notified when the browser's resource timing buffer is full, listen for the {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}} event.

## Syntax

```js-nolint
clearResourceTimings()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Clearing the performance resource data buffer

To remove all resource performance entries from the buffer, call the `clearResourceTimings()` at an appropriate point in your code or paste it into the console.

```js
performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

### Taking records and emptying performance observers

When using {{domxref("PerformanceObserver")}} objects (especially with the `buffered` flag set to `true`), the performance resource buffer might get full quickly. However, instead of clearing the buffer, you can also store the current list of performance entries and empty the performance observer using the {{domxref("PerformanceObserver.takeRecords()")}} method. This works with all kinds of performance entry types, not just "`resource`" entries.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    // do something with the entries
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });

// Store entries and empty performance observer
const records = observer.takeRecords();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Performance.setResourceTimingBufferSize()")}}
- {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
