---
title: "PerformanceTiming: requestStart property"
short-title: requestStart
slug: Web/API/PerformanceTiming/requestStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.requestStart
---

{{ APIRef("PerformanceTiming") }} {{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.requestStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the browser sent the request to obtain the
actual document, from the server or from a cache. If the transport layer fails after the
start of the request and the connection is reopened, this property will be set to the
time corresponding to the new request.

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
