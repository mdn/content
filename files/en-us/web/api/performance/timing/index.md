---
title: Performance.timing
slug: Web/API/Performance/timing
page-type: web-api-instance-property
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - Navigation Timing
  - Performance
  - Property
  - Read-only
  - legacy
browser-compat: api.Performance.timing
---
{{APIRef("Navigation Timing")}}{{deprecated_header}}

The legacy
**`Performance.timing`** read-only
property returns a {{domxref("PerformanceTiming")}} object containing latency-related
performance information.

This property is not available in workers.

> **Warning:** This property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

## Value

A {{domxref("PerformanceTiming")}} object.

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Performance")}} interface it belongs to.
