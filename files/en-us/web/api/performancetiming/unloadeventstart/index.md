---
title: "PerformanceTiming: unloadEventStart property"
short-title: unloadEventStart
slug: Web/API/PerformanceTiming/unloadEventStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.unloadEventStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.unloadEventStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, the {{domxref("Window/unload_event", "unload")}} event has been thrown. If
there is no previous document, or if the previous document, or one of the needed
redirects, is not of the same origin, the value returned is `0`.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
