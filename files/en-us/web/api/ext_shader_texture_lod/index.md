---
title: EXT_shader_texture_lod extension
short-title: EXT_shader_texture_lod
slug: Web/API/EXT_shader_texture_lod
page-type: webgl-extension
browser-compat: api.EXT_shader_texture_lod
---

{{APIRef("WebGL")}}

The **`EXT_shader_texture_lod`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds additional texture functions to the OpenGL ES Shading Language which provide the shader writer with explicit control of LOD ([Level of detail](https://en.wikipedia.org/wiki/Level_of_detail)).

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default. It requires GLSL `#version 300 es`.

## GLSL built-in functions

The following new functions can be used in GLSL shader code, if this extension is enabled:

```c
vec4 texture2DLodEXT(sampler2D sampler, vec2 coord, float lod)
vec4 texture2DProjLodEXT(sampler2D sampler, vec3 coord, float lod)
vec4 texture2DProjLodEXT(sampler2D sampler, vec4 coord, float lod)
vec4 textureCubeLodEXT(samplerCube sampler, vec3 coord, float lod)
vec4 texture2DGradEXT(sampler2D sampler, vec2 P, vec2 dPdx, vec2 dPdy)
vec4 texture2DProjGradEXT(sampler2D sampler, vec3 P, vec2 dPdx, vec2 dPdy)
vec4 texture2DProjGradEXT(sampler2D sampler, vec4 P, vec2 dPdx, vec2 dPdy)
vec4 textureCubeGradEXT(samplerCube sampler, vec3 P, vec3 dPdx, vec3 dPdy)
```

## Examples

Enabling the extensions:

```js
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
- {{domxref("OES_standard_derivatives")}}
