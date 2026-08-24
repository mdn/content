---
title: "PerformanceSoftNavigation: navigationId property"
short-title: navigationId
slug: Web/API/PerformanceSoftNavigation/navigationId
page-type: web-api-instance-property
browser-compat: api.PerformanceSoftNavigation.navigationId
---

{{APIRef("Performance API")}}

The **`navigationId`** read-only property of the {{domxref("PerformanceSoftNavigation")}} interface returns an increasing integer id unique to this page load.

## Value

An integer unique to this page load.

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
