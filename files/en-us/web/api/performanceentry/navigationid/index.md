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

The **`navigationId`** read-only property of the {{domxref("PerformanceEntry")}} interface returns the ID of the navigation that this paint happened under.

## Value

An integer that can be matched to a corresponding {{domxref("PerformanceNavigationTiming")}} or {{domxref("PerformanceSoftNavigation")}} entry.

## Description

Using {{domxref("PerformanceSoftNavigation")}} entries, you can measure when {{glossary("Soft Navigation", "Soft Navigations")}} happened without hooking into the code that made the soft navigation.

This enables slicing the performance timeline used by the [performance APIs](/en-US/docs/Web/API/Performance_API) to attribute performance measures to the navigation they occurred under. As performance entries are emitted after the fact and may be delayed, they may relate to previous navigations; you cannot assume they relate to the current URL. The `navigationId` indicates which navigation the entry happened under.

### `navigationId` and measuring soft navigation Largest Contentful Paints

During {{glossary("Soft Navigation", "Soft Navigations")}}, paints that happen before the URL is updated will have a `navigationId` that references the location being _navigated from_. When measuring the {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} of an in-flight soft navigation, you will likely want to associate it with the location being _navigated to_. For the LCP case, {{domxref("PerformanceSoftNavigation.getLargestInteractionContentfulPaint()")}} and {{domxref("InteractionContentfulPaint.interactionId")}} are more effective at considering all relevant paints regardless of the `navigationId` when calculating that metric.

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
