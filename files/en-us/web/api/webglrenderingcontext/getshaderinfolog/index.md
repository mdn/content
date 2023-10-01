---
title: "WebGLRenderingContext: getShaderInfoLog() method"
short-title: getShaderInfoLog()
slug: Web/API/WebGLRenderingContext/getShaderInfoLog
page-type: web-api-instance-method
browser-compat: api.WebGLRenderingContext.getShaderInfoLog
---

{{APIRef("WebGL")}}

The **WebGLRenderingContext.getShaderInfoLog** returns the information log
for the specified {{domxref("WebGLShader")}} object. It contains warnings, debugging and
compile information.

## Syntax

```js-nolint
getShaderInfoLog(shader)
```

### Parameters

- `shader`
  - : A {{domxref("WebGLShader")}} to query.

### Return value

A string that contains diagnostic messages, warning messages, and
other information about the last compile operation. When a {{domxref("WebGLShader")}}
object is initially created, its information log will be a string of length 0.

## Examples

### Checking compilation messages

```js
/* load shader source code. */
gl.shaderSource(shader, shaderCode);

/* compile shader source code. */
gl.compileShader(shader);

const message = gl.getShaderInfoLog(shader);

if (message.length > 0) {
  /* message may be an error or a warning */
  throw message;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getShaderParameter()")}} – used with
  `gl.COMPILE_STATUS` to check for a failed compile.
- {{domxref("WebGLRenderingContext.getError()")}}
