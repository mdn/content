---
title: "WebGLRenderingContext: texElementSubImage2D() method"
short-title: texElementSubImage2D()
slug: Web/API/WebGLRenderingContext/texElementSubImage2D
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.texElementSubImage2D
---

{{APIRef("WebGL")}}

The **`texElementSubImage2D()`** method of the {{domxref("WebGLRenderingContext")}} interface of the [WebGL API](/en-US/docs/Web/API/WebGL_API) uploads a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element's state recorded during the current rendering update (or an {{domxref("ElementImage")}}) into a texture. Part of the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

## Syntax

```js-nolint
drawElementImage(target, level, xoffset, yoffset, element)
drawElementImage(target, level, xoffset, yoffset, element, config)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture. Possible values:
    - `gl.TEXTURE_2D`: A two-dimensional texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_X`: Positive X face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_X`: Negative X face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Y`: Positive Y face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Y`: Negative Y face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_POSITIVE_Z`: Positive Z face for a cube-mapped texture.
    - `gl.TEXTURE_CUBE_MAP_NEGATIVE_Z`: Negative Z face for a cube-mapped texture.
- `level`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the level of detail. Level 0 is the base image level and level _n_ is the n-th mipmap reduction level.
- `xoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the x offset within the texture image.
- `yoffset`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the y offset within the texture image.
- `element`
  - : A `drawable` element reference or an {{domxref("ElementImage")}} object representing the DOM element to use in the texture.
- `config` {{optional_inline}}
  - : A object that can include the following properties:
    - `sx` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLfloat")}} representing the horizontal coordinate of the top-left corner of the source `element` area to use in the texture. If omitted, defaults to `0`.
    - `sy` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLfloat")}} representing the vertical coordinate of the top-left corner of the source `element` area to use in the texture. If omitted, defaults to `0`.
    - `swidth` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLfloat")}} representing the width of the source `element` area to use in the texture. If omitted, defaults to the element's width.
    - `sheight` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLfloat")}} representing the height of the source `element` area to use in the texture. If omitted, defaults to the element's height.
    - `width` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLsizei")}} representing the width of the source when included in the texture, in texels.
    - `height` {{optional_inline}}
      - : A {{domxref("WebGL_API/Types", "GLsizei")}} representing the height of the source when included in the texture, in texels.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Typical usage

Our [WebGL example](https://mdn.github.io/dom-examples/html-in-canvas/webgl-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/webgl-example)) renders an HTML form as a texture on all six sides of a rotating 3D cube. The following snippet shows the code used to create and bind a texture, and define the `updateElementTexture()` function used later on to upload the latest snapshot of the `source` form element into the texture each time it is repainted.

```js
const elementTexture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, elementTexture);
// No mipmaps: linear filtering with clamped edges (also required for
// non-power-of-two textures in WebGL 1).
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

let texWidth = 0;
let texHeight = 0;

// Copies the latest snapshot of the element into the texture,
// (re)allocating the texture storage if the element's size has changed.
// Returns false if the element has no usable size yet.
function updateElementTexture() {
  // Size in canvas-grid pixels.
  const scale = canvas.width / canvas.clientWidth;
  const w = Math.ceil(source.offsetWidth * scale);
  const h = Math.ceil(source.offsetHeight * scale);
  if (!(w > 0 && h > 0)) return false;

  gl.bindTexture(gl.TEXTURE_2D, elementTexture);

  // texElementSubImage2D() doesn't allocate storage, so pre-allocate it
  // (only when the size changes).
  if (w !== texWidth || h !== texHeight) {
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA8,
      w,
      h,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      null,
    );
    texWidth = w;
    texHeight = h;
  }

  gl.texElementSubImage2D(gl.TEXTURE_2D, 0, 0, 0, source);
  return true;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CanvasRenderingContext2D.drawElementImage()")}}
- {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage()")}}
- {{domxref("GPUQueue.drawElementImageToTexture()")}}
- {{domxref("HTMLCanvasElement.updateElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
