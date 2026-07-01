---
title: "TextMetrics: actualBoundingBoxRight property"
short-title: actualBoundingBoxRight
slug: Web/API/TextMetrics/actualBoundingBoxRight
page-type: web-api-instance-property
browser-compat: api.TextMetrics.actualBoundingBoxRight
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The read-only `actualBoundingBoxRight` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance parallel to the baseline from the alignment point given by the {{domxref("CanvasRenderingContext2D.textAlign")}} property to the right side of the bounding rectangle of the given text, in CSS pixels.

## Examples

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.actualBoundingBoxRight; // 15.633333333333333;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
