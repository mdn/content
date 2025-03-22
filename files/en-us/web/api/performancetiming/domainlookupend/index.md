---
title: "PerformanceTiming: domainLookupEnd property"
short-title: domainLookupEnd
slug: Web/API/PerformanceTiming/domainLookupEnd
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.domainLookupEnd
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domainLookupEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, where the domain lookup is finished. If a
persistent connection is used, or the information is stored in a cache or a local
resource, the value will be the same as {{domxref("PerformanceTiming.fetchStart")}}.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
