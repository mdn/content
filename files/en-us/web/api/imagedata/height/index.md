---
title: ImageData.height
slug: Web/API/ImageData/height
page-type: web-api-instance-property
tags:
  - API
  - Canvas
  - ImageData
  - Property
  - Reference
browser-compat: api.ImageData.height
---
{{APIRef("Canvas API")}}

The readonly **`ImageData.height`** property returns the number
of rows in the {{domxref("ImageData")}} object.

## Value

A number.

## Examples

This example creates an `ImageData` object that is 200 pixels wide and 100
pixels tall. Thus, the `height` property is `100`.

```js
let imageData = new ImageData(200, 100);
console.log(imageData.height);  // 100
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ImageData.width")}}
- {{domxref("ImageData")}}
