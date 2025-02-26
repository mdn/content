---
title: "PerformanceTiming: redirectEnd property"
short-title: redirectEnd
slug: Web/API/PerformanceTiming/redirectEnd
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.redirectEnd
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.redirectEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, the last HTTP redirect is completed, that is when
the last byte of the HTTP response has been received. If there is no redirect, or if one
of the redirect is not of the same origin, the value returned is `0`.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Performance")}} interface it belongs to.
