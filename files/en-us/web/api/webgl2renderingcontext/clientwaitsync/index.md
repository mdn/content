---
title: WebGL2RenderingContext.clientWaitSync()
slug: Web/API/WebGL2RenderingContext/clientWaitSync
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.clientWaitSync
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.clientWaitSync()`** method of the
[WebGL 2 API](/en-US/docs/Web/API/WebGL_API) blocks and waits for a
{{domxref("WebGLSync")}} object to become signaled or a given timeout to be passed.

## Syntax

```js
clientWaitSync(sync, flags, timeout)
```

### Parameters

- `sync`
  - : A {{domxref("WebGLSync")}} object on which to wait on.
- `flags`
  - : A {{domxref("WebGL_API/Types", "GLbitfield")}} specifying a bitwise combination of flags controlling
    the flushing behavior. May be `gl.SYNC_FLUSH_COMMANDS_BIT`.
- `timeout`
  - : A {{domxref("WebGL_API/Types", "GLint64")}} specifying a timeout (in nanoseconds) for which to wait for
    the sync object to become signaled. Must not be larger than
    `gl.MAX_CLIENT_WAIT_TIMEOUT_WEBGL`.

### Return value

A {{domxref("WebGL_API/Types", "GLenum")}} indicating the sync object's status.

- `gl.ALREADY_SIGNALED`: Indicates that the sync object was signaled when
  this method was called.
- `gl.TIMEOUT_EXPIRED`: Indicates that the `timeout` time passed
  and that the sync object did not become signaled.
- `gl.CONDITION_SATISFIED`: Indicates that the sync object was signaled
  before the `timeout` expired.
- `gl.WAIT_FAILED`: Indicates that an error occurred during the execution.

## Examples

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
const status = gl.clientWaitSync(sync, 0, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSync")}}
