---
title: PerformanceNavigationTiming.domContentLoadedEventStart
slug: Web/API/PerformanceNavigationTiming/domContentLoadedEventStart
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Web Performance
browser-compat: api.PerformanceNavigationTiming.domContentLoadedEventStart
---

{{APIRef("Performance API")}}

The **`domContentLoadedEventStart`** read-only property returns a {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler starts.

Typically frameworks and libraries wait for the `DOMContentLoaded` event before starting to run their code. We can use the `domContentLoadedEventStart` and the [`domContentLoadedEventEnd`](/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd) properties to calculate how long this takes to run.

## Value

A {{domxref("DOMHighResTimeStamp")}} representing the time immediately before the current document's [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler starts.

## Examples

### Measuring `DOMContentLoaded` event handler time

The following example measures how long it takes process the [`DOMContentLoaded`](/en-US/docs/Web/API/Document/DOMContentLoaded_event) event handler.

```js
const resources = performance.getEntriesByType("navigation");
resources.forEach((entry) => {
  const domContentLoadedTime =
    entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
  console.log(
    `${entry.name}: DOMContentLoaded processing time: ${domContentLoadedTime}ms`
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [DOMContentLoaded](/en-US/docs/Web/API/Document/DOMContentLoaded_event)
