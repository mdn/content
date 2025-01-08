---
title: "PerformanceLongTaskTiming: attribution property"
short-title: attribution
slug: Web/API/PerformanceLongTaskTiming/attribution
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceLongTaskTiming.attribution
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

The **`attribution`** read-only property of the {{domxref("PerformanceLongTaskTiming")}} interface returns an array of {{domxref('TaskAttributionTiming')}} objects.

## Value

An {{jsxref("Array")}} of {{domxref('TaskAttributionTiming')}} objects.

## Examples

### Logging attributions for long tasks

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.attribution.forEach((attributionEntry) => {
      console.log(attributionEntry);
    });
  });
});

observer.observe({ type: "longtask", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref('TaskAttributionTiming')}}
