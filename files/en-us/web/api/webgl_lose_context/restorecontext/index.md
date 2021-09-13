---
title: WEBGL_lose_context.restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_lose_context.restoreContext
---
{{APIRef("WebGL")}}

The **WEBGL_lose_context.restoreContext()** method is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows you to simulate
restoring the context of a {{domxref("WebGLRenderingContext")}} object.

## Syntax

```js
gl.getExtension('WEBGL_lose_context').restoreContext();
```

### Errors thrown

- `INVALID_OPERATION` if the context was not lost.

## Examples

With this method, you can simulate the
[`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
event:

```js
var canvas = document.getElementById('canvas');
var gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextrestored', function(e) {
  console.log(e);
}, false);

gl.getExtension('WEBGL_lose_context').restoreContext();
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
