---
title: WEBGL_lose_context extension
short-title: WEBGL_lose_context
slug: Web/API/WEBGL_lose_context
page-type: webgl-extension
browser-compat: api.WEBGL_lose_context
---

{{APIRef("WebGL")}}

The **WEBGL_lose_context** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes functions to simulate losing and restoring a {{domxref("WebGLRenderingContext")}}.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Instance methods

- {{domxref("WEBGL_lose_context.loseContext()")}}
  - : Simulates losing the context.
- {{domxref("WEBGL_lose_context.restoreContext()")}}
  - : Simulates restoring the context.

## Examples

With this extension, you can simulate the [`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) and [`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) events:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// WebGLContextEvent event with type "webglcontextlost" is logged.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- Events: [`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [`webglcontextcreationerror`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
