---
title: "InteractionContentfulPaint: largestContentfulPaint property"
short-title: largestContentfulPaint
slug: Web/API/InteractionContentfulPaint/largestContentfulPaint
page-type: web-api-instance-property
browser-compat: api.InteractionContentfulPaint.largestContentfulPaint
---

{{APIRef("Performance API")}}

The **`largestContentfulPaint`** read-only property of the {{domxref("PerformanceSoftNavigation")}} interface returns the current largest {{domxref("LargestContentfulPaint")}} relevant to this soft navigation.

This can remain the same between two `InteractionContentfulPaint` entries for the same interaction if a new contentful paint is smaller than the current largest contentful paint for that interaction. When using this API to measure {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} for soft navigations you may only be interested in the largest paint.

Note that, in current implementations, `InteractionContentfulPaint` is scoped to increasing paint sizes, so it can be used to measure {{Glossary("Largest Contentful Paint", "Largest Contentful Paint (LCP)")}} for {{glossary("Soft Navigation", "Soft Navigations")}}; the `largestContentfulPaint` value should change each time. However, the API has been designed to allow for all paints relevant to an interaction to be emitted, so this is liable to change.

## Value

A {{domxref("LargestContentfulPaint")}} object representing the largest contentful paint (LCP) for this interaction contentful paint.

## Examples

### Logging the largest contentful paint of `InteractionContentfulPaint`

In this example, calling `entry.largestContentfulPaint` returns a {{domxref("LargestContentfulPaint")}} object.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.largestContentfulPaint,
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
