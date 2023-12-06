---
title: "PerformanceTiming: connectStart property"
short-title: connectStart
slug: Web/API/PerformanceTiming/connectStart
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.connectStart
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.connectStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, where the request to open a connection is sent to
the network. If the transport layer reports an error and the connection establishment is
started again, the last connection establishment start time is given. If a persistent
connection is used, the value will be the same as
{{domxref("PerformanceTiming.fetchStart")}}.

## Value

An `unsigned long long`.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
