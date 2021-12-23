---
title: ImageBitmapRenderingContext.transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
tags:
  - API
  - Experimental
  - ImageBitmapRenderingContext
  - Method
  - OffscreenCanvas
  - Reference
  - transferFromImageBitmap
browser-compat: api.ImageBitmapRenderingContext.transferFromImageBitmap
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`ImageBitmapRenderingContext.transferFromImageBitmap()`**
method displays the given {{domxref("ImageBitmap")}} in the canvas associated with this
rendering context. The ownership of the `ImageBitmap` is transferred to the
canvas as well.

This method was previously named `transferImageBitmap()`, but was renamed in
a spec change. The old name is being kept as an alias to avoid code breakage.

## Syntax

```js
void ImageBitmapRenderingContext.transferFromImageBitmap(bitmap)
```

### Parameters

- `bitmap`
  - : An {{domxref("ImageBitmap")}} object to transfer.

## Examples

### HTML

```html
<canvas id="htmlCanvas"></canvas>
```

### JavaScript

```js
var htmlCanvas = document.getElementById("htmlCanvas").getContext("bitmaprenderer");

// Draw a WebGL scene offscreen
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");

// ... some drawing using the gl context ...

// Transfer the current frame to the visible canvas
var bitmap = offscreen.transferToImageBitmap();
htmlCanvas.transferFromImageBitmap(bitmap);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
