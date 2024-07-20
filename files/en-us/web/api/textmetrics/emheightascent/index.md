---
title: "TextMetrics: emHeightAscent property"
short-title: emHeightAscent
slug: Web/API/TextMetrics/emHeightAscent
page-type: web-api-instance-property
browser-compat: api.TextMetrics.emHeightAscent
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The read-only `emHeightAscent` property of the {{domxref("TextMetrics")}} interface returns the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the top of the _em_ square in the line box, in CSS pixels.

## Value

A number, in CSS pixels.

## Examples

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.emHeightAscent; // 7.59765625;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
