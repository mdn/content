---
title: "PerformanceNavigationTiming: confidence property"
short-title: confidence
slug: Web/API/PerformanceNavigationTiming/confidence
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceNavigationTiming.confidence
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`confidence`** read-only property of the {{domxref("PerformanceNavigationTiming")}} interface returns a {{domxref("PerformanceTimingConfidence")}} object containing information that indicates whether the user agent considers returned navigation metrics to be free from external system load unrelated to the page.

For example, if a website has loaded after a browser "cold start" or session restore, its pages may load more slowly as a result. In such cases, a `low` confidence {{domxref("PerformanceTimingConfidence.value", "value")}} would be returned for an associated performance record. On the other hand, if the browser determines a returned performance record to be representative of typical application performance, a `high` confidence value is returned.

This confidence measure is useful for developers when trying to determine whether a performance issue is a legitimate concern, or an outlier being caused by external factors.

## Value

A {{domxref("PerformanceTimingConfidence")}} object.

## Examples

### Basic usage

This example uses a {{domxref("PerformanceObserver")}} to retrieve confidence data from observed {{domxref("PerformanceNavigationTiming")}} entries. The {{domxref("PerformanceTimingConfidence.value", "value")}} property is an enumerated value of `low` or `high`, indicating a broad confidence measure, whereas the {{domxref("PerformanceTimingConfidence.randomizedTriggerRate", "randomizedTriggerRate")}} property is a number inside the interval `0` to `1` inclusive, representing a percentage value that indicates how often noise is applied when exposing the `value`.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `${entry.name} confidence: ${entry.confidence.value}`,
      `Trigger rate: ${entry.confidence.randomizedTriggerRate}`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceTimingConfidence")}}
