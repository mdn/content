---
title: ImageBitmap.close()
slug: Web/API/ImageBitmap/close
page-type: web-api-instance-method
tags:
  - API
  - ImageBitmap
  - Method
  - OffscreenCanvas
  - Reference
browser-compat: api.ImageBitmap.close
---
{{APIRef("Canvas API")}}

The **`ImageBitmap.close()`**
method disposes of all graphical resources associated with an `ImageBitmap`.

## Syntax

```js
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext('webgl');

// Perform some drawing using the gl context

const bitmap = offscreen.transferToImageBitmap();
// ImageBitmap { width: 256, height: 256 }

bitmap.close();
// ImageBitmap { width: 0, height: 0 } — disposed
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The interface defining this method, {{domxref("ImageBitmap")}}.
