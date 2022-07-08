---
title: PerformanceTiming.domComplete
slug: Web/API/PerformanceTiming/domComplete
page-type: web-api-instance-property
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - HTML
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Read-only
  - legacy
browser-compat: api.PerformanceTiming.domComplete
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domComplete`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the parser finished its work on the main
document, that is when its {{domxref("Document.readyState")}} changes to
`'complete'` and the corresponding {{domxref("Document/readystatechange_event", "readystatechange")}} event is
thrown.

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
