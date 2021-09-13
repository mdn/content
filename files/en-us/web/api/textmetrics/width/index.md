---
title: TextMetrics.width
slug: Web/API/TextMetrics/width
tags:
  - API
  - Canvas
  - Property
  - Reference
  - TextMetrics
browser-compat: api.TextMetrics.width
---
{{APIRef("Canvas API")}}

The read-only **`width`** property of the {{domxref("TextMetrics")}} interface contains the text's advance width (the width of that inline box) in CSS pixels.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

... you can get a {{domxref("TextMetrics")}} object using the following code:

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let text = ctx.measureText('foo'); // TextMetrics object
text.width; // 16;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("TextMetrics")}}
