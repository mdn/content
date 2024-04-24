---
title: "OffscreenCanvas: height property"
short-title: height
slug: Web/API/OffscreenCanvas/height
page-type: web-api-instance-property
browser-compat: api.OffscreenCanvas.height
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`height`** property returns and sets the height of an {{domxref("OffscreenCanvas")}} object.

## Value

## Examples

Creating a new offscreen canvas and returning or setting the height of the offscreen canvas:

```js
const offscreen = new OffscreenCanvas(256, 256);
offscreen.height; // 256
offscreen.height = 512;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas")}}, the interface this property belongs to.
