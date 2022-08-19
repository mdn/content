---
title: WebGLRenderingContext.enable()
slug: Web/API/WebGLRenderingContext/enable
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGLRenderingContext
browser-compat: api.WebGLRenderingContext.enable
---
{{APIRef("WebGL")}}

The **`WebGLRenderingContext.enable()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) enables specific WebGL capabilities
for this context.

## Syntax

```js
enable(cap)
```

### Parameters

- `cap`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which WebGL capability to enable. Possible
    values:

    | Constant                      | Description                                                                                                                                                     |
    | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Activates blending of the computed fragment color values. See {{domxref("WebGLRenderingContext.blendFunc()")}}.                                 |
    | `gl.CULL_FACE`                | Activates culling of polygons. See {{domxref("WebGLRenderingContext.cullFace()")}}.                                                            |
    | `gl.DEPTH_TEST`               | Activates depth comparisons and updates to the depth buffer. See {{domxref("WebGLRenderingContext.depthFunc()")}}.                              |
    | `gl.DITHER`                   | Activates dithering of color components before they get written to the color buffer.                                                                            |
    | `gl.POLYGON_OFFSET_FILL`      | Activates adding an offset to depth values of polygon's fragments. See {{domxref("WebGLRenderingContext.polygonOffset()")}}.                    |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Activates the computation of a temporary coverage value determined by the alpha value.                                                                          |
    | `gl.SAMPLE_COVERAGE`          | Activates ANDing the fragment's coverage with the temporary coverage value. See {{domxref("WebGLRenderingContext.sampleCoverage()")}}.       |
    | `gl.SCISSOR_TEST`             | Activates the scissor test that discards fragments that are outside of the scissor rectangle. See {{domxref("WebGLRenderingContext.scissor()")}}. |
    | `gl.STENCIL_TEST`             | Activates stencil testing and updates to the stencil buffer. See {{domxref("WebGLRenderingContext.stencilFunc()")}}.                          |

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the
    following values are available additionally:

    | Constant                | Description                                                                                                                                              |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitives are discarded immediately before the rasterization stage, but after the optional transform feedback stage. `gl.clear()` commands are ignored. |

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.enable(gl.DITHER);
```

To check if a capability is enabled, use the
{{domxref("WebGLRenderingContext.isEnabled()")}} method:

```js
gl.isEnabled(gl.DITHER);
// true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
