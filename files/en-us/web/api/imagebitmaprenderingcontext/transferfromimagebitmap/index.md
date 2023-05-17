---
title: "ImageBitmapRenderingContext: transferFromImageBitmap() method"
short-title: transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
page-type: web-api-instance-method
browser-compat: api.ImageBitmapRenderingContext.transferFromImageBitmap
---

{{APIRef("Canvas API")}}

The **`ImageBitmapRenderingContext.transferFromImageBitmap()`**
method displays the given {{domxref("ImageBitmap")}} in the canvas associated with this
rendering context. The ownership of the `ImageBitmap` is transferred to the
canvas as well.

This method was previously named `transferImageBitmap()`, but was renamed in
a spec change. The old name is being kept as an alias to avoid code breakage.

## Syntax

```js-nolint
transferFromImageBitmap(bitmap)
```

### Parameters

- `bitmap`
  - : An {{domxref("ImageBitmap")}} object to transfer.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### HTML

```html
<canvas id="htmlCanvas"></canvas>
```

### JavaScript

```js
const htmlCanvas = document
  .getElementById("htmlCanvas")
  .getContext("bitmaprenderer");

// Draw a WebGL scene offscreen
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// Perform some drawing using the gl context

// Transfer the current frame to the visible canvas
const bitmap = offscreen.transferToImageBitmap();
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
