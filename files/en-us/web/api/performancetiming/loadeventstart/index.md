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

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface's {{domxref("PerformanceNavigationTiming.loadEventStart")}} read-only property instead.

The legacy
**`PerformanceTiming.loadEventStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the {{domxref("Window/load_event", "load")}} event was sent for the
current document. If this event has not yet been sent, it returns `0.`

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
