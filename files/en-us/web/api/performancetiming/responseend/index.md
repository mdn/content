---
title: "PerformanceTiming: responseEnd property"
short-title: responseEnd
slug: Web/API/PerformanceTiming/responseEnd
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.responseEnd
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.responseEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the browser received the last byte of the
response, or when the connection is closed if this happened first, from the server from
a cache or from a local resource.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
