---
title: "PerformanceTiming: domLoading property"
short-title: domLoading
slug: Web/API/PerformanceTiming/domLoading
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.domLoading
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domLoading`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the parser started its work, that is when its
{{domxref("Document.readyState")}} changes to `'loading'` and the
corresponding {{domxref("Document/readystatechange_event", "readystatechange")}} event is thrown.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
