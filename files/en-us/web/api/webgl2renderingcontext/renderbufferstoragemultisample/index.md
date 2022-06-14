---
title: WebGL2RenderingContext.renderbufferStorageMultisample()
slug: Web/API/WebGL2RenderingContext/renderbufferStorageMultisample
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGL2RenderingContext.renderbufferStorageMultisample
---
{{APIRef("WebGL")}}

The
**`WebGL2RenderingContext.renderbufferStorageMultisample()`**
method of the [WebGL 2 API](/en-US/docs/Web/API/WebGL_API) returns creates
and initializes a renderbuffer object's data store and allows specifying a number of
samples to be used.

## Syntax

```js
renderbufferStorageMultisample(target, samples, internalFormat, width, height)
```

### Parameters

- `target`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the target renderbuffer object. Possible values:

    - `gl.RENDERBUFFER`
      - : Buffer data storage for single images in a
        renderable internal format.

- `samples`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the number of samples to be used for the
    renderbuffer storage.
- `internalFormat`

  - : A {{domxref("WebGL_API/Types", "GLenum")}} specifying the internal format of the renderbuffer. Possible
    values (\`gl.DEPTH_STENCIL\` is not supported):

    - `gl.R8`
    - `gl.R8UI`
    - `gl.R8I`
    - `gl.R16UI`
    - `gl.R16I`
    - `gl.R32UI`
    - `gl.R32I`
    - `gl.RG8`
    - `gl.RG8UI`
    - `gl.RG8I`
    - `gl.RG16UI`
    - `gl.RG16I`
    - `gl.RG32UI`
    - `gl.RG32I`
    - `gl.RGB8`
    - `gl.RGBA8`
    - `gl.SRGB8_ALPHA8`
    - `gl.RGBA4`
    - `gl.RGB565`
    - `gl.RGB5_A1`
    - `gl.RGB10_A2`
    - `gl.RGBA8UI`
    - `gl.RGBA8I`
    - `gl.RGB10_A2UI`
    - `gl.RGBA16UI`
    - `gl.RGBA16I`
    - `gl.RGBA32I`
    - `gl.RGBA32UI`
    - `gl.DEPTH_COMPONENT16`
    - `gl.DEPTH_COMPONENT24`
    - `gl.DEPTH_COMPONENT32F`
    - `gl.DEPTH_STENCIL`
    - `gl.DEPTH24_STENCIL8`
    - `gl.DEPTH32F_STENCIL8`
    - `gl.STENCIL_INDEX8`

- `width`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the width of the renderbuffer in pixels.
- `height`
  - : A {{domxref("WebGL_API/Types", "GLsizei")}} specifying the height of the renderbuffer in pixels.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
gl.renderbufferStorageMultisample(gl.RENDERBUFFER, 4, gl.RBGA4, 256, 256);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.renderbufferStorage()")}}
- {{domxref("WebGLRenderingContext.bindRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.createRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.deleteRenderbuffer()")}}
- {{domxref("WebGLRenderingContext.getRenderbufferParameter()")}}
