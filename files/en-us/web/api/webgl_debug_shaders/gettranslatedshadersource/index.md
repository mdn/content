---
title: "WEBGL_debug_shaders: getTranslatedShaderSource() method"
short-title: getTranslatedShaderSource()
slug: Web/API/WEBGL_debug_shaders/getTranslatedShaderSource
page-type: webgl-extension-method
browser-compat: api.WEBGL_debug_shaders.getTranslatedShaderSource
---

{{APIRef("WebGL")}}

The **`WEBGL_debug_shaders.getTranslatedShaderSource()`**
method is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and allows
you to debug a translated shader.

## Syntax

```js-nolint
getTranslatedShaderSource(shader)
```

### Parameters

- `shader`
  - : A {{domxref("WebGLShader")}} to get the translated source from.

### Return value

A {{jsxref("String")}} containing the translated shader source. An empty string is
returned, if:

- no source has been defined or,
- {{domxref("WebGLRenderingContext.compileShader()")}} has not yet been called or,
- the translation for the shader failed.

## Examples

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const shader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(
  shader,
  "void main() { gl_FragColor = vec4(gl_FragCoord.x, 0.0, 0.0, 1.0); }",
);
gl.compileShader(shader);

const src = gl
  .getExtension("WEBGL_debug_shaders")
  .getTranslatedShaderSource(shader);
console.log(src);
// "void main(){
// (gl_FragColor = vec4(gl_FragCoord.x, 0.0, 0.0, 1.0));
// }"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
