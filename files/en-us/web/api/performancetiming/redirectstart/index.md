---
title: PerformanceTiming.redirectStart
slug: Web/API/PerformanceTiming/redirectStart
page-type: web-api-instance-property
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Read-only
  - Reference
  - legacy
browser-compat: api.PerformanceTiming.redirectStart
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.redirectStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, the first HTTP redirect starts. If there is no
redirect, or if one of the redirect is not of the same origin, the value returned is
`0`.

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
