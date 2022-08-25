---
title: PerformanceObserver.disconnect()
slug: Web/API/PerformanceObserver/disconnect
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Performance Observer API
  - PerformanceObserver
  - Reference
  - Web Performance
  - disconnect()
  - observers
browser-compat: api.PerformanceObserver.disconnect
---
{{APIRef("Performance Timeline API")}}

The **`disconnect()`** method of the
{{domxref('PerformanceObserver')}} interface is used to stop the performance observer
from receiving any {{domxref("PerformanceEntry","performance entry", '', 'true')}}
events.

## Syntax

```js
disconnect()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const observer = new PerformanceObserver((list, obj) => {
  const entries = list.getEntries();
  for (let i=0; i < entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Process the "measure" event
  // …
  // Disable additional performance events
  observer.disconnect();
}
const observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
