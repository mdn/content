---
title: Performance.navigation
slug: Web/API/Performance/navigation
tags:
  - API
  - Backwards compatibility
  - Deprecated
  - HTTP
  - Navigation Timing
  - Performance
  - Property
  - Read-only
  - legacy
browser-compat: api.Performance.navigation
---
{{APIRef("Navigation Timing")}}{{Deprecated_Header}}

The legacy
**`Performance.navigation`**
read-only property returns a {{domxref("PerformanceNavigation")}} object representing
the type of navigation that occurs in the given browsing context, such as the number of
redirections needed to fetch the resource.

This property is not available in workers.

> **Warning:** This property is deprecated in the [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete). Please use the
> {{domxref("PerformanceNavigationTiming")}} interface instead.

## Syntax

```js
navObject = performance.navigation;
```

## Specifications

This feature is no longer on track to become a standard, as the [Navigation Timing specification](https://w3c.github.io/navigation-timing/#obsolete) has marked it as deprecated.
Use the {{domxref("PerformanceNavigationTiming")}} interface instead.

## Browser compatibility

{{Compat}}

## See also

- The {{domxref("Performance")}} interface it belongs to.
