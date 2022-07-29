---
title: WEBGL_debug_renderer_info
slug: Web/API/WEBGL_debug_renderer_info
page-type: webgl-extension
tags:
  - API
  - Reference
  - WebGL
  - WebGL extension
browser-compat: api.WEBGL_debug_renderer_info
---
{{APIRef("WebGL")}}

The **`WEBGL_debug_renderer_info`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and exposes two constants with information about the graphics driver for debugging purposes.

Depending on the privacy settings of the browser, this extension might only be available to privileged contexts. Generally, the graphics driver information should only be used in edge cases to optimize your WebGL content or to debug GPU problems. The {{domxref("WebGLRenderingContext.getParameter()")}} method can help you to detect which features are supported and the [`failIfMajorPerformanceCaveat`](/en-US/docs/Web/API/HTMLCanvasElement/getContext) context attribute lets you control if a context should be returned at all, if the performance would be dramatically slow.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** Depending on the privacy settings of the browser, this extension might only be available to privileged contexts or not work at all. In Firefox, if `privacy.resistFingerprinting` is set to `true`, this extensions is disabled.
>
> This extension is available to both, {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} and {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} contexts.

## Constants

- ext.UNMASKED_VENDOR_WEBGL
  - : Vendor string of the graphics driver.
- ext.UNMASKED_RENDERER_WEBGL
  - : Renderer string of the graphics driver.

## Examples

With the help of this extension, privileged contexts are able to retrieve debugging information about the user's graphic driver:

```js
const canvas = document.getElementById('canvas');
const gl = canvas.getContext('webgl');

const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

console.log(vendor);
console.log(renderer);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
