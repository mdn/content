---
title: "PerformanceNavigationTiming: activationStart property"
short-title: activationStart
slug: Web/API/PerformanceNavigationTiming/activationStart
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceNavigationTiming.activationStart
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

The **`activationStart`** read-only property represents the time between when a document starts prerendering and when it is activated.

## Value

A number, representing the duration between document prerendering start and activation, in seconds.

## Examples

### Detecting prerendered pages

When a prerendered document is activated, `activationStart` is set to a non-zero time. The following function can check for prerendering _and_ prerendered pages:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### Measuring user-perceived performance milestones

With prerendered pages, a page may have been created long before it was actually navigated to. When conducting performance measurements on prerendered pages, it is vital to use `activationStart` to avoid misleading measurements.

```js
// When the activation navigation started
let activationStart =
  performance.getEntriesByType("navigation")[0].activationStart;

// When First Paint occurred
let firstPaint = performance.getEntriesByName("first-paint")[0].startTime;

// When First Contentful Paint occurred
let firstContentfulPaint = performance.getEntriesByName(
  "first-contentful-paint",
)[0].startTime;

console.log("time to first paint: " + (firstPaint - activationStart));
console.log(
  "time to first-contentful-paint: " + (firstContentfulPaint - activationStart),
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Speculation Rules API](/en-US/docs/Web/API/Speculation_Rules_API)
- [Speculative loading](/en-US/docs/Web/Performance/Speculative_loading)
