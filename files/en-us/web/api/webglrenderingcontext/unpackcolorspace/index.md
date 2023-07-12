---
title: "WebGLRenderingContext: unpackColorSpace property"
short-title: unpackColorSpace
slug: Web/API/WebGLRenderingContext/unpackColorSpace
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.WebGLRenderingContext.unpackColorSpace
---

{{APIRef("WebGL")}}{{SeeCompatTable}}

The **`WebGLRenderingContext.unpackColorSpace`** property specifies the color space to convert to when importing textures. Along with the default (`srgb`), the `display-p3` color space can be used.

Texture image sources can be the following:

- [`ImageBitmap`](/en-US/docs/Web/API/ImageBitmap)
- [`ImageData`](/en-US/docs/Web/API/ImageData)
- [`HTMLImageElement`](/en-US/docs/Web/API/HTMLImageElement)
- [`HTMLCanvasElement`](/en-US/docs/Web/API/HTMLCanvasElement)
- [`HTMLVideoElement`](/en-US/docs/Web/API/HTMLVideoElement)
- [`OffscreenCanvas`](/en-US/docs/Web/API/OffscreenCanvas)
- [`VideoFrame`](/en-US/docs/Web/API/VideoFrame)

Textures are imported using the [`WebGLRenderingContext.texImage2D()`](/en-US/docs/Web/API/WebGLRenderingContext/texImage2D) and [`WebGLRenderingContext.texSubImage2D()`](/en-US/docs/Web/API/WebGLRenderingContext/texSubImage2D) methods and conversion to the specified `unpackColorSpace` color space happens during import.

Note that this doesn't apply to [`HTMLImageElement`](/en-US/docs/Web/API/HTMLImageElement) when the `UNPACK_COLORSPACE_CONVERSION_WEBGL` pixel storage parameter is set to `NONE`.

## Value

This property can have the following values:

- `"srgb"` selects the [sRGB color space](https://en.wikipedia.org/wiki/SRGB). This is the default value.
- `"display-p3"` selects the [display-p3 color space](https://en.wikipedia.org/wiki/DCI-P3).

If an invalid value is specified, then the value of `unpackColorSpace` will remain unchanged.

## Examples

### Converting sRGB ImageData to display-p3 in a texture

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.drawingBufferColorSpace = "display-p3";
gl.unpackColorSpace = "display-p3";

// Some sRGB ImageData
// Will be converted from sRGB to Display P3
const imageData = new ImageData(data, 32, 32);

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA,
  width,
  height,
  0,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  imageData,
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`WebGLRenderingContext.drawingBufferColorSpace`](/en-US/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
