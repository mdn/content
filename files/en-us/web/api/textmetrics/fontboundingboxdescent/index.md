---
title: "TextMetrics: fontBoundingBoxDescent property"
short-title: fontBoundingBoxDescent
slug: Web/API/TextMetrics/fontBoundingBoxDescent
page-type: web-api-instance-property
browser-compat: api.TextMetrics.fontBoundingBoxDescent
---

{{APIRef("Canvas API")}}

The read-only `fontBoundingBoxDescent` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the bottom of the bounding rectangle of all the fonts used to render the text, in CSS pixels.

## Examples

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.fontBoundingBoxDescent; // 3;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
