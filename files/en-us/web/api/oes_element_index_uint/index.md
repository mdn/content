---
title: OES_element_index_uint extension
short-title: OES_element_index_uint
slug: Web/API/OES_element_index_uint
page-type: webgl-extension
browser-compat: api.OES_element_index_uint
---

{{APIRef("WebGL")}}

The **`OES_element_index_uint`** extension is part of the [WebGL API](/en-US/docs/Web/API/WebGL_API) and adds support for `gl.UNSIGNED_INT` types to {{domxref("WebGLRenderingContext.drawElements()")}}.

WebGL extensions are available using the {{domxref("WebGLRenderingContext.getExtension()")}} method. For more information, see also [Using Extensions](/en-US/docs/Web/API/WebGL_API/Using_Extensions) in the [WebGL tutorial](/en-US/docs/Web/API/WebGL_API/Tutorial).

> **Note:** This extension is only available to {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} contexts. In {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}, the functionality of this extension is available on the WebGL2 context by default.

## Extended methods

This extension extends {{domxref("WebGLRenderingContext.drawElements()")}}:

- The `type` parameter now accepts `gl.UNSIGNED_INT`.

## Examples

```js
const ext = gl.getExtension("OES_element_index_uint");

gl.drawElements(gl.POINTS, 8, gl.UNSIGNED_INT, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
