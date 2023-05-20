---
title: "TextMetrics: fontBoundingBoxAscent property"
short-title: fontBoundingBoxAscent
slug: Web/API/TextMetrics/fontBoundingBoxAscent
page-type: web-api-instance-property
browser-compat: api.TextMetrics.fontBoundingBoxAscent
---

{{APIRef("Canvas API")}}

The read-only `fontBoundingBoxAscent` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the top of the highest bounding rectangle of all the fonts used to render the text, in CSS pixels.

## Examples

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.fontBoundingBoxAscent; // 10;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
