---
title: PerformanceElementTiming.toJSON()
slug: Web/API/PerformanceElementTiming/toJSON
tags:
  - API
  - Method
  - Reference
  - toJSON()
  - PerformanceElementTiming
browser-compat: api.PerformanceElementTiming.toJSON
---
{{DefaultAPISidebar("Element Timing")}}

The **`toJSON()`** method of the {{domxref("PerformanceElementTiming")}} interface is a standard serializer. It returns a JSON representation of the object's properties.

## Syntax

```js
var json = PerformanceElementTiming.toJSON();
```

### Return value

- json
  - : A JSON object that is the serialization of the `PerformanceElementTiming` object.

## Examples

In this example calling `entry.toJSON()` returns a JSON representation of the `PerformanceElementTiming` object, with the information about the image element.

```html
<img src="image.jpg" alt="a nice image" elementtiming="big-image" id="myImage">
```

```js
const observer = new PerformanceObserver((list) => {
  let entries = list.getEntries().forEach(function (entry) {
    if (entry.identifier === "big-image") {
      console.log(entry.toJSON());
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
