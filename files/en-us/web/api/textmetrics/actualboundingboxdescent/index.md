---
title: "TextMetrics: actualBoundingBoxDescent property"
short-title: actualBoundingBoxDescent
slug: Web/API/TextMetrics/actualBoundingBoxDescent
page-type: web-api-instance-property
browser-compat: api.TextMetrics.actualBoundingBoxDescent
---

{{APIRef("Canvas API")}}

The read-only `actualBoundingBoxDescent` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle used to render the text, in CSS pixels.

## Examples

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.actualBoundingBoxDescent; // 0;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
