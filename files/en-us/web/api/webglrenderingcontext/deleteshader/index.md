---
title: "WebGLRenderingContext: deleteShader() method"
short-title: deleteShader()
slug: Web/API/WebGLRenderingContext/deleteShader
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.deleteShader
---

{{APIRef("WebGL")}}

The **`WebGLRenderingContext.deleteShader()`** method of the [WebGL API](/en-US/docs/Web/API/WebGL_API) marks a given
{{domxref("WebGLShader")}} object for deletion. It will then be deleted whenever the
shader is no longer in use. This method has no effect if the shader has already been
deleted, and the {{domxref("WebGLShader")}} is automatically marked for deletion when it
is destroyed by the garbage collector.

## Syntax

```js-nolint
deleteShader(shader)
```

### Parameters

- `shader`
  - : A {{domxref("WebGLShader")}} object to delete.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Deleting a shader

```js
gl.deleteShader(shader);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
