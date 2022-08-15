---
title: WebGL2RenderingContext.isSync()
slug: Web/API/WebGL2RenderingContext/isSync
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.isSync
---
{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.isSync()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns `true` if the
passed object is a valid {{domxref("WebGLSync")}} object.

## Syntax

```js
isSync(sync)
```

### Parameters

- `sync`
  - : A {{domxref("WebGLSync")}} object to test.

### Return value

A {{domxref("WebGL_API/Types", "GLboolean")}} indicating whether the given object is a valid
{{domxref("WebGLSync")}} object (`true`) or not (`false`).

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}. `WebGLSync`
objects are not available in WebGL 1.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);

// …

gl.isSync(sync);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSync")}}
