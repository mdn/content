---
title: PerformanceTiming.loadEventEnd
slug: Web/API/PerformanceTiming/loadEventEnd
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Event Handler
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Read-only
  - Reference
  - legacy
browser-compat: api.PerformanceTiming.loadEventEnd
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface's {{domxref("PerformanceNavigationTiming.loadEventEnd")}} read-only property instead.

The legacy
**`PerformanceTiming.loadEventEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, when the {{event("load")}} event handler
terminated, that is when the load event is completed. If this event has not yet been
sent, or is not yet completed, it returns `0.`

## Syntax

```js
time = performanceTiming.loadEventEnd;
```

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
