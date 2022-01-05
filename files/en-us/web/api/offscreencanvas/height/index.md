---
title: OffscreenCanvas.height
slug: Web/API/OffscreenCanvas/height
tags:
  - API
  - Canvas
  - Experimental
  - OffscreenCanvas
  - Property
  - Reference
browser-compat: api.OffscreenCanvas.height
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`height`** property returns and sets the height of an
{{domxref("OffscreenCanvas")}} object.

## Syntax

```js
var pxl = offscreen.height;
offscreen.height = pxl;
```

## Examples

Creating a new offscreen canvas and returning or setting the height of the offscreen
canvas:

```js
var offscreen = new OffscreenCanvas(256, 256);
offscreen.height; // 256
offscreen.height = 512;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas")}}, the interface this property belongs to.
