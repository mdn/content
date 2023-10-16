---
title: "WebGLRenderingContext: canvas property"
short-title: canvas
slug: Web/API/WebGLRenderingContext/canvas
page-type: web-api-instance-property
browser-compat: api.WebGLRenderingContext.canvas
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.canvas`** property is a read-only
reference to the {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}}
object that is associated with the context. It might be [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null) if it is not
associated with a {{HTMLElement("canvas")}} element or an {{domxref("OffscreenCanvas")}}
object.

## Syntax

```js-nolint
gl.canvas
```

### Return value

Either a {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}} object or
[`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

## Examples

### Canvas element

Given this {{HTMLElement("canvas")}} element:

```html
<canvas id="canvas"></canvas>
```

You can get back a reference to it from the `WebGLRenderingContext` using
the `canvas` property:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### Offscreen canvas

Example using the experimental {{domxref("OffscreenCanvas")}} object.

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
gl.canvas; // OffscreenCanvas
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.canvas")}}
- The {{domxref("OffscreenCanvas")}} interface
