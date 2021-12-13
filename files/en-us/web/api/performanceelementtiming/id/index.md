---
title: PerformanceElementTiming.id
slug: Web/API/PerformanceElementTiming/id
tags:
  - API
  - Property
  - Reference
  - id
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming.id
---
{{DefaultAPISidebar("Element Timing")}}

The **`id`** read-only property of the {{domxref("PerformanceElementTiming")}} interface returns the {{htmlattrxref("id")}} of the associated element.

## Syntax

```js
var id = PerformanceElementTiming.id;
```

### Value

A {{domxref("DOMString")}}.

## Examples

In this example calling `entry.id` will log to the console `myImage`, this being the {{htmlattrxref("id")}} of the image element.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.id);
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
