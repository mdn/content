---
title: PerformanceTiming.fetchStart
slug: Web/API/PerformanceTiming/fetchStart
page-type: web-api-instance-property
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - HTTP request
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Read-only
  - Reference
  - legacy
browser-compat: api.PerformanceTiming.fetchStart
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.fetchStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, the browser is ready to fetch the document using
an HTTP request. This moment is _before_ the check to any application cache.

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs
  to.**`PerformanceTiming.fetchStart`**
