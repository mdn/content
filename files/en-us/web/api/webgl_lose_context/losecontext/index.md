---
title: WEBGL_lose_context.loseContext()
slug: Web/API/WEBGL_lose_context/loseContext
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_lose_context.loseContext
---
{{APIRef("WebGL")}}

The **WEBGL_lose_context.loseContext()** method is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows you to simulate losing
the context of a {{domxref("WebGLRenderingContext")}} context.

It triggers the steps described in the WebGL specification for handling context lost.
The context will remain lost until {{domxref("WEBGL_lose_context.restoreContext()")}} is
called.

## Syntax

```js
gl.getExtension('WEBGL_lose_context').loseContext();
```

## Examples

With this method, you can simulate the
[`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
event:

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextlost', function(e) {
  console.log(e);
}, false);

gl.getExtension('WEBGL_lose_context').loseContext();

// WebGLContextEvent event with type "webglcontextlost" is logged.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- Events:
  [`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event),
  [`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event),
  [`webglcontextcreationerror`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
