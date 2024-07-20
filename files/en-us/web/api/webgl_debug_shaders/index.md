---
title: WEBGL_debug_shaders extension
short-title: WEBGL_debug_shaders
slug: Web/API/WEBGL_debug_shaders
page-type: webgl-extension
browser-compat: api.WEBGL_debug_shaders
---

{{APIRef("WebGL")}}

The **`WEBGL_debug_shaders`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes a method to debug shaders from privileged contexts.

This extension is not directly available to websites as the way of how the shader is translated may uncover personally-identifiable information to the web page about the kind of graphics card in the user's computer.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** Depending on the privacy settings of the browser, this extension might only be available to privileged contexts.
>
> This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Instance methods

- {{domxref("WEBGL_debug_shaders.getTranslatedShaderSource()")}}
  - : Returns the translated shader source.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
