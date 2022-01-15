---
title: PerformanceElementTiming.element
slug: Web/API/PerformanceElementTiming/element
tags:
  - API
  - Property
  - Reference
  - element
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming.element
---
{{DefaultAPISidebar("Element Timing")}}

The **`element`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns an {{domxref("Element")}} which is a literal representation of the associated element.

## Syntax

```js
var element = PerformanceElementTiming.element;
```

### Value

An {{domxref("Element")}}.

## Examples

In this example calling `entry.element` will log to the console
`<img src="image.jpg" alt="a nice image" elementtiming="big-image">`.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.element);
    }
  });
});
observer.observe({ entryTypes: ["element"] });
```

> **Note:** This example uses the {{domxref("PerformanceObserver")}} interface to create a list of performance measurement events. In our case we observe the {{domxref("PerformanceEntry.entrytype")}} `element` in order to use the `PerformanceElementTiming` interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
