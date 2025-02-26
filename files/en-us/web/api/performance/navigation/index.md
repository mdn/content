---
title: "Performance: navigation property"
short-title: navigation
slug: Web/API/Performance/navigation
page-type: web-api-instance-property
status:
  - deprecated
browser-compat: api.Performance.navigation
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

The legacy
**`Performance.navigation`**
read-only property returns a {{domxref("PerformanceNavigation")}} object representing
the type of navigation that occurs in the given browsing context, such as the number of
redirections needed to fetch the resource.

This property is not available in workers.

> [!WARNING]
> This property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the
> {{domxref("PerformanceNavigationTiming")}} interface instead.

## Value

A {{domxref("PerformanceNavigation")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Performance")}} interface it belongs to.
