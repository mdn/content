---
title: "WebGL2RenderingContext: bindSampler() method"
short-title: bindSampler()
slug: Web/API/WebGL2RenderingContext/bindSampler
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.bindSampler
---

{{APIRef("WebGL")}}

The **`WebGL2RenderingContext.bindSampler()`** method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) binds a
passed {{domxref("WebGLSampler")}} object to the texture unit at the passed index.

## Syntax

```js-nolint
bindSampler(unit, sampler)
```

### Parameters

- `unit`
  - : A {{domxref("WebGL_API/Types", "GLuint")}} specifying the index of the texture unit to which to bind
    the sampler to.
- `sampler`
  - : A {{domxref("WebGLSampler")}} object to bind.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const sampler = gl.createSampler();
gl.bindSampler(0, sampler);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLSampler")}}
