---
title: WEBGL_lose_context.restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
page-type: webgl-extension-method
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
restoreContext()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

Browsers may not report WebGL errors by default. WebGL's error reporting works by calling {{domxref("WEBGLRenderingContext.getError", "getError()")}} and checking for errors. The following exceptions may be thrown:

- `INVALID_OPERATION`
  - : Thrown if the context was not lost.

## Examples

With this method, you can simulate the
[`webglcontextrestored`](/en-US/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
event:

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

canvas.addEventListener('webglcontextrestored', (e) => {
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
