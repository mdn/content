---
title: "TextMetrics: ideographicBaseline property"
short-title: ideographicBaseline
slug: Web/API/TextMetrics/ideographicBaseline
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.TextMetrics.ideographicBaseline
---

{{APIRef("Canvas API")}}{{SeeCompatTable}}

The read-only `ideographicBaseline` property of the {{domxref("TextMetrics")}} interface is a `double` giving the distance from the horizontal line indicated by the {{domxref("CanvasRenderingContext2D.textBaseline")}} property to the ideographic baseline of the line box, in CSS pixels.

## Examples

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // returns TextMetrics object

text.ideographicBaseline; // -1.201171875;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
