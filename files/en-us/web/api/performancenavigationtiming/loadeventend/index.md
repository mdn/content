---
title: PerformanceNavigationTiming.loadEventEnd
slug: Web/API/PerformanceNavigationTiming/loadEventEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.loadEventEnd
---

{{APIRef("Performance API")}}

The **`loadEventEnd`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} which is equal to the time when the load event of the current document is completed.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time when the load event of the current document is completed.

## Examples

### Measuring document loading time

The following example measures how long it takes to load a document.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  const loadingTime = entry.loadEventEnd - entry.loadEventStart;
  if (loadingTime > 0) {
    console.log(`${entry.name}:
      Document loading time: ${loadingTime}ms`);
  }
});
```

This is especially useful if a (potentially long-running) [`load`](/en-US/docs/Web/API/Window/load_event) event is used.

```js
window.addEventListener("load", (event) => {
  // Some code the browser must run
  // when loading the document
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`load`](/en-US/docs/Web/API/Window/load_event) event
