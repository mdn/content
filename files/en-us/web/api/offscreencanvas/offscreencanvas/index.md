---
title: OffscreenCanvas()
slug: Web/API/OffscreenCanvas/OffscreenCanvas
tags:
  - API
  - Canvas
  - Constructor
  - Experimental
  - OffscreenCanvas
  - Reference
  - WebGL
browser-compat: api.OffscreenCanvas.OffscreenCanvas
---
{{APIRef("Canvas API")}} {{SeeCompatTable}}

The **`OffscreenCanvas()`** constructor returns a newly
instantiated {{domxref("OffscreenCanvas")}} object.

## Syntax

```js
new OffscreenCanvas(width, height);
```

### Parameters

- `width`
  - : The width of the offscreen canvas.
- `height`
  - : The height of the offscreen canvas.

## Examples

This example creates a new offscreen canvas using the `OffscreenCanvas()`
constructor. We then initialize a [WebGL](/en-US/docs/Web/API/WebGL_API)
context on it using the {{domxref("OffscreenCanvas.getContext()", "getContext()")}}
method.

```js
let offscreen = new OffscreenCanvas(256, 256);
let gl = offscreen.getContext('webgl');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvas")}}, the interface this constructor belongs to
