---
title: "WebGL2RenderingContext: drawingBufferColorSpace property"
short-title: drawingBufferColorSpace
slug: Web/API/WebGL2RenderingContext/drawingBufferColorSpace
page-type: web-api-instance-property
browser-compat: api.WebGL2RenderingContext.drawingBufferColorSpace
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.drawingBufferColorSpace`** property specifies the color space of the WebGL drawing buffer. Along with the default (`srgb`), the `display-p3` color space can be used.

See [`WebGL2RenderingContext.unpackColorSpace`](/en-US/docs/Web/API/WebGL2RenderingContext/unpackColorSpace) for specifying the color space for textures.

## Value

This property can have the following values:

- `"srgb"` selects the [sRGB color space](https://en.wikipedia.org/wiki/SRGB). This is the default value.
- `"display-p3"` selects the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3).

If an invalid value is specified, then the value of `drawingBufferColorSpace` will remain unchanged.

## Examples

### Setting the drawing buffer color space to draw a Display P3 red

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferColorSpace = "display-p3";
gl.clearColor(1, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebGL2RenderingContext.unpackColorSpace`](/en-US/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
