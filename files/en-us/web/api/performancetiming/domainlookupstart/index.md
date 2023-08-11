---
title: "PerformanceTiming: domainLookupStart property"
short-title: domainLookupStart
slug: Web/API/PerformanceTiming/domainLookupStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.domainLookupStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domainLookupStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, where the domain lookup starts. If a persistent
connection is used, or the information is stored in a cache or a local resource, the
value will be the same as {{domxref("PerformanceTiming.fetchStart")}}.

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
