---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Property
browser-compat: api.HTMLCanvasElement.height
---
{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.height`** property is a
positive `integer` reflecting the {{htmlattrxref("height", "canvas")}} HTML
attribute of the {{HTMLElement("canvas")}} element interpreted in CSS pixels. When the
attribute is not specified, or if it is set to an invalid value, like a negative, the
default value of `150` is used.

This is one of the two properties, the other being
{{domxref("HTMLCanvasElement.width")}}, that controls the size of the canvas.

## Syntax

```js
var pxl = canvas.height;
canvas.height = pxl;
```

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

You can get the height of the canvas with the following code:

```js
var canvas = document.getElementById('canvas');
console.log(canvas.height); // 300
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining it, {{domxref("HTMLCanvasElement")}}.
- The other property controlling the size of the canvas,
  {{domxref("HTMLCanvasElement.width")}}.
