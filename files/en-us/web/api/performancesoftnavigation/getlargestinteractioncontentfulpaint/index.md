---
title: "PerformanceSoftNavigation: getLargestInteractionContentfulPaint() method"
short-title: getLargestInteractionContentfulPaint()
slug: Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint
page-type: web-api-instance-method
browser-compat: api.PerformanceSoftNavigation.getLargestInteractionContentfulPaint
---

{{APIRef("Performance API")}}

The **`getLargestInteractionContentfulPaint()`** method of the {{domxref("PerformanceSoftNavigation")}} interface returns the current largest {{domxref("InteractionContentfulPaint")}} relevant to this soft navigation.

It is useful to understand `InteractionContentfulPaint`'s that happened before the soft navigation was finalized if the URL change happens later. This avoids having to monitor and buffer all `InteractionContentfulPaint`'s in case they result in a future soft navigation.

The `getLargestInteractionContentfulPaint()` method returns the latest, largest `InteractionContentfulPaint` for the soft navigation so may return different results over time if increasing `InteractionContentfulPaint`s are painted after the soft navigation.

## Syntax

```js-nolint
getLargestInteractionContentfulPaint()
```

### Parameters

None.

### Return value

A {{domxref("InteractionContentfulPaint")}} object for the largest {{domxref("InteractionContentfulPaint")}} for this soft navigation.

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

- {{jsxref("InteractionContentfulPaint")}}
