---
title: WebGLObject
slug: Web/API/WebGLObject
page-type: web-api-interface
browser-compat: api.WebGLObject
---

{{APIRef("WebGL")}}

The **`WebGLObject`** is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and is the parent interface for all WebGL objects.

This object has no public properties or methods on its own.

If the WebGL context is lost, the internal _invalidated_ flag of all `WebGLObject` instances is set to `true`.

## Objects inheriting from `WebGLObject`

WebGL 1:

- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLTexture")}}

WebGL 2:

- {{domxref("WebGLQuery")}} (and `WebGLTimerQueryEXT`)
- {{domxref("WebGLSampler")}}
- {{domxref("WebGLSync")}}
- {{domxref("WebGLTransformFeedback")}}
- {{domxref("WebGLVertexArrayObject")}} (and `WebGLVertexArrayObjectOES`)

## See also

- [`WebGLRenderingContext.isContextLost()`](/en-US/docs/Web/API/WebGLRenderingContext/isContextLost)
- [`WEBGL_lose_context`](/en-US/docs/Web/API/WEBGL_lose_context)
- [`webglcontextlost` event](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
