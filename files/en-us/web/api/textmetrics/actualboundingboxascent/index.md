---
title: TextMetrics.actualBoundingBoxAscent
slug: Web/API/TextMetrics/actualBoundingBoxAscent
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.actualBoundingBoxAscent
---
{{APIRef("Canvas API")}}

The read-only **`actualBoundingBoxAscent`** property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} attribute to the top of the bounding rectangle used to render the text, in CSS pixels.

## Examples

```js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const text = ctx.measureText('foo'); // returns TextMetrics object

text.actualBoundingBoxAscent; // 8;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
