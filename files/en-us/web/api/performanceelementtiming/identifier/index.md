---
title: PerformanceElementTiming.identifier
slug: Web/API/PerformanceElementTiming/identifier
tags:
  - API
  - Property
  - Reference
  - identifier
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming.identifier
---
{{DefaultAPISidebar("Element Timing")}}

The **`identifier`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the value of the [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) attribute on the element.

## Syntax

```js
var identifier = PerformanceElementTiming.identifier;
```

### Value

A {{domxref("DOMString")}}.

## Examples

In this example the value of [`elementtiming`](/en-US/docs/Web/HTML/Attributes/elementtiming) is `big-image`. Calling `entry.indentifier` therefore returns the string `big-image`.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.naturalWidth);
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
