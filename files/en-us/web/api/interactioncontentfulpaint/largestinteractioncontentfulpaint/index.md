---
title: "InteractionContentfulPaint: largestInteractionContentfulPaint() property"
short-title: largestInteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint/LargestInteractionContentfulPaint
page-type: web-api-instance-property
browser-compat: api.InteractionContentfulPaint.LargestInteractionContentfulPaint
---

{{APIRef("Performance API")}}

The **`largestInteractionContentfulPaint`** read-only property of the {{domxref("PerformanceSoftNavigation")}} interface returns the current largest {{domxref("LargestContentfulPaint")}} relevant to this soft navigation.

This can remain the same between two `InteractionContentfulPaint` entries for the same interaction if a new contentful paint is smaller than the current largest contentful paint for that interaction. When using this API to measure {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} for soft navigations you may only be interested in the largest paint.

## Value

A {{domxref("LargestContentfulPaint")}} object representing the largest contentful paint (LCP) for this soft navigation.

## Examples

### Logging the largest contentful paint of `InteractionContentfulPaint`

In this example, calling `entry.largestInteractionContentfulPaint` returns a {{domxref("LargestContentfulPaint")}} object.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.largestInteractionContentfulPaint,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("LargestContentfulPaint")}}
