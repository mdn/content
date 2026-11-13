---
title: "EXT_clip_control: clipControlEXT() method"
short-title: clipControlEXT()
slug: Web/API/EXT_clip_control/clipControlEXT
page-type: webgl-extension-method
browser-compat: api.EXT_clip_control.clipControlEXT
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`clipControlEXT()`** method of the {{domxref("EXT_clip_control")}} WebGL extension sets the clip origin and the clip depth mode, which control how [clip-space](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#clip_space) coordinates are mapped to window coordinates.

The clip origin and depth determine whether the image is drawn right way up or upside down, and how depth values are calculated.
You can use them to match the conventions of graphics APIs such as Direct3D and WebGPU, or to improve depth precision.
See {{domxref("EXT_clip_control")}} for details.

## Syntax

```js-nolint
clipControlEXT(origin, depth)
```

### Parameters

- `origin`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the clip origin.
    Possible values:
    - `ext.LOWER_LEFT_EXT`
      - : The clip-space point (-1, -1), where x and y are at their minimum values, maps to the lower-left corner of the viewport, so y values increase towards the top of the window.
        This is the initial value.
    - `ext.UPPER_LEFT_EXT`
      - : The clip-space point (-1, -1), where x and y are at their minimum values, maps to the upper-left corner of the viewport, so y values increase towards the bottom of the window.
        Content drawn to the canvas with this origin therefore appears upside down compared to the default.

        Flipping the y axis would normally reverse the winding order of every triangle (counter-clockwise corners would appear clockwise), and so swap which face of each triangle is front-facing.
        WebGL compensates for this, so triangles that are front-facing with the default origin are still front-facing, and you don't need to change {{domxref("WebGLRenderingContext.frontFace()", "frontFace()")}} or {{domxref("WebGLRenderingContext.cullFace()", "cullFace()")}} settings.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the clip depth mode.
    Possible values:
    - `ext.NEGATIVE_ONE_TO_ONE_EXT`
      - : Visible depth (z) values range from -1 to 1 in clip space (or from -w to w, before they're [divided by `w`](/en-US/docs/Web/API/WebGL_API/WebGL_model_view_projection#homogeneous_coordinates)).
        These are mapped to the near (`n`) and far (`f`) values set by {{domxref("WebGLRenderingContext.depthRange()")}}, so that -1 maps to `n`, 1 maps to `f`, and values in between are spaced evenly: `z * (f - n) / 2 + (n + f) / 2`.
        This is the initial value.
    - `ext.ZERO_TO_ONE_EXT`
      - : Visible depth (z) values range from 0 to 1 in clip space (or from 0 to w, before they're divided by `w`).
        These are mapped to the near (`n`) and far (`f`) values set by {{domxref("WebGLRenderingContext.depthRange()")}}, so that 0 maps to `n` and 1 maps to `f`: `z * (f - n) + n`.
        With the default depth range of 0 to 1, z values are used unchanged.

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

See [Using reversed-Z depth](/en-US/docs/Web/API/EXT_clip_control#using_reversed-z_depth) on the {{domxref("EXT_clip_control")}} page for an example that uses the zero-to-one depth mode.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("EXT_clip_control")}}
- {{domxref("WebGLRenderingContext.getParameter()")}}
- {{domxref("WebGLRenderingContext.depthRange()")}}
