---
title: PerformanceNavigationTiming.unloadEventStart
slug: Web/API/PerformanceNavigationTiming/unloadEventStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.unloadEventStart
---

{{APIRef("Performance API")}}

The **`unloadEventStart`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent starts the unload event of the previous document.

## Value

The `unloadEventStart` property can have the following values:

- A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately before the user agent starts the unload event of the previous document.
- `0` if there is no previous document.
- `0` if the previous page was on another origin.

## Examples

### Measuring document unloading time

The following example measures how long it takes to unload a document.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  const unloadingTime = entry.unloadEventEnd - entry.unloadEventStart;
  if (unloadingTime > 0) {
    console.log(`${entry.name}:
      Document unloading time: ${unloadingTime}ms`);
  }
});
```

This is especially useful if a (potentially long-running) [`unload`](/en-US/docs/Web/API/Window/unload_event) event is used.

```js
window.addEventListener("unload", (event) => {
  // Some code the browser must run
  // before it can navigate to the next page
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`unload`](/en-US/docs/Web/API/Window/unload_event) event
