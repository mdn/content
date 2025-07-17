---
title: "PerformanceObserver: disconnect() method"
short-title: disconnect()
slug: Web/API/PerformanceObserver/disconnect
page-type: web-api-instance-method
browser-compat: api.PerformanceObserver.disconnect
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

The **`disconnect()`** method of the {{domxref('PerformanceObserver')}} interface is used to stop the performance observer from receiving any {{domxref("PerformanceEntry","performance entry", '', 'true')}} events.

## Syntax

```js-nolint
disconnect()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Stopping a performance observer

The following example disconnects the performance observer to disable receiving any more performance entry events.

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries().forEach((entry) => {
    // Process "measure" events
    // …
    // Disable additional performance events
    observer.disconnect();
  });
});
observer.observe({ entryTypes: ["mark", "measure"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
