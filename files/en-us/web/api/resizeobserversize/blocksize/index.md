---
title: ResizeObserverSize.blockSize
slug: Web/API/ResizeObserverSize/blockSize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - blockSize
  - ResizeObserverSize
browser-compat: api.ResizeObserverSize.blockSize
---
{{DefaultAPISidebar("Resize Observer API")}}

The **`blockSize`** read-only property of the {{domxref("ResizeObserverSize")}} interface returns the length of the observed element's border box in the block dimension. For boxes with a horizontal {{cssxref("writing-mode")}}, this is the vertical dimension, or height; if the writing-mode is vertical, this is the horizontal dimension, or width.

> **Note:** For more explanation of writing modes and block and inline dimensions, read [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Value

A decimal representing the block size in pixels.

## Examples

In this example we return an array of sizing information with {{domxref("ResizeObserverEntry.contentBoxSize")}}. The `blockSize` property returns the block dimension size of the observed element.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const elemSize = entry.contentBoxSize[0];
    console.log(elemSize.blockSize); // a decimal
  }
});

resizeObserver.observe(divElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
