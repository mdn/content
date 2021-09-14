---
title: OffscreenCanvas.convertToBlob()
slug: Web/API/OffscreenCanvas/convertToBlob
tags:
  - API
  - Canvas
  - Experimental
  - Method
  - OffscreenCanvas
  - Reference
browser-compat: api.OffscreenCanvas.convertToBlob
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`OffscreenCanvas.convertToBlob()`** method creates a {{domxref("Blob")}} object representing the image contained in the canvas.

## Syntax

    Promise<Blob> OffscreenCanvas.convertToBlob(options);

### Parameters

- `options`{{optional_inline}}

  - : You can specify several options when converting your {{domxref("OffscreenCanvas")}} object into a {{domxref("Blob")}} object, for example:

        const blob = offscreenCanvas.convertToBlob({
          type: "image/jpeg",
          quality: 0.95
        });

    options:

    - **`type`**: A {{domxref("DOMString")}} indicating the image format. The default type is `image/png`.
    - **`quality`**: A {{jsxref("Number")}} between `0` and `1` indicating image quality if the `type` option is `image/jpeg` or `image/webp`. If this argument is anything else, the default value for image quality is used. Other arguments are ignored.

### Return value

A {{jsxref("Promise")}} returning a {{domxref("Blob")}} object representing the image contained in the canvas.

## Examples

    var offscreen = new OffscreenCanvas(256, 256);
    var gl = offscreen.getContext("webgl");

    // ... some drawing using the gl context ...

    offscreen.convertToBlob().then(function(blob) {
      console.log(blob);
    });

    // Blob { size: 334, type: "image/png" }

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("OffscreenCanvas")}}.
