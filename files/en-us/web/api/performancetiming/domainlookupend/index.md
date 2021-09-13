---
title: PerformanceTiming.domainLookupEnd
slug: Web/API/PerformanceTiming/domainLookupEnd
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - PerformanceTiming
  - Property
  - Reference
  - fetchStart
  - legacy
browser-compat: api.PerformanceTiming.domainLookupEnd
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

> **Warning:** This interface of this property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

The legacy
**`PerformanceTiming.domainLookupEnd`**
read-only property returns an `unsigned long long` representing the moment,
in milliseconds since the UNIX epoch, where the domain lookup is finished. If a
persistent connection is used, or the information is stored in a cache or a local
resource, the value will be the same as {{domxref("PerformanceTiming.fetchStart")}}.

## Syntax

```js
time = performanceTiming.domainLookupEnd;
```

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("PerformanceTiming")}} interface it belongs to.
