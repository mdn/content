---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
page-type: web-api-interface
browser-compat: api.ImageBitmapRenderingContext
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`ImageBitmapRenderingContext`** interface is a canvas rendering context that provides the functionality to replace the canvas's contents with the given {{domxref("ImageBitmap")}}. Its context id (the first argument to {{domxref("HTMLCanvasElement.getContext()")}} or {{domxref("OffscreenCanvas.getContext()")}}) is `"bitmaprenderer"`.

This interface is available in both the window and the [worker](/en-US/docs/Web/API/Web_Workers_API) context.

## Instance properties

- {{domxref("ImageBitmapRenderingContext.canvas")}} {{ReadOnlyInline}}
  - : A read-only reference to the {{domxref("HTMLCanvasElement")}} or {{domxref("OffscreenCanvas")}} object that is associated with the given context.

## Instance methods

- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}
  - : Displays the given `ImageBitmap` in the canvas associated with this rendering context. Ownership of the `ImageBitmap` is transferred to the canvas. This was previously named `transferImageBitmap()`, but was renamed in a spec change. The old name is being kept as an alias to avoid code breakage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas")}}
