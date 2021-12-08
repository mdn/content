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

```js
OffscreenCanvas.convertToBlob()
OffscreenCanvas.convertToBlob(options)
```

### Parameters

- `options`{{optional_inline}}

  - : An object with the following properties:
    - `type`
      - : A string indicating the image format. The default type is `image/png`.
    - `quality`
      - : If the `type` option is `image/jpeg` or `image/webp`, this is a number between `0` and `1` indicating image quality.
        If the `type` option is anything else, the default value for image quality is used.

### Return value

A {{jsxref("Promise")}} returning a {{domxref("Blob")}} object representing the image contained in the canvas.

## Examples

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// ... some drawing using the gl context ...

offscreen.convertToBlob().then( blob => console.log(blob));
// Blob { size: 334, type: "image/png" }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("OffscreenCanvas")}}.
