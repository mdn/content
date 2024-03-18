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

A {{domxref("DOMHighResTimeStamp")}} representing the duration between document prerendering start and activation in milliseconds.

The value is `0` if the page has not prerendered or is still prerendering.

## Examples

### Detecting prerendered pages

When a prerendered document is activated, `activationStart` is set to the current time. The following function can check whether a page is {{DOMxRef("Document.prerendering","prerendering")}} or has already prerendered:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### Measuring user-perceived performance milestones

With prerendered pages, a page may have been created long before it was actually navigated to. When using the [Performance API](/en-US/docs/Web/API/Performance_API) on prerendered pages, it is vital to compare returned values with `activationStart` in order to avoid misleading measurements.

```js
// Time to when activation occurred
let activationStart =
  performance.getEntriesByType("navigation")[0].activationStart;

// Time to first paint
let firstPaint = performance.getEntriesByName("first-paint")[0].startTime;

// Time to first contentful paint
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
