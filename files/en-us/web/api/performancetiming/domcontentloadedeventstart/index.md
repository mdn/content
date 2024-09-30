---
title: "PerformanceTiming: domContentLoadedEventStart property"
short-title: domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.domContentLoadedEventStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domContentLoadedEventStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, right before the parser sent the
{{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} event, that is right after all the scripts that need to be
executed right after parsing has been executed.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
