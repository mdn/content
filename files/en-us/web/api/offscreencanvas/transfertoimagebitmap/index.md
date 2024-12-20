---
title: "OffscreenCanvas: transferToImageBitmap() method"
short-title: transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
page-type: web-api-instance-method
browser-compat: api.OffscreenCanvas.transferToImageBitmap
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`OffscreenCanvas.transferToImageBitmap()`** method creates an {{domxref("ImageBitmap")}} object from the most recently rendered image of the `OffscreenCanvas`. The `OffscreenCanvas` allocates a new image for its subsequent rendering.

## Syntax

```js-nolint
transferToImageBitmap()
```

### Parameters

None.

### Return value

A newly-allocated {{domxref("ImageBitmap")}}.

This `ImageBitmap` references a potentially large graphics resource, and to ensure your web application remains robust, it is important to avoid allocating too many of these resources at any point in time. For this reason it is important to ensure that the `ImageBitmap` is either _consumed_ or _closed_.

As described in the {{domxref("OffscreenCanvas")}} examples, passing this `ImageBitmap` to {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}} _consumes_ the `ImageBitmap` object; it no longer references the underlying graphics resource, and can not be passed to any other web APIs.

If your goal is to pass the `ImageBitmap` to other web APIs which do not consume it - for example, {{domxref("CanvasRenderingContext2D.drawImage()")}} - then you should _close_ it when you're done with it by calling {{domxref("ImageBitmap.close()")}}. Don't simply drop the JavaScript reference to the `ImageBitmap`; doing so will keep its graphics resource alive until the next time the garbage collector runs.

If you call `transferToImageBitmap()` and don't intend to pass it to {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}, consider whether you need to call `transferToImageBitmap()` at all. Many web APIs which accept `ImageBitmap` also accept `OffscreenCanvas` as an argument.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Throws if:
    - the canvas has transferred to another context scope, such as a worker
    - the canvas context mode has not been set by calling {{domxref("OffscreenCanvas.getContext()")}}.

## Examples

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }

// Either:
// Pass this `ImageBitmap` to `ImageBitmapRenderingContext.transferFromImageBitmap`
// or:
// Use the `ImageBitmap` with other web APIs, and call `ImageBitmap.close()`!
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("OffscreenCanvas")}}
- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap")}}
