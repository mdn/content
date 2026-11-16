---
title: "ImageBitmapRenderingContext: canvas property"
short-title: canvas
slug: Web/API/ImageBitmapRenderingContext/canvas
page-type: web-api-instance-property
browser-compat: api.ImageBitmapRenderingContext.canvas
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`ImageBitmapRenderingContext.canvas`** property, part of the
[Canvas API](/en-US/docs/Web/API/Canvas_API), is a read-only reference to the
{{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}} object that is associated with the given context.

## Value

A {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}} object.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get a reference to the canvas element within the `ImageBitmapRenderingContext` by using the `canvas` property:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("bitmaprenderer");
console.log(ctx.canvas === canvas); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ImageBitmapRenderingContext")}} interface
- [Canvas API](/en-US/docs/Web/API/Canvas_API)
