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

```js-nolint
disconnect()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const observer = new PerformanceObserver((list, obj) => {
  list.getEntries()
    .forEach((entry) => {
      // Process "mark" and "frame" events
    });
});
observer.observe({ entryTypes: ["mark", "frame"] });

function perfObserver(list, observer) {
  // Process the "measure" event
  // …
  // Disable additional performance events
  observer.disconnect();
}
const observer2 = new PerformanceObserver(perfObserver);
observer2.observe({ entryTypes: ["measure"] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
