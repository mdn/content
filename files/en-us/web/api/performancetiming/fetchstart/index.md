---
title: "PerformanceTiming: fetchStart property"
short-title: fetchStart
slug: Web/API/PerformanceTiming/fetchStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.fetchStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.fetchStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, the browser is ready to fetch the document using
an HTTP request. This moment is _before_ the check to any application cache.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
