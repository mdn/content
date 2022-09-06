---
title: WebGLRenderingContext.commit()
slug: Web/API/WebGLRenderingContext/commit
page-type: web-api-instance-method
tags:
  - API
  - Method
  - OffscreenCanvas
  - Reference
  - WebGL
  - Experimental
browser-compat: api.WebGLRenderingContext.commit
---
{{APIRef("WebGL")}}{{SeeCompatTable}}

The
**`WebGLRenderingContext.commit()`**
method pushes frames back to the original {{domxref("HTMLCanvasElement")}}, if the
context is not directly fixed to a specific canvas.

## Syntax

```js
commit()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const htmlCanvas = document.createElement('canvas');
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext('webgl');

// Perform some drawing using the gl context

// Push frames back to the original HTMLCanvasElement
gl.commit();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("WebGLRenderingContext")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}}
