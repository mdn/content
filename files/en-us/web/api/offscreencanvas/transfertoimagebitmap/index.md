---
title: OffscreenCanvas.transferToImageBitmap()
slug: Web/API/OffscreenCanvas/transferToImageBitmap
page-type: web-api-instance-method
tags:
  - API
  - Canvas
  - Experimental
  - Method
  - OffscreenCanvas
  - Reference
browser-compat: api.OffscreenCanvas.transferToImageBitmap
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`OffscreenCanvas.transferToImageBitmap()`** method
creates an {{domxref("ImageBitmap")}} object from the most recently rendered image of
the `OffscreenCanvas`.

## Syntax

```js
transferToImageBitmap()
```

### Parameters

None.

### Return value

An {{domxref("ImageBitmap")}}.

## Examples

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("OffscreenCanvas")}}
- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap")}}
