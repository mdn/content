---
title: TextMetrics.emHeightDescent
slug: Web/API/TextMetrics/emHeightDescent
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.emHeightDescent
---
{{APIRef("Canvas API")}}{{SeeCompatTable}}

The read-only `emHeightDescent` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the bottom of the _em_ square in the line box, in CSS pixels.

## Examples

```js
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const text = ctx.measureText('foo'); // returns TextMetrics object

text.emHeightDescent; // -2.40234375;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
