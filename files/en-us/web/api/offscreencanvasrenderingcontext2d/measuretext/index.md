---
title: OffscreenCanvasRenderingContext2D.measureText()
slug: Web/API/OffscreenCanvasRenderingContext2D/measureText
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - OffscreenCanvasRenderingContext2D
  - Method
  - Reference
browser-compat: api.OffscreenCanvasRenderingContext2D.measureText
---

{{APIRef}}

The
`OffscreenCanvasRenderingContext2D.measureText()`
method returns a {{domxref("TextMetrics")}} object that contains information about the
measured text (such as its width, for example).

## Syntax

```js
measureText(text);
```

### Parameters

- `text`
  - : The text string to measure.

### Return value

A {{domxref("TextMetrics")}} object.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

… you can get a {{domxref("TextMetrics")}} object using the following code:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("Hello world");
console.log(text.width); // 56;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method: {{domxref("OffscreenCanvasRenderingContext2D")}}
- {{domxref("TextMetrics")}}
