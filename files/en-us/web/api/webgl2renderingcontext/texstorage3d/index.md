---
title: "WebGL2RenderingContext: texStorage3D() method"
short-title: texStorage3D()
slug: Web/API/WebGL2RenderingContext/texStorage3D
page-type: web-api-instance-method
browser-compat: api.WebGL2RenderingContext.texStorage3D
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

The **`texStorage3D()`** method of the {{domxref("WebGL2RenderingContext")}} of the [WebGL API](/en-US/docs/Web/API/WebGL_API) specifies all levels of three-dimensional texture storage.

## Syntax

```js-nolint
texStorage3D(target, levels, internalformat, width, height, depth)
```

### Parameters

- `target`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the binding point (target) of the active texture. Possible values:
    - `gl.TEXTURE_3D`: A three-dimensional texture.
    - `gl.TEXTURE_2D_ARRAY`: A two-dimensional array texture.
- `levels`
  - : A {{domxref("WebGL_API/Types", "GLint")}} specifying the number of texture levels.
- `internalformat`
  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the texture store format. For a list of possible values, see {{domxref("WebGL2RenderingContext.texStorage2D()")}}.
- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the texture in texels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the texture in texels.
- `depth`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the depth of the texture/the number of textures in a `TEXTURE_2D_ARRAY`.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.texStorage3D(gl.TEXTURE_3D, 1, gl.RGB8, 256, 256, 256);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGL2RenderingContext.texStorage2D()")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
