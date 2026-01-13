---
title: "Performance: interactionCount property"
short-title: interactionCount
slug: Web/API/Performance/interactionCount
page-type: web-api-instance-property
browser-compat: api.Performance.interactionCount
---

{{APIRef("Performance API")}}

The read-only `performance.interactionCount` property represents the number of real-user interactions that have occurred on the page since the page was loaded.

Only discrete interactions with an {{domxref("PerformanceEventTiming.interactionId", "interactionId")}} (such as clicks and key events) are counted — so, for example, scroll interactions are excluded.

This is useful when calculating {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}}, and in particular to exclude outliers for long-lived pages. INP takes the 98th percentile of interactions for a page and so excludes 1 in every 50 interactions as "outliers" that are not reflective of overall page responsiveness.

## Value

A number, which is initially `0`, and increments by `1` with each discrete interaction as measured by {{domxref("PerformanceEventTiming")}}, where an {{domxref("PerformanceEventTiming.interactionId")}} is assigned.

## Examples

### Checking the number of interactions to accurately calculate INP

For pages with a large number of interactions, recalculate INP after
excluding 1 out of every 50 outliers.

```js
if (performance.interactionCount >= 50) {
  recalculateINP(); // Actual calculation is complex and is not shown here
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
