---
title: OffscreenCanvas.width
slug: Web/API/OffscreenCanvas/width
tags:
  - API
  - Canvas
  - Experimental
  - OffscreenCanvas
  - Property
  - Reference
browser-compat: api.OffscreenCanvas.width
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`width`** property returns and sets the width of an
{{domxref("OffscreenCanvas")}} object.

## Syntax

```js
var pxl = offscreen.width;
offscreen.width = pxl;
```

## Examples

Creating a new offscreen canvas and returning or setting the width of the offscreen
canvas:

```js
var offscreen = new OffscreenCanvas(256, 256);
offscreen.width; // 256
offscreen.width = 512;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas")}}, the interface this property belongs to.
