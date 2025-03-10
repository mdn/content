---
title: "TextMetrics: width property"
short-title: width
slug: Web/API/TextMetrics/width
page-type: web-api-instance-property
browser-compat: api.TextMetrics.width
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The read-only **`width`** property of the {{domxref("TextMetrics")}} interface contains the text's advance width (the width of that inline box) in CSS pixels.

## Examples

Start with this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get a {{domxref("TextMetrics")}} object using the following code:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("foo"); // TextMetrics object
text.width; // 16;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
