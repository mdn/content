---
title: "WebGLRenderingContext: drawingBufferWidth property"
short-title: drawingBufferWidth
slug: Web/API/WebGLRenderingContext/drawingBufferWidth
page-type: web-api-instance-property
browser-compat: api.WebGLRenderingContext.drawingBufferWidth
---

{{APIRef("WebGL")}}

The read-only **`WebGLRenderingContext.drawingBufferWidth`**
property represents the actual width of the current drawing buffer. It should match the
`width` attribute of the {{HTMLElement("canvas")}} element associated with
this context, but might differ if the implementation is not able to provide the
requested width.

## Value

A number.

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get the width of the drawing buffer with the following lines:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferWidth; // 300
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
