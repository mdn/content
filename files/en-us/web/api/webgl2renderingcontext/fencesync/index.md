---
title: WebGL2RenderingContext.fenceSync()
slug: Web/API/WebGL2RenderingContext/fenceSync
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.fenceSync
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.fenceSync()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) creates a new
{{domxref("WebGLSync")}} object and inserts it into the GL command stream.

## Syntax

```js
WebGLSync gl.fenceSync(condition, flags);
```

### Parameters

- `condition`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the condition that must be met to set the sync
    object's state to signaled. Must be `gl.SYNC_GPU_COMMANDS_COMPLETE`.
- flags
  - : A {{domxref("WebGL_API/Types", "GLbitfield")}} specifying a bitwise combination of flags controlling
    the behavior of the sync object. Must be `0` (exists for extensions only).

### Return value

A {{domxref("WebGLSync")}} object.

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}. `WebGLSync`
objects are not available in WebGL 1.

```js
var sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSync")}}
