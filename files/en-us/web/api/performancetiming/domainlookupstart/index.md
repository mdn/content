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

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
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

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
