---
title: "OffscreenCanvas: width property"
short-title: width
slug: Web/API/OffscreenCanvas/width
page-type: web-api-instance-property
browser-compat: api.OffscreenCanvas.width
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

The **`width`** property returns and sets the width of an {{domxref("OffscreenCanvas")}} object.

## Value

## Examples

Creating a new offscreen canvas and returning or setting the width of the offscreen canvas:

```js
const offscreen = new OffscreenCanvas(256, 256);
offscreen.width; // 256
offscreen.width = 512;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas")}}, the interface this property belongs to.
