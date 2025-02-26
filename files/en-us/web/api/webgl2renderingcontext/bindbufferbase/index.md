---
title: "WebGL2RenderingContext: bindBufferBase() method"
short-title: bindBufferBase()
slug: Web/API/WebGL2RenderingContext/bindBufferBase
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.bindBufferBase
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`WebGL2RenderingContext.bindBufferBase()`** method of the
[WebGL 2 API](/en-US/docs/Web/API/WebGL_API) binds a given
{{domxref("WebGLBuffer")}} to a given binding point (`target`) at a given
`index`.

## Syntax

```js-nolint
bindBufferBase(target, index, buffer)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target for the bind operation. Possible
    values:

    - `gl.TRANSFORM_FEEDBACK_BUFFER`
    - `gl.UNIFORM_BUFFER`

- `index`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the `target`.
- `buffer`
  - : A {{domxref("WebGLBuffer")}} which to bind to the binding point
    (`target`).

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.bindBufferBase(gl.TRANSFORM_FEEDBACK_BUFFER, 0, buffer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}
