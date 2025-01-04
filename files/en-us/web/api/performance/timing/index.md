---
title: "Performance: timing property"
short-title: timing
slug: Web/API/Performance/timing
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Performance.timing
---

{{APIRef("Performance API")}}{{deprecated_header}}

The legacy
**`Performance.timing`** read-only
property returns a {{domxref("PerformanceTiming")}} object containing latency-related
performance information.

This property is not available in workers.

> [!WARNING]
> This property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the {{domxref("PerformanceNavigationTiming")}}
> interface instead.

## Value

A {{domxref("PerformanceTiming")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Performance")}} interface it belongs to.
