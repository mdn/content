---
title: PerformanceNavigationTiming.domContentLoadedEventEnd
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.domContentLoadedEventEnd
---

{{APIRef("Performance API")}}

The **`domContentLoadedEventEnd`** read-only property returns a {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately after the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event completes.

Typically frameworks and libraries wait for the `DOMContentLoaded` event before starting to run their code. We can use the `domContentLoadedEventEnd` and the [`domContentLoadedEventStart`](/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) properties to calculate how long this takes to run.

## Value

A {{domxref("DOMHighResTimeStamp","timestamp")}} representing the time value equal to the time immediately after the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event completes.

## Examples

### Measuring `DOMContentLoaded` processing time

The following example measures how long it takes process the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  const domContentLoadedTime = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
   console.log(`${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [DOMContentLoaded](/en-US/docs/Web/API/Document/DOMContentLoaded_event)
