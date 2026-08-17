---
title: "PerformanceSoftNavigation: getLargestInteractionContentfulPaint() method"
short-title: getLargestInteractionContentfulPaint()
slug: Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint
page-type: web-api-instance-method
browser-compat: api.PerformanceSoftNavigation.getLargestInteractionContentfulPaint
---

{{APIRef("Performance API")}}

The **`getLargestInteractionContentfulPaint()`** method of the {{domxref("PerformanceSoftNavigation")}} interface returns the current largest {{domxref("InteractionContentfulPaint")}} relevant to this soft navigation.

Some {{Glossary("SPA", "Single Page Applications (SPAs)")}} may paint first and update the URL afterwards. Despite this, developers will want to include these paints when measuring {{Glossary("Largest contentful paint", "Largest Contentful Paint (LCP)")}} for {{Glossary("Soft navigation", "soft navigations")}}. Because interaction with any paints could also lead to a URL update and thus a soft navigation at any point in the future, this could be difficult to measure without potentially saving a temporary reference to every interaction's LCP, should it be needed.

The `getLargestInteractionContentfulPaint()` method avoids developers having to do that by providing a means to get the latest, largest `InteractionContentfulPaint` for the soft navigation.

It is defined as a method rather than a static property because it returns the latest, largest entry, and therefore may return different results over time if increasing `InteractionContentfulPaint` entries are recorded after the soft navigation.

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
