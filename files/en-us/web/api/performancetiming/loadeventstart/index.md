---
title: "PerformanceTiming: loadEventStart property"
short-title: loadEventStart
slug: Web/API/PerformanceTiming/loadEventStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.loadEventStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface's {{domxref("PerformanceNavigationTiming.loadEventStart")}} read-only property instead.

The legacy
**`PerformanceTiming.loadEventStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the {{domxref("Window/load_event", "load")}} event was sent for the
current document. If this event has not yet been sent, it returns `0.`

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
