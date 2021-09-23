---
title: PerformanceTiming.domContentLoadedEventStart
slug: Web/API/PerformanceTiming/domContentLoadedEventStart
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Read-only
  - domContentLoadedEventStart
  - legacy
browser-compat: api.PerformanceTiming.domContentLoadedEventStart
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domContentLoadedEventStart`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, right before the parser sent the
{{event("DOMContentLoaded")}} event, that is right after all the scripts that need to be
executed right after parsing has been executed.

## Syntax

```js
time = performanceTiming.domContentLoadedEventStart;
```

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
