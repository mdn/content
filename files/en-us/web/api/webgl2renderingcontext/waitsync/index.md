---
title: WebGL2RenderingContext.waitSync()
slug: Web/API/WebGL2RenderingContext/waitSync
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.waitSync
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.waitSync()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns immediately, but waits on
the GL server until the given {{domxref("WebGLSync")}} object is signaled.

The method is a no-op in the absence of the possibility of synchronizing between
multiple GL contexts.

## Syntax

```js
void gl.waitSync(sync, flags, timeout);
```

### Parameters

- `sync`
  - : A {{domxref("WebGLSync")}} object on which to wait on.
- flags
  - : A {{domxref("WebGL_API/Types", "GLbitfield")}} specifying a bitwise combination of flags controlling
    the flushing behavior. Must be `0` (exists for extensions only).
- timeout
  - : A {{domxref("WebGL_API/Types", "GLint64")}} specifying a timeout the server should wait before
    continuing. Must be `gl.TIMEOUT_IGNORED`.

### Return value

None.

## Examples

```js
var sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
gl.waitSync(sync, 0, gl.TIMEOUT_IGNORED);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSync")}}
