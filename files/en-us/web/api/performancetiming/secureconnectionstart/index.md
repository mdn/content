---
title: "PerformanceTiming: secureConnectionStart property"
short-title: secureConnectionStart
slug: Web/API/PerformanceTiming/secureConnectionStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.secureConnectionStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}} interface instead.

The legacy
**`PerformanceTiming.secureConnectionStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, where the secure connection handshake starts. If
no such connection is requested, it returns `0`.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
