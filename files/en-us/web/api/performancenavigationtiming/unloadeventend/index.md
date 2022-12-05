---
title: PerformanceNavigationTiming.unloadEventEnd
slug: Web/API/PerformanceNavigationTiming/unloadEventEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.unloadEventEnd
---

{{APIRef("Performance API")}}

The **`unloadEventEnd`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the current document's [`unload`](/en-US/docs/Web/API/Window/unload_event) event handler completes.

## Value

The `unloadEventEnd` property can have the following values:

- A {{domxref("DOMHighResTimeStamp")}} representing the time immediately after the current document's [`unload`](/en-US/docs/Web/API/Window/unload_event) event handler completes.
- `0` if there is no previous document.
- `0` if the previous page was on another origin.

## Examples

### Measuring `unload` event handler time

The following example measures how long it takes to process the `unload` event handler.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  const unloadEventTime = entry.unloadEventEnd - entry.unloadEventStart;
  if (unloadEventTime > 0) {
    console.log(`${entry.name}:
      unload event handler time: ${unloadEventTime}ms`);
  }
});
```

This is especially useful to measure the time of long running [`unload`](/en-US/docs/Web/API/Window/load_event) event handlers.

```js
window.addEventListener("unload", (event) => {
  // Some long running code
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`unload`](/en-US/docs/Web/API/Window/unload_event) event
