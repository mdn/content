---
title: "PerformanceTiming: loadEventEnd property"
short-title: loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.loadEventEnd
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface's {{domxref("PerformanceNavigationTiming.loadEventEnd")}} read-only property instead.

The legacy
**`PerformanceTiming.loadEventEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the {{domxref("Window/load_event", "load")}} event handler
terminated, that is when the load event is completed. If this event has not yet been
sent, or is not yet completed, it returns `0.`

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
