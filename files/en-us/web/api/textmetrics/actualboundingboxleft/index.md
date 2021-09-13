---
title: TextMetrics.actualBoundingBoxLeft
slug: Web/API/TextMetrics/actualBoundingBoxLeft
tags:
  - API
  - Experimental
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.actualBoundingBoxLeft
---
{{APIRef("Canvas API")}}

The read-only `actualBoundingBoxLeft` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance parallel to the baseline from the alignment point given by the {{domxref("CanvasRenderingContext2D.textAlign")}} property to the left side of the bounding rectangle of the given text, in CSS pixels.

## Examples

```js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const text = ctx.measureText('foo'); // returns TextMetrics object

text.actualBoundingBoxLeft; // 0;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
