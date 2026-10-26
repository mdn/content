---
title: "EXT_clip_control: clipControlEXT() method"
short-title: clipControlEXT()
slug: Web/API/EXT_clip_control/clipControlEXT
page-type: webgl-extension-method
browser-compat: api.EXT_clip_control.clipControlEXT
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`clipControlEXT()`** method of the {{domxref("EXT_clip_control")}} WebGL extension sets the clip origin and the clip depth mode, which control how clip-space coordinates are mapped to window coordinates.

## Syntax

```js-nolint
clipControlEXT(origin, depth)
```

### Parameters

- `origin`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the clip origin.
    Possible values:
    - `ext.LOWER_LEFT_EXT`
      - : The clip-space point (-1, -1) maps to the lower-left corner of the viewport, so y values increase towards the top of the window.
        This is the initial value.
    - `ext.UPPER_LEFT_EXT`
      - : The clip-space point (-1, -1) maps to the upper-left corner of the viewport, so y values increase towards the bottom of the window.
        This doesn't change which faces of a polygon are considered front-facing: the winding order is determined as if the y axis weren't inverted.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the clip depth mode.
    Possible values:
    - `ext.NEGATIVE_ONE_TO_ONE_EXT`
      - : Visible clip-space z values range from -w to w.
        The resulting normalized device coordinate z values, from -1 to 1, are mapped to the depth range `n` to `f` set by {{domxref("WebGLRenderingContext.depthRange()")}} as `z * (f - n) / 2 + (n + f) / 2`.
        This is the initial value.
    - `ext.ZERO_TO_ONE_EXT`
      - : Visible clip-space z values range from 0 to w.
        The resulting normalized device coordinate z values, from 0 to 1, are mapped to the depth range as `z * (f - n) + n`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- If `origin` or `depth` is not one of the possible values, a `gl.INVALID_ENUM` error is generated, which can be retrieved with {{domxref("WebGLRenderingContext.getError()")}}.

## Examples

### Setting the clip origin and depth mode

The following code sets an upper-left clip origin and a zero-to-one depth mode, and then reads back the new settings using {{domxref("WebGLRenderingContext.getParameter()")}}:

```js
const ext = gl.getExtension("EXT_clip_control");

ext.clipControlEXT(ext.UPPER_LEFT_EXT, ext.ZERO_TO_ONE_EXT);

gl.getParameter(ext.CLIP_ORIGIN_EXT) === ext.UPPER_LEFT_EXT; // true
gl.getParameter(ext.CLIP_DEPTH_MODE_EXT) === ext.ZERO_TO_ONE_EXT; // true
```

See {{domxref("EXT_clip_control")}} for an example that uses the zero-to-one depth mode for reversed-Z depth.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EXT_clip_control")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
- {{domxref("WebGLRenderingContext.depthRange()")}}
