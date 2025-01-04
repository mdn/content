---
title: "PerformanceTiming: connectEnd property"
short-title: connectEnd
slug: Web/API/PerformanceTiming/connectEnd
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.PerformanceTiming.connectEnd
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

> [!WARNING]
> This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.connectEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, where the connection is opened network. If the
transport layer reports an error and the connection establishment is started again, the
last connection establishment end time is given. If a persistent connection is used, the
value will be the same as {{domxref("PerformanceTiming.fetchStart")}}. A connection is
considered as opened when all secure connection handshake, or SOCKS authentication, is
terminated.

## Value

An `unsigned long long`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
