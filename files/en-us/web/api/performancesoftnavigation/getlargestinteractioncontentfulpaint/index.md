---
title: "PerformanceSoftNavigation: getLargestInteractionContentfulPaint() method"
short-title: getLargestInteractionContentfulPaint()
slug: Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint
page-type: web-api-instance-method
browser-compat: api.PerformanceSoftNavigation.getLargestInteractionContentfulPaint
---

{{APIRef("Performance API")}}

The **`getLargestInteractionContentfulPaint()`** method of the {{domxref("PerformanceSoftNavigation")}} interface returns the current largest {{domxref("InteractionContentfulPaint")}} relevant to this soft navigation.

Some {{Glossary("SPA", "Single Page Applications (SPAs)")}} may paint first, and update the URL afterwards. When measuring {{Glossary("Largest contentful paint", "Largest Contentful Paint (LCP)")}} for {{Glossary("soft navigations")}} developers will want to include these paints, despite them happing before the URL updates. Since developers will not know if an interaction and a paint, may also result in a URL update and so a soft navigation, they would need to measure and buffer all `InteractionContentfulPaint` entries.

The `getLargestInteractionContentfulPaint()` method avoids developers having to do that by providing a means to get the latest, largest `InteractionContentfulPaint` for the soft navigation.

It is a method and not a static property as it returns the latest, largest entry and so may return different results over time if increasing `InteractionContentfulPaint` entries are recorded after the soft navigation.

## Syntax

```js-nolint
getLargestInteractionContentfulPaint()
```

### Parameters

None.

### Return value

A {{domxref("InteractionContentfulPaint")}} object representing the largest `InteractionContentfulPaint` for this soft navigation.

## Examples

### Using the `getLargestInteractionContentfulPaint` method

In this example, calling `entry.getLargestInteractionContentfulPaint()` returns a JSON representation of the `LargestContentfulPaint` object.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Soft Nav:",
      entry.startTime,
      entry.getLargestInteractionContentfulPaint(),
    );
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

To get a JSON string, you can use [`JSON.stringify(entry)`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) directly; it will call `toJSON()` automatically.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("InteractionContentfulPaint")}}
