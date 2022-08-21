---
title: WEBGL_lose_context.loseContext()
slug: Web/API/WEBGL_lose_context/loseContext
page-type: webgl-extension-method
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
loseContext()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

With this method, you can simulate the
[`webglcontextlost`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
event:

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextlost', (e) => {
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
