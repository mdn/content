---
title: EXT_polygon_offset_clamp extension
short-title: EXT_polygon_offset_clamp
slug: Web/API/EXT_polygon_offset_clamp
page-type: webgl-extension
browser-compat: api.EXT_polygon_offset_clamp
---

{{APIRef("WebGL")}}

The **`EXT_polygon_offset_clamp`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds a limit to the depth offset set with {{domxref("WebGLRenderingContext.polygonOffset()", "polygonOffset()")}}.

The depth offset of a polygon grows with its slope, so polygons that are almost parallel to the view direction can get very large offsets. In shadow mapping, this can push shadow-casting polygons behind the surfaces they should shadow, which shows up as holes in the shadows. Limiting the offset to a maximum value avoids this.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is available to both {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts. Support depends on the system's graphics driver.

## Constants

- `ext.POLYGON_OFFSET_CLAMP_EXT`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} to pass to {{domxref("WebGLRenderingContext.getParameter()", "getParameter()")}} to get the current offset limit, as a {{domxref("WebGL_API/Types", "GLfloat")}}. The default value is `0`.

## Instance methods

- {{domxref("EXT_polygon_offset_clamp.polygonOffsetClampEXT()", "ext.polygonOffsetClampEXT()")}}
  - : Sets the scale factor and units used to calculate depth offsets, and a limit for the resulting offset.

## Examples

### Limiting the depth offset

The depth offset applies only when `gl.POLYGON_OFFSET_FILL` is enabled. This example sets the same factor and units as `polygonOffset(2, 3)` would, and also limits the offset to `0.001`:

```js
const ext = gl.getExtension("EXT_polygon_offset_clamp");

gl.enable(gl.POLYGON_OFFSET_FILL);
ext.polygonOffsetClampEXT(2, 3, 0.001);

gl.getParameter(ext.POLYGON_OFFSET_CLAMP_EXT); // 0.0010000000474974513
```

The value is stored as a 32-bit float, so it reads back as the nearest 32-bit value to `0.001`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.polygonOffset()")}}
