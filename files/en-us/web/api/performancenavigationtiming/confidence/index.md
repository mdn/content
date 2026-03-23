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

The **`confidence`** read-only property of the {{domxref("PerformanceNavigationTiming")}} interface returns a {{domxref("PerformanceTimingConfidence")}} object containing information that indicates whether the user agent considers returned navigation metrics to be representative of the current user's device.

For example, if the browser has launched from a "cold start" before loading a website or has resource-intensive extensions running, or if other applications running on the user's device are taking up a lot of resource cycles, web pages may load more slowly as a result. In such cases, a `low` confidence {{domxref("PerformanceTimingConfidence.value", "value")}} would be returned.

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
