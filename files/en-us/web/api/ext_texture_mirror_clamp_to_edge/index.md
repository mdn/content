---
title: EXT_texture_mirror_clamp_to_edge extension
short-title: EXT_texture_mirror_clamp_to_edge
slug: Web/API/EXT_texture_mirror_clamp_to_edge
page-type: webgl-extension
browser-compat: api.EXT_texture_mirror_clamp_to_edge
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`EXT_texture_mirror_clamp_to_edge`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and provides a texture wrapping mode that mirrors a texture once, and then clamps to the edge of the texture.

> [!NOTE]
> This extension is available to both {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

- `ext.MIRROR_CLAMP_TO_EDGE_EXT`
  - : Texture wrapping mode that mirrors the texture for coordinates from -1 to 0, and uses the texels at the edge where the coordinate is 1 for coordinates less than -1 or greater than 1.

## Description

When this extension is enabled, the {{domxref("WebGLRenderingContext.texParameter()")}} method accepts `ext.MIRROR_CLAMP_TO_EDGE_EXT` as the value of the `gl.TEXTURE_WRAP_S` and `gl.TEXTURE_WRAP_T` parameters, and of the `gl.TEXTURE_WRAP_R` parameter in {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} contexts.
In WebGL 2 contexts, the {{domxref("WebGL2RenderingContext.samplerParameter()")}} method accepts it for the same parameters.

With this wrapping mode, a texture is sampled as if it were twice its size, and the additional half is a mirror image of the original texture:

- For texture coordinates from 0 to 1, the texture is sampled as usual.
- For texture coordinates from -1 to 0, the texture is sampled as if it were mirrored at coordinate 0.
- For texture coordinates less than -1 or greater than 1, the texels at the edge of the texture where the coordinate is 1 are used.
  Coordinates less than -1 are mirrored first, and then clamped in the same way as with `gl.CLAMP_TO_EDGE`.

You can use this wrapping mode to store a symmetric image, such as a glow, a vignette, or a lens flare, as a texture that contains only half of the image.
If you set the mode for both texture coordinates, the texture needs to contain only a quarter of the image.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method.
For more information, see [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions).

## Examples

### Enabling the extension

```js
const ext = gl.getExtension("EXT_texture_mirror_clamp_to_edge");
```

### Drawing a symmetric image from a quarter of it

Suppose that `texture` contains the upper-right quarter of a circular glow, with the center of the glow at texture coordinate (0, 0).
The following code sets the wrapping mode for both texture coordinates:

```js
gl.bindTexture(gl.TEXTURE_2D, texture);
gl.texParameteri(
  gl.TEXTURE_2D,
  gl.TEXTURE_WRAP_S,
  ext.MIRROR_CLAMP_TO_EDGE_EXT,
);
gl.texParameteri(
  gl.TEXTURE_2D,
  gl.TEXTURE_WRAP_T,
  ext.MIRROR_CLAMP_TO_EDGE_EXT,
);

gl.getTexParameter(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S) ===
  ext.MIRROR_CLAMP_TO_EDGE_EXT; // true
```

The fragment shader then converts the texture coordinates across the quad from the range 0 to 1 to the range -1 to 1, so that the full glow is drawn:

```glsl
precision mediump float;

uniform sampler2D uTexture;
varying vec2 vTexCoord; // From 0 to 1 across the quad

void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord * 2.0 - 1.0);
}
```

### Using the wrapping mode with a sampler

In WebGL 2 contexts, you can also set the wrapping mode on a {{domxref("WebGLSampler")}}:

```js
const sampler = gl.createSampler();
gl.samplerParameteri(sampler, gl.TEXTURE_WRAP_S, ext.MIRROR_CLAMP_TO_EDGE_EXT);
gl.samplerParameteri(sampler, gl.TEXTURE_WRAP_T, ext.MIRROR_CLAMP_TO_EDGE_EXT);
// A sampler replaces all of the texture's sampling parameters, so set the filter too
gl.samplerParameteri(sampler, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
gl.bindSampler(0, sampler);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.texParameter()")}}
- {{domxref("WebGL2RenderingContext.samplerParameter()")}}
