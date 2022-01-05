---
title: HTMLCanvasElement.transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
tags:
  - API
  - Experimental
  - HTMLCanvasElement
  - Method
  - OffscreenCanvas
  - Reference
browser-compat: api.HTMLCanvasElement.transferControlToOffscreen
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The
**`HTMLCanvasElement.transferControlToOffscreen()`**
method transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main
thread or on a worker.

## Syntax

```js
OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()
```

### Return value

An {{domxref("OffscreenCanvas")}} object.

## Examples

The following example shows how to transfer control to an {{domxref("OffscreenCanvas")}} object on the main thread.

```js
const htmlCanvas = document.createElement('canvas');
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext('webgl');

// ... some drawing using the gl context ...

// Push frames back to the original HTMLCanvasElement
gl.commit();
```

The following example shows how to transfer control to an {{domxref("OffscreenCanvas")}} object on a worker.

```js
const offscreen = document.querySelector('canvas').transferControlToOffscreen();
const worker = new Worker('myworkerurl.js');
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("HTMLCanvasElement")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("WebGLRenderingContext.commit()")}}
