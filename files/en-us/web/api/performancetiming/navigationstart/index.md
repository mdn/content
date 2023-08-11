---
title: "PerformanceTiming: navigationStart property"
short-title: navigationStart
slug: Web/API/PerformanceTiming/navigationStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.navigationStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete).
> Please use the {{domxref("PerformanceNavigationTiming")}} interface instead.

The legacy
**`PerformanceTiming.navigationStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, right after the prompt for unload terminates on
the previous document in the same browsing context. If there is no previous document,
this value will be the same as {{domxref("PerformanceTiming.fetchStart")}}.

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
