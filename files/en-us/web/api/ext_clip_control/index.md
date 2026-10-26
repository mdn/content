---
title: EXT_clip_control extension
short-title: EXT_clip_control
slug: Web/API/EXT_clip_control
page-type: webgl-extension
browser-compat: api.EXT_clip_control
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`EXT_clip_control`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows you to change how clip-space coordinates are mapped to window coordinates: both the vertical origin and the range of depth values.

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
  - : Passed to {{domxref("WebGLRenderingContext.getParameter()")}} to get the current clip origin.
- `ext.CLIP_DEPTH_MODE_EXT`
  - : Passed to {{domxref("WebGLRenderingContext.getParameter()")}} to get the current clip depth mode.

## Instance methods

- {{domxref("EXT_clip_control.clipControlEXT()")}}
  - : Sets the clip origin and the clip depth mode.

## Description

When a vertex shader writes a position to `gl_Position`, WebGL clips primitives against the visible volume of clip space, and then maps the remaining positions to window coordinates.
This extension provides the {{domxref("EXT_clip_control.clipControlEXT()", "clipControlEXT()")}} method, which changes two parts of that mapping:

- The clip origin
  - : By default (`ext.LOWER_LEFT_EXT`), y values increase towards the top of the window.
    The `ext.UPPER_LEFT_EXT` origin inverts the y axis, so that the top of clip space is drawn to the first row of the framebuffer.
    This matches graphics APIs such as Direct3D and [WebGPU](/en-US/docs/Web/API/WebGPU_API), where the first row of a framebuffer or texture is its top row, so textures rendered with this origin can be used by code written for those conventions without being flipped.
    In WebGL, the first row of the canvas is displayed at the bottom, so content drawn to the canvas with this origin appears upside down.
- The clip depth mode
  - : By default (`ext.NEGATIVE_ONE_TO_ONE_EXT`), depth values from -1 to 1 are scaled and offset to fit the range set by {{domxref("WebGLRenderingContext.depthRange()")}}.
    With `ext.ZERO_TO_ONE_EXT`, depth values from 0 to 1 are used directly, which preserves the precision of floating-point depth values.
    This mode also allows the _reversed-Z_ technique, where the near plane is mapped to a depth of 1 and the far plane to 0, which gives much more uniform depth precision across a scene when used with a floating-point depth buffer.

The current settings can be retrieved by passing `ext.CLIP_ORIGIN_EXT` or `ext.CLIP_DEPTH_MODE_EXT` to {{domxref("WebGLRenderingContext.getParameter()")}}.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

## Examples

### Enabling the extension

```js
const ext = gl.getExtension("EXT_clip_control");
```

### Querying the clip control state

```js
gl.getParameter(ext.CLIP_ORIGIN_EXT) === ext.LOWER_LEFT_EXT; // true
gl.getParameter(ext.CLIP_DEPTH_MODE_EXT) === ext.NEGATIVE_ONE_TO_ONE_EXT; // true

ext.clipControlEXT(ext.UPPER_LEFT_EXT, ext.ZERO_TO_ONE_EXT);

gl.getParameter(ext.CLIP_ORIGIN_EXT) === ext.UPPER_LEFT_EXT; // true
gl.getParameter(ext.CLIP_DEPTH_MODE_EXT) === ext.ZERO_TO_ONE_EXT; // true
```

### Using reversed-Z depth

This example uses the `ext.ZERO_TO_ONE_EXT` depth mode to set up reversed-Z depth in a {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} context.

The perspective projection matrix maps the near plane to a depth of 1, and points infinitely far away to a depth of 0, so no far plane is needed:

```js
function reversedZPerspective(fieldOfViewY, aspect, near) {
  const f = 1 / Math.tan(fieldOfViewY / 2);
  // Column-major order, as expected by uniformMatrix4fv()
  // prettier-ignore
  return new Float32Array([
    f / aspect, 0, 0, 0,
    0, f, 0, 0,
    0, 0, 0, -1,
    0, 0, near, 0,
  ]);
}
```

Reversed-Z is only effective with a floating-point depth buffer, so the scene is drawn to a framebuffer with a `gl.DEPTH_COMPONENT32F` depth attachment.
The depth buffer is cleared to 0, which now represents the farthest depth, and the depth test keeps fragments with greater depth values, which are now the nearer ones:

```js
const gl = canvas.getContext("webgl2");
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
