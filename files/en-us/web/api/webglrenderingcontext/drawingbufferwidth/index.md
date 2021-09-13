---
title: WebGLRenderingContext.drawingBufferWidth
slug: Web/API/WebGLRenderingContext/drawingBufferWidth
tags:
  - API
  - Property
  - Read-only
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.drawingBufferWidth
---
{{APIRef("WebGL")}}

The read-only **`WebGLRenderingContext.drawingBufferWidth`**
property represents the actual width of the current drawing buffer. It should match the
`width` attribute of the {{HTMLElement("canvas")}} element associated with
this context, but might differ if the implementation is not able to provide the
requested width.

## Syntax

```js
gl.drawingBufferWidth;
```

## Examples

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get the width of the drawing buffer with the following lines:

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
gl.drawingBufferWidth; // 300
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
