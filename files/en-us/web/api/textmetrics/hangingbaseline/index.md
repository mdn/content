---
title: "TextMetrics: hangingBaseline property"
short-title: hangingBaseline
slug: Web/API/TextMetrics/hangingBaseline
page-type: web-api-instance-property
browser-compat: api.TextMetrics.hangingBaseline
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The read-only `hangingBaseline` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the hanging baseline of the line box, in CSS pixels.

## Examples

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.hangingBaseline; // 6.078125;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
