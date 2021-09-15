---
title: PerformanceTiming.connectEnd
slug: Web/API/PerformanceTiming/connectEnd
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Read-only
  - legacy
browser-compat: api.PerformanceTiming.connectEnd
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.connectEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, where the connection is opened network. If the
transport layer reports an error and the connection establishment is started again, the
last connection establisment end time is given. If a persistent connection is used, the
value will be the same as {{domxref("PerformanceTiming.fetchStart")}}. A connection is
considered as opened when all secure connection handshake, or SOCKS authentication, is
terminated.

## Syntax

```js
time = performanceTiming.connectEnd;
```

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
