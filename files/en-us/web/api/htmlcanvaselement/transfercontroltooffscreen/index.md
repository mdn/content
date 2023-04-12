---
title: "HTMLCanvasElement: transferControlToOffscreen() method"
short-title: transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.transferControlToOffscreen
---

{{APIRef("Canvas API")}}

The **`HTMLCanvasElement.transferControlToOffscreen()`** method transfers control to an {{domxref("OffscreenCanvas")}} object, either on the main thread or on a worker.

## Syntax

```js-nolint
transferControlToOffscreen()
```

### Parameters

None.

### Return value

An {{domxref("OffscreenCanvas")}} object.

## Examples

The following example shows how to transfer control to an {{domxref("OffscreenCanvas")}} object on the main thread.

```js
const htmlCanvas = document.createElement("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext("webgl");

// Some drawing using the gl context…
```

The following example shows how to transfer control to an {{domxref("OffscreenCanvas")}} object on a worker.

```js
const offscreen = document.querySelector("canvas").transferControlToOffscreen();
const worker = new Worker("myworkerurl.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("HTMLCanvasElement")}}
- {{domxref("OffscreenCanvas")}}
