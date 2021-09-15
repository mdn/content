---
title: WebGLRenderingContext.canvas
slug: Web/API/WebGLRenderingContext/canvas
tags:
  - Property
  - Read-only
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.canvas
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.canvas`** property is a read-only
reference to the {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}}
object that is associated with the context. It might be {{jsxref("null")}} if it is not
associated with a {{HTMLElement("canvas")}} element or an {{domxref("OffscreenCanvas")}}
object.

## Syntax

```js
gl.canvas;
```

### Return value

Either a {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}} object or
{{jsxref("null")}}.

## Examples

### Canvas element

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get back a reference to it from the `WebGLRenderingContext` using
the `canvas` property:

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');
gl.canvas; // HTMLCanvasElement
```

### Offscreen canvas

Example using the experimental {{domxref("OffscreenCanvas")}} object.

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext('webgl');
gl.canvas; // OffscreenCanvas
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.canvas")}}
- {{domxref("OffscreenCanvas")}}
