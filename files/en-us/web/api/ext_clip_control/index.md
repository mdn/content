---
title: EXT_clip_control extension
short-title: EXT_clip_control
slug: Web/API/EXT_clip_control
page-type: webgl-extension
browser-compat: api.EXT_clip_control
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`EXT_clip_control`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows you to change how clip-space coordinates are mapped to window coordinates, by setting the vertical origin and the range of depth values.

> [!NOTE]
> This extension is available to both {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

- `ext.LOWER_LEFT_EXT`
  - : Clip origin where the clip-space point (-1, -1) maps to the lower-left corner of the viewport.
    This is the default.
- `ext.UPPER_LEFT_EXT`
  - : Clip origin where the clip-space point (-1, -1) maps to the upper-left corner of the viewport.
- `ext.NEGATIVE_ONE_TO_ONE_EXT`
  - : Clip depth mode where visible clip-space z values range from -w to w, which is -1 to 1 in normalized device coordinates.
    This is the default.
- `ext.ZERO_TO_ONE_EXT`
  - : Clip depth mode where visible clip-space z values range from 0 to w, which is 0 to 1 in normalized device coordinates.
- `ext.CLIP_ORIGIN_EXT`
  - : Parameter name for {{domxref("WebGLRenderingContext.getParameter()")}} that returns the current clip origin.
- `ext.CLIP_DEPTH_MODE_EXT`
  - : Parameter name for {{domxref("WebGLRenderingContext.getParameter()")}} that returns the current clip depth mode.

## Instance methods

- {{domxref("EXT_clip_control.clipControlEXT()")}}
  - : Sets the clip origin and the clip depth mode.

## Description

When a vertex shader writes a position to `gl_Position`, WebGL discards the parts of triangles, lines, and points that fall outside the visible volume of [clip space](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#clip_space), and then maps the remaining positions to window coordinates (pixel positions in the canvas or framebuffer being drawn to).
This extension provides the {{domxref("EXT_clip_control.clipControlEXT()", "clipControlEXT()")}} method, which changes two parts of that mapping:

- The clip origin
  - : By default (`ext.LOWER_LEFT_EXT`), y values increase towards the top of the window.

    In WebGL, row 0 of a framebuffer or texture is its bottom row, and the canvas displays it at the bottom.
    The `ext.UPPER_LEFT_EXT` origin inverts the y axis, so that the top of clip space is drawn to row 0 instead.
    This matches the convention of graphics APIs such as Direct3D and [WebGPU](/en-US/docs/Web/API/WebGPU_API), where row 0 is the top row, so code written for those APIs can use textures rendered with this origin without flipping them.
    Content drawn to the canvas with this origin appears upside down.
- The clip depth mode
  - : By default (`ext.NEGATIVE_ONE_TO_ONE_EXT`), depth values from -1 to 1 are scaled and offset to fit the range set by {{domxref("WebGLRenderingContext.depthRange()")}}.
    With `ext.ZERO_TO_ONE_EXT`, depth values from 0 to 1 are mapped to the depth range without first being halved and offset, so with the default depth range they're used unchanged.

    This matters because floating-point numbers can represent values close to 0 much more precisely than values close to 1.
    In the default mode, a depth value that ends up close to 0 started out close to -1, where that precision isn't available.
    In the zero-to-one mode, it stays close to 0 throughout.

    The _reversed-Z_ technique maps the near plane (the closest distance the camera can see) to a depth of 1 and the far plane to 0, the opposite of the usual arrangement.
    A perspective projection gives most of the objects in a scene depth values very close to the far plane's value.
    Normally these are crowded together near 1, where floating-point precision is lowest, and distant surfaces can flicker through each other.
    Reversed-Z moves them close to 0, where precision is highest, so with a floating-point depth buffer, precision is much more even across the scene.
    Reversed-Z needs the zero-to-one mode, because the default mode loses the precision near 0 that it relies on.

The current settings can be retrieved by passing `ext.CLIP_ORIGIN_EXT` or `ext.CLIP_DEPTH_MODE_EXT` to {{domxref("WebGLRenderingContext.getParameter()")}}.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method.
For more information, see [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions).

## Examples

### Enabling the extension

```js
const ext = gl.getExtension("EXT_clip_control");
```

### Querying the clip control state

The following code reads the default clip origin and depth mode, changes both, and then reads them back:

```js
gl.getParameter(ext.CLIP_ORIGIN_EXT) === ext.LOWER_LEFT_EXT; // true
gl.getParameter(ext.CLIP_DEPTH_MODE_EXT) === ext.NEGATIVE_ONE_TO_ONE_EXT; // true

ext.clipControlEXT(ext.UPPER_LEFT_EXT, ext.ZERO_TO_ONE_EXT);

gl.getParameter(ext.CLIP_ORIGIN_EXT) === ext.UPPER_LEFT_EXT; // true
gl.getParameter(ext.CLIP_DEPTH_MODE_EXT) === ext.ZERO_TO_ONE_EXT; // true
```

### Using reversed-Z depth

This example uses the `ext.ZERO_TO_ONE_EXT` depth mode to set up reversed-Z depth in a {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} context.

The following `reversedZPerspective()` function returns a perspective projection matrix that maps the near plane to a depth of 1.
Points infinitely far away are mapped to a depth of 0, so no far plane is needed:

```js
function reversedZPerspective(fieldOfViewY, aspect, near) {
  const focalLength = 1 / Math.tan(fieldOfViewY / 2);
  // Listed column by column, which is the order uniformMatrix4fv() expects
  // prettier-ignore
  return new Float32Array([
    focalLength / aspect, 0,           0,    0,
    0,                    focalLength, 0,    0,
    0,                    0,           0,    -1,
    0,                    0,           near, 0,
  ]);
}
```

Reversed-Z is effective only with a floating-point depth buffer.
Integer depth formats space their values evenly, so they have no extra precision near 0 to take advantage of.
You can't choose a floating-point format for the canvas's own depth buffer, so the scene is drawn to a separate framebuffer with a `gl.DEPTH_COMPONENT32F` depth attachment and then copied to the canvas.
The depth buffer is cleared to 0, which now represents the farthest depth.
The depth test keeps pixels with greater depth values, since these are now the nearer ones:

```js
// The scene is copied to the canvas at the end with blitFramebuffer().
// This isn't allowed if the canvas is antialiased, so turn antialiasing off.
const gl = canvas.getContext("webgl2", { antialias: false });
const ext = gl.getExtension("EXT_clip_control");

const framebuffer = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

const colorBuffer = gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER, colorBuffer);
gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA8, canvas.width, canvas.height);
gl.framebufferRenderbuffer(
  gl.FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  gl.RENDERBUFFER,
  colorBuffer,
);

const depthBuffer = gl.createRenderbuffer();
gl.bindRenderbuffer(gl.RENDERBUFFER, depthBuffer);
gl.renderbufferStorage(
  gl.RENDERBUFFER,
  gl.DEPTH_COMPONENT32F,
  canvas.width,
  canvas.height,
);
gl.framebufferRenderbuffer(
  gl.FRAMEBUFFER,
  gl.DEPTH_ATTACHMENT,
  gl.RENDERBUFFER,
  depthBuffer,
);

ext.clipControlEXT(ext.LOWER_LEFT_EXT, ext.ZERO_TO_ONE_EXT);

gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.GREATER);
gl.clearDepth(0);
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

// Draw the scene using the matrix from reversedZPerspective(),
// then copy the result to the canvas with gl.blitFramebuffer()
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
- {{domxref("WebGLRenderingContext.depthRange()")}}
- {{domxref("WebGLRenderingContext.depthFunc()")}}
