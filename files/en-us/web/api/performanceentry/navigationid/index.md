---
title: "PerformanceEntry: navigationId property"
short-title: navigationId
slug: Web/API/PerformanceEntry/navigationId
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.PerformanceEntry.navigationId
---

{{APIRef("Performance API")}}

The **`navigationId`** read-only property of the {{domxref("PerformanceEntry")}} interface returns the id of the navigation that this paint is happened under.

## Value

An integer that can be matches to a corresponding {{domxref("PerformanceNavigationTiming")}} or a {{domxref("PerformanceSoftNavigation")}} entry.

## Description

With the introduction of {{domxref("PerformanceSoftNavigation")}} entries it became possible to measure when {{glossary("Soft Navigation", "Soft Navigations")}} happened even without hooking into the framework making the soft navigation.

This allows slicing of the performance timeline used by [performance APIs](/en-US/docs/Web/API/Performance_API) to attribute the performance measures to the appropriate navigation they occurred under. As performance entries are emitted after the fact, and may be delayed, they may related to previous navigations and cannot be assumed to be related to the current URL. The `navigationId` indicates which navigation the entry happened under.

### `navigationId` and measuring soft navigation Largest Contentful Paints

During {{glossary("Soft Navigation", "Soft Navigations")}}, paints can happen before the URL is updated and so `navigationId` will be the navigation being _navigated from_. For measuring the {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} of the soft navigation that is in flight, you will likely want to consider this under the navigation being _navigated too_. For the LCP case, {{domxref("PerformanceSoftNavigation.getLargestInteractionContentfulPaint()")}} and {{domxref("InteractionContentfulPaint.interactionId")}} are more effective for calculating that metric to consider all relevant paints regardless of the `navigationId`.

## Examples

### Logging the `navigationId` of the soft navigation

This example uses a {{domxref("PerformanceObserver")}} to log new `soft-navigation` performance entries as they are recorded in the browser's performance timeline. The `buffered` option is used to access entries from before the observer creation.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.navigationId);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
