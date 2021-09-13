---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
tags:
  - API
  - Canvas
  - Experimental
  - Interface
  - OffscreenCanvas
  - Reference
browser-compat: api.ImageBitmapRenderingContext
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`ImageBitmapRenderingContext`** interface is a canvas rendering context that provides the functionality to replace the canvas's contents with the given {{domxref("ImageBitmap")}}. Its context id (the first argument to {{domxref("HTMLCanvasElement.getContext()")}} or {{domxref("OffscreenCanvas.getContext()")}}) is `"bitmaprenderer"`.

This interface is available in both the window and the [worker](/en-US/docs/Web/API/Web_Workers_API) context.

## Methods

- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}
  - : Displays the given `ImageBitmap` in the canvas associated with this rendering context. Ownership of the `ImageBitmap` is transferred to the canvas. This was previously named `transferImageBitmap()`, but was renamed in a spec change. The old name is being kept as an alias to avoid code breakage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffScreenCanvas")}}
