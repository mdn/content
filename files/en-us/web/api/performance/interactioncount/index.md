---
title: "Performance: interactionCount property"
short-title: interactionCount
slug: Web/API/Performance/interactionCount
page-type: web-api-instance-property
browser-compat: api.Performance.interactionCount
---

{{APIRef("Performance API")}}

The read-only `performance.interactionCount` property is an `unsigned long` A count of the number of real-user interactions that have occurred on the page.

Only discrete interactions with an {{domxref("PerformanceEventTiming.interactionId")}} are counted, so scroll interactions are excluded for example.

This is useful to accurately calculate {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}}, and in particular to exclude outliers for long-lived pages as INP takes the 98th percentile of interactions for a page and so excludes 1 in every 50 interactions as "outliers" that are not reflective of overall page responsiveness.

## Value

A number. Starting at `0` and increment with each discrete interaction as measured by {{domxref("PerformanceEventTiming")}} and where an {{domxref("PerformanceEventTiming.interactionId")}} is assigned.

## Examples

### Checking the number of interactions to accurately calculate INP

```js
// For pages with a large number of interactions, recalculate INP after
// excluding 1 out of every 50 outliers.
if (performance.interactionCount > 50) {
  // (Actual calculation is complex and is not shown here)
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceEventTiming.interactionId")}}
- {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}}
