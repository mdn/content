---
title: "ResizeObserverEntry: devicePixelContentBoxSize property"
short-title: devicePixelContentBoxSize
slug: Web/API/ResizeObserverEntry/devicePixelContentBoxSize
page-type: web-api-instance-property
browser-compat: api.ResizeObserverEntry.devicePixelContentBoxSize
---

{{APIRef("Resize Observer API")}}

The **`devicePixelContentBoxSize`** read-only property of
the {{domxref("ResizeObserverEntry")}} interface returns an array containing the size in device pixels of the observed element when the callback is run.

## Value

An array containing objects with the new size of the observed element in device pixels. The
array is necessary to support elements that have multiple fragments, which occur in
multi-column scenarios. Each object in the array contains two properties:

- `blockSize`
  - : The size of the content-box, in device pixels, of the block dimension of the observed element. For boxes
    with a horizontal {{cssxref("writing-mode")}}, this is the vertical dimension, or
    height; if the writing-mode is vertical, this is the horizontal dimension, or width.
- `inlineSize`
  - : The size of the content box, in device pixels, of the inline direction of the observed element. For boxes
    with a horizontal {{cssxref("writing-mode")}}, this is the horizontal dimension, or
    width; if the writing-mode is vertical, this is the vertical dimension, or height.

> **Note:** For more information about writing modes and block and inline
> dimensions, read [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Examples

The following example is taken from the article [Pixel-perfect rendering with devicePixelContentBox](https://web.dev/device-pixel-content-box/). As the callback function of a {{domxref("ResizeObserver")}}
is called after layout but before paint.
This provides an opportunity to log the exact size in physical pixels to
ensure a one-to-one mapping of canvas pixels to physical pixels.

```js
const observer = new ResizeObserver((entries) => {
  const entry = entries.find((entry) => entry.target === canvas);
  canvas.width = entry.devicePixelContentBoxSize[0].inlineSize;
  canvas.height = entry.devicePixelContentBoxSize[0].blockSize;

  /* … render to canvas … */
});
observer.observe(canvas, { box: "device-pixel-content-box" });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
