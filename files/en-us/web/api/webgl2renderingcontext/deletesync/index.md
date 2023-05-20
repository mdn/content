---
title: "WebGL2RenderingContext: deleteSync() method"
short-title: deleteSync()
slug: Web/API/WebGL2RenderingContext/deleteSync
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.deleteSync
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.deleteSync()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) deletes a given
{{domxref("WebGLSync")}} object.

## Syntax

```js-nolint
deleteSync(sync)
```

### Parameters

- `sync`
  - : A {{domxref("WebGLSync")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

`gl` must be a {{domxref("WebGL2RenderingContext")}}. `WebGLSync`
objects are not available in WebGL 1.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);

// …

gl.deleteSync(sync);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSync")}}
