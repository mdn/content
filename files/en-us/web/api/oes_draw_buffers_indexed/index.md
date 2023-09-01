---
title: OES_draw_buffers_indexed
slug: Web/API/OES_draw_buffers_indexed
page-type: web-api-interface
browser-compat: api.OES_draw_buffers_indexed
---

{{APIRef("WebGL")}}

The **`OES_draw_buffers_indexed`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and enables the use of different blend options when writing to multiple color buffers simultaneously.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Instance methods

- {{DOMxRef("OES_draw_buffers_indexed.blendEquationiOES()")}}
  - : Sets both the RGB and alpha blend equations for a particular draw buffer.
- {{DOMxRef("OES_draw_buffers_indexed.blendEquationSeparateiOES()")}}
  - : Sets the RGB and alpha blend equations separately for a particular draw buffer.
- {{DOMxRef("OES_draw_buffers_indexed.blendFunciOES()")}}
  - : Defines which function is used when blending pixels for a particular draw buffer.
- {{DOMxRef("OES_draw_buffers_indexed.blendFuncSeparateiOES()")}}
  - : Defines which function is used when blending pixels for RGB and alpha components separately for a particular draw buffer.
- {{DOMxRef("OES_draw_buffers_indexed.colorMaskiOES()")}}
  - : Sets which color components to enable or to disable when drawing or rendering for a particular draw buffer.
- {{DOMxRef("OES_draw_buffers_indexed.disableiOES()")}}
  - : Disables blending for a particular draw buffer.
- {{DOMxRef("OES_draw_buffers_indexed.enableiOES()")}}
  - : Enables blending for a particular draw buffer.

## Examples

### Using the `OES_draw_buffers_indexed` extension

Enable the extension with a call to {{domxref("WebGLRenderingContext.getExtension()")}}.

```js
const ext = gl.getExtension("OES_draw_buffers_indexed");
```

You can now enable blending, set blending equation, blending function, and color mask for a particular draw buffer.

```js
// For gl.DRAW_BUFFER0
ext.enableiOES(gl.BLEND, 0);
ext.blendEquationiOES(0, gl.FUNC_ADD);
ext.blendFunciOES(0, gl.ONE, gl.ONE);
ext.colorMaskiOES(0, 1, 0, 0, 0);

// For gl.DRAW_BUFFER1
ext.enableiOES(gl.BLEND, 1);
ext.blendEquationSeparateiOES(1, gl.FUNC_ADD, gl.FUNC_SUBTRACT);
ext.blendFuncSeparateiOES(
  1,
  gl.SRC_ALPHA,
  gl.ONE_MINUS_SRC_ALPHA,
  gl.ZERO,
  gl.ZERO,
);
ext.colorMaskiOES(1, 0, 1, 0, 0);
```

To retrieve settings for a particular draw buffer, use {{domxref("WebGL2RenderingContext.getIndexedParameter()")}}.

```js
// For gl.DRAW_BUFFER0
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 0);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 0);
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 0);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 0);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 0);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 0);
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 0);

// For gl.DRAW_BUFFER1
gl.getIndexedParameter(gl.BLEND_EQUATION_RGB, 1);
gl.getIndexedParameter(gl.BLEND_EQUATION_ALPHA, 1);
gl.getIndexedParameter(gl.BLEND_SRC_RGB, 1);
gl.getIndexedParameter(gl.BLEND_SRC_ALPHA, 1);
gl.getIndexedParameter(gl.BLEND_DST_RGB, 1);
gl.getIndexedParameter(gl.BLEND_DST_ALPHA, 1);
gl.getIndexedParameter(gl.COLOR_WRITEMASK, 1);
```

You can use {{domxref("WebGLRenderingContext.getParameter()")}} to see how many draw buffers are available.

```js
const maxDrawBuffers = gl.getParameter(gl.MAX_DRAW_BUFFERS);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
