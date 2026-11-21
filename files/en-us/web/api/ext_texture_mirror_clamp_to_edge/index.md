---
title: EXT_texture_mirror_clamp_to_edge extension
short-title: EXT_texture_mirror_clamp_to_edge
slug: Web/API/EXT_texture_mirror_clamp_to_edge
page-type: webgl-extension
browser-compat: api.EXT_texture_mirror_clamp_to_edge
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`EXT_texture_mirror_clamp_to_edge`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and provides a new texture wrapping mode.
A wrapping mode controls what a texture shows for texture coordinates outside the usual range of 0 to 1.
This mode shows a mirror image of the texture once, and beyond that uses the colors at the texture's edge.

> [!NOTE]
> This extension is available to both {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

- `ext.MIRROR_CLAMP_TO_EDGE_EXT`
  - : Texture wrapping mode that mirrors the texture for coordinates from -1 to 0, and uses the texels (texture pixels) at the edge where the coordinate is 1 for coordinates less than -1 or greater than 1.

## Description

When this extension is enabled, the {{domxref("WebGLRenderingContext.texParameter()")}} method accepts `ext.MIRROR_CLAMP_TO_EDGE_EXT` as the value of the `gl.TEXTURE_WRAP_S` and `gl.TEXTURE_WRAP_T` parameters, and of the `gl.TEXTURE_WRAP_R` parameter in {{domxref("WebGL2RenderingContext", "WebGL 2", "", 1)}} contexts.
In WebGL 2 contexts, the {{domxref("WebGL2RenderingContext.samplerParameter()")}} method accepts it for the same parameters.
Each parameter sets the wrapping mode for one texture coordinate: `s` is horizontal, `t` is vertical, and `r` is the depth of a 3D texture.

With this wrapping mode, a texture is sampled (read) as if it were twice its size in each direction the mode is set for, with the added part being a mirror image of the original texture:

- For texture coordinates from 0 to 1, the texture is sampled as usual.
- For texture coordinates from -1 to 0, the texture is sampled as if it were mirrored at coordinate 0.
- For texture coordinates less than -1 or greater than 1, the texels at the edge of the texture where the coordinate is 1 are used.
  Coordinates less than -1 are mirrored first, so a coordinate of -1.5 is treated like 1.5, and uses the same texels as coordinates greater than 1.

You can use this wrapping mode to store a symmetric image, such as a glow, a vignette, or a lens flare, as a texture that contains only half of the image.
If you set the mode for both the horizontal and vertical coordinates, the texture needs to contain only a quarter of the image.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method.
For more information, see [Using WebGL extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions).

## Examples

### Enabling the extension

```js
const ext = gl.getExtension("EXT_texture_mirror_clamp_to_edge");
```

### Drawing a symmetric image from a quarter of it

Suppose that `texture` contains the upper-right quarter of a circular glow, with the center of the glow at texture coordinate (0, 0), the bottom-left corner of the texture.
The following code sets the wrapping mode for both the horizontal and vertical coordinates:

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

The fragment shader then converts the texture coordinates across the rectangle being drawn from the range 0 to 1 to the range -1 to 1.
This puts texture coordinate (0, 0), the center of the glow, in the middle of the rectangle, and the mirrored copies of the texture fill the other three quarters around it, so the full glow is drawn:

```glsl
precision mediump float;

uniform sampler2D uTexture;
varying vec2 vTexCoord; // From 0 to 1 across the rectangle

void main() {
  gl_FragColor = texture2D(uTexture, vTexCoord * 2.0 - 1.0);
}
```

### Using the wrapping mode with a sampler

In WebGL 2 contexts, you can also set the wrapping mode on a {{domxref("WebGLSampler")}}, an object that holds sampling settings separately from the texture.
A sampler's settings replace all of the texture's own sampling settings, not just the wrapping mode.
The sampler's default filter for drawing the texture smaller than its actual size needs mipmaps (prebuilt smaller copies of the texture), and a texture without them is drawn black.
The following code therefore also sets a filter that doesn't need mipmaps:

```js
const sampler = gl.createSampler();
gl.samplerParameteri(sampler, gl.TEXTURE_WRAP_S, ext.MIRROR_CLAMP_TO_EDGE_EXT);
gl.samplerParameteri(sampler, gl.TEXTURE_WRAP_T, ext.MIRROR_CLAMP_TO_EDGE_EXT);
gl.samplerParameteri(sampler, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
// Use the sampler for the texture in texture unit 0, the default
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
