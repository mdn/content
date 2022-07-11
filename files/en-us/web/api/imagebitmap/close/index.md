---
title: ImageBitmap.close()
slug: Web/API/ImageBitmap/close
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - ImageBitmap
  - Method
  - OffscreenCanvas
  - Reference
browser-compat: api.ImageBitmap.close
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

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
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext('webgl');

// ... some drawing using the gl context ...

var bitmap = offscreen.transferToImageBitmap();
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
