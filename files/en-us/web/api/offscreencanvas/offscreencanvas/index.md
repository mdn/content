---
title: "OffscreenCanvas: OffscreenCanvas() constructor"
short-title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
page-type: web-api-constructor
browser-compat: api.OffscreenCanvas.OffscreenCanvas
---

{{APIRef("Canvas API")}}

The **`OffscreenCanvas()`** constructor returns a newly instantiated {{domxref("OffscreenCanvas")}} object.

## Syntax

```js-nolint
new OffscreenCanvas(width, height)
```

### Parameters

- `width`
  - : The width of the offscreen canvas.
- `height`
  - : The height of the offscreen canvas.

## Examples

This example creates a new offscreen canvas using the `OffscreenCanvas()` constructor.
We then initialize a [WebGL](/en-US/docs/Web/API/WebGL_API) context on it using the {{domxref("OffscreenCanvas.getContext()", "getContext()")}} method.

```js
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas")}}, the interface this constructor belongs to
