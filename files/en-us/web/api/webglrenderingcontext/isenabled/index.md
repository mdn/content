---
title: "WebGLRenderingContext: isEnabled() method"
short-title: isEnabled()
slug: Web/API/WebGLRenderingContext/isEnabled
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.isEnabled
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.isEnabled()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) tests whether a specific WebGL
capability is enabled or not for this context.

By default, all capabilities except `gl.DITHER` are
**disabled**.

## Syntax

```js-nolint
isEnabled(cap)
```

### Parameters

- `cap`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which WebGL capability to test. Possible values:

    | Constant                      | Description                                                                                                                         |
    | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Blending of the computed fragment color values. See {{domxref("WebGLRenderingContext.blendFunc()")}}.                               |
    | `gl.CULL_FACE`                | Culling of polygons. See {{domxref("WebGLRenderingContext.cullFace()")}}.                                                           |
    | `gl.DEPTH_TEST`               | Depth comparisons and updates to the depth buffer. See {{domxref("WebGLRenderingContext.depthFunc()")}}.                            |
    | `gl.DITHER`                   | Dithering of color components before they get written to the color buffer.                                                          |
    | `gl.POLYGON_OFFSET_FILL`      | Adding an offset to depth values of polygon's fragments. See {{domxref("WebGLRenderingContext.polygonOffset()")}}.                  |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Computation of a temporary coverage value determined by the alpha value.                                                            |
    | `gl.SAMPLE_COVERAGE`          | ANDing the fragment's coverage with the temporary coverage value. See {{domxref("WebGLRenderingContext.sampleCoverage()")}}.        |
    | `gl.SCISSOR_TEST`             | Scissor test that discards fragments that are outside of the scissor rectangle. See {{domxref("WebGLRenderingContext.scissor()")}}. |
    | `gl.STENCIL_TEST`             | Stencil testing and updates to the stencil buffer. See {{domxref("WebGLRenderingContext.stencilFunc()")}}.                          |

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the
    following values are available additionally:

    | Constant                | Description                                                                                                                                              |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitives are discarded immediately before the rasterization stage, but after the optional transform feedback stage. `gl.clear()` commands are ignored. |

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating if the capability _cap_ is enabled
(`true`), or not (`false`).

## Examples

```js
gl.isEnabled(gl.STENCIL_TEST);
// false
```

To activate or deactivate a specific capability, use the
{{domxref("WebGLRenderingContext.enable()")}} and
{{domxref("WebGLRenderingContext.disable()")}} methods:

```js
gl.enable(gl.STENCIL_TEST);
gl.disable(gl.STENCIL_TEST);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
