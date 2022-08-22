---
title: TextMetrics.alphabeticBaseline
slug: Web/API/TextMetrics/alphabeticBaseline
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.alphabeticBaseline
---
{{APIRef("Canvas API")}}{{SeeCompatTable}}

The read-only `alphabeticBaseline` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the alphabetic baseline of the line box, in CSS pixels.

## Examples

```js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const text = ctx.measureText('foo'); // returns TextMetrics object

text.alphabeticBaseline; // -0;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
