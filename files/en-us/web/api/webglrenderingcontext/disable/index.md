---
title: "WebGLRenderingContext: disable() method"
short-title: disable()
slug: Web/API/WebGLRenderingContext/disable
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.disable
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGLRenderingContext.disable()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) disables specific WebGL
capabilities for this context.

## Syntax

```js-nolint
disable(capability)
```

### Parameters

- `capability`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying which WebGL capability to disable. Possible
    values:

    | Constant                      | Description                                                                                                                                         |
    | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Deactivates blending of the computed fragment color values. See {{domxref("WebGLRenderingContext.blendFunc()")}}.                                   |
    | `gl.CULL_FACE`                | Deactivates culling of polygons. See {{domxref("WebGLRenderingContext.cullFace()")}}.                                                               |
    | `gl.DEPTH_TEST`               | Deactivates depth comparisons and updates to the depth buffer. See {{domxref("WebGLRenderingContext.depthFunc()")}}.                                |
    | `gl.DITHER`                   | Deactivates dithering of color components before they get written to the color buffer.                                                              |
    | `gl.POLYGON_OFFSET_FILL`      | Deactivates adding an offset to depth values of polygon's fragments. See {{domxref("WebGLRenderingContext.polygonOffset()")}}.                      |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Deactivates the computation of a temporary coverage value determined by the alpha value.                                                            |
    | `gl.SAMPLE_COVERAGE`          | Deactivates ANDing the fragment's coverage with the temporary coverage value. See {{domxref("WebGLRenderingContext.sampleCoverage()")}}.            |
    | `gl.SCISSOR_TEST`             | Deactivates the scissor test that discards fragments that are outside of the scissor rectangle. See {{domxref("WebGLRenderingContext.scissor()")}}. |
    | `gl.STENCIL_TEST`             | Deactivates stencil testing and updates to the stencil buffer. See {{domxref("WebGLRenderingContext.stencilFunc()")}}.                              |

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the
    following values are available additionally:

    | Constant                | Description                                                                                                                                                               |
    | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Deactivates that primitives are discarded immediately before the rasterization stage, but after the optional transform feedback stage. `gl.clear()` commands are ignored. |

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.disable(gl.DITHER);
```

To check if a capability is disabled, use the
{{domxref("WebGLRenderingContext.isEnabled()")}} method:

```js
gl.isEnabled(gl.DITHER);
// false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
