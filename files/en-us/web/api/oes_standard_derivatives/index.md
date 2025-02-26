---
title: OES_standard_derivatives extension
short-title: OES_standard_derivatives
slug: Web/API/OES_standard_derivatives
page-type: webgl-extension
browser-compat: api.OES_standard_derivatives
---

{{APIRef("WebGL")}}

The **`OES_standard_derivatives`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds the GLSL derivative functions `dFdx`, `dFdy`, and `fwidth`.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. In WebGL 2, the constant is available as `gl.FRAGMENT_SHADER_DERIVATIVE_HINT` and it requires GLSL `#version 300 es`.

## Constants

This extension exposes one new constant, which can be used in the {{domxref("WebGLRenderingContext.hint()", "hint()")}} and {{domxref("WebGLRenderingContext.getParameter()", "getParameter()")}} methods.

- `ext.FRAGMENT_SHADER_DERIVATIVE_HINT_OES`
  - : A {{domxref("WebGL_API.Types", "GLenum")}} indicating the accuracy of the derivative calculation for the GLSL built-in functions: `dFdx`, `dFdy`, and `fwidth`.

## GLSL built-in functions

The following new functions can be used in GLSL shader code, if this extension is enabled:

```cpp
genType dFdx(genType p)
genType dFdy(genType p)
genType fwidth(genType p)
```

- `dFdx()`
  - : Returns the derivative in `x` using local differencing for the input argument `p`.
- `dFdy()`
  - : Returns the derivative in `y` using local differencing for the input argument `p`.
- `fwidth()`
  - : Returns the sum of the absolute derivative in `x` and `y` using local differencing for the input argument `p`. That is, `abs(dFdx(p)) + abs(dFdy(p))`.

`dFdx()` and `dFdy()` are commonly used to estimate the filter width used to anti-alias procedural textures.

## Examples

Enabling the extensions:

```js
gl.getExtension("OES_standard_derivatives");
gl.getExtension("EXT_shader_texture_lod");
```

Shader code that avoids artifacts when wrapping texture coordinates:

```html
<script type="x-shader/x-fragment">
  #extension GL_EXT_shader_texture_lod : enable
  #extension GL_OES_standard_derivatives : enable

  uniform sampler2D myTexture;
  varying vec2 texCoord;

  void main(){
    gl_FragColor = texture2DGradEXT(myTexture, mod(texCoord, vec2(0.1, 0.5)),
                                    dFdx(texCoord), dFdy(texCoord));
  }
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("EXT_shader_texture_lod")}}
