---
title: PerformanceTimingConfidence
slug: Web/API/PerformanceTimingConfidence
page-type: web-api-interface
browser-compat: api.PerformanceTimingConfidence
---

{{APIRef("Performance API")}}

The **`PerformanceTimingConfidence`** interface provides access to information that indicates whether the user agent considers returned navigation metrics to be representative of the current user's device.

For example, if the browser has launched from a "cold start" before loading a website or has resource-intensive extensions running, or if other applications running on the user's device are taking up a lot of resource cycles, web pages may load more slowly as a result. In such cases, a `low` confidence {{domxref("PerformanceTimingConfidence.value", "value")}} would be returned.

This confidence measure is useful for developers when trying to determine whether a performance issue is a legitimate concern, or an outlier being caused by external factors.

The `PerformanceTimingConfidence` object for each navigation timing entry is accessed via the {{domxref("PerformanceNavigationTiming")}} interface's `confidence` property.

## Instance properties

- {{domxref("PerformanceTimingConfidence.randomizedTriggerRate")}} {{ReadOnlyInline}}
  - : A number representing a percentage value that indicates how often noise is applied when exposing the `value`.
- {{domxref("PerformanceTimingConfidence.value")}} {{ReadOnlyInline}}
  - : An enumerated value indicating a broad confidence measure of whether the user agent considers returned navigation metrics to be representative of the current user's device.

## Instance methods

- {{domxref("PerformanceTimingConfidence.toJSON()")}}
  - : Returns a JSON representation of the `PerformanceTimingConfidence` object.

## Examples

### Basic usage

This example uses a {{domxref("PerformanceObserver")}} to retrieve confidence data from observed {{domxref("PerformanceNavigationTiming")}} entries.

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

- {{domxref("PerformanceNavigationTiming")}}
