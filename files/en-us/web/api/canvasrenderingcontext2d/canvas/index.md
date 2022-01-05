---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Property
  - Reference
browser-compat: api.CanvasRenderingContext2D.canvas
---
{{APIRef}}

The **`CanvasRenderingContext2D.canvas`** property, part of the
[Canvas API](/en-US/docs/Web/API/Canvas_API), is a read-only reference to the
{{domxref("HTMLCanvasElement")}} object that is associated with a given context. It
might be {{jsxref("null")}} if there is no associated {{HTMLElement("canvas")}} element.

## Syntax

```js
ctx.canvas;
```

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

... you can get a reference to the canvas element within the
`CanvasRenderingContext2D` by using the `canvas` property:

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.canvas // HTMLCanvasElement
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D")}} interface
- [Canvas API](/en-US/docs/Web/API/Canvas_API)
