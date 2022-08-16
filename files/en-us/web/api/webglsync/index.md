---
title: WebGLSync
slug: Web/API/WebGLSync
page-type: web-api-interface
tags:
  - API
  - Reference
  - WebGL
  - WebGL2
browser-compat: api.WebGLSync
---
{{APIRef("WebGL")}}

The **`WebGLSync`** interface is part of the [WebGL 2](/en-US/docs/Web/API/WebGL_API) API and is used to synchronize activities between the GPU and the application.

{{InheritanceDiagram}}

When working with `WebGLSync` objects, the following methods of the {{domxref("WebGL2RenderingContext")}} are useful:

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
- {{domxref("WebGL2RenderingContext.isSync()")}}
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
- {{domxref("WebGL2RenderingContext.waitSync()")}}
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}

## Examples

### Creating a `WebGLSync` object

in this example, `gl` must be a {{domxref("WebGL2RenderingContext")}}. `WebGLSync` objects are not available in WebGL 1.

```js
const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.finish()")}}
