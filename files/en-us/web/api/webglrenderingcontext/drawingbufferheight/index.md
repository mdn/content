---
title: "WebGLRenderingContext: drawingBufferHeight property"
short-title: drawingBufferHeight
slug: Web/API/WebGLRenderingContext/drawingBufferHeight
page-type: web-api-instance-property
browser-compat: api.WebGLRenderingContext.drawingBufferHeight
---

{{APIRef("WebGL")}}

The read-only **`WebGLRenderingContext.drawingBufferHeight`**
property represents the actual height of the current drawing buffer. It should match the
`height` attribute of the {{HTMLElement("canvas")}} element associated with
this context, but might differ if the implementation is not able to provide the
requested height.

## Value

A number.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get the height of the drawing buffer with the following lines:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferHeight; // 150
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
