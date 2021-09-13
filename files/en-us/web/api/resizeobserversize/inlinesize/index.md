---
title: ResizeObserverSize.inlineSize
slug: Web/API/ResizeObserverSize/inlineSize
tags:
  - API
  - Property
  - Reference
  - inlineSize
  - ResizeObserverSize
browser-compat: api.ResizeObserverSize.inlineSize
---
{{DefaultAPISidebar("Resize Observer API")}}

The **`inlineSize`** read-only property of the {{domxref("ResizeObserverSize")}} interface returns the length of the observed element's border box in the inline dimension. For boxes with a horizontal {{cssxref("writing-mode")}}, this is the horizontal dimension, or width; if the writing-mode is vertical, this is the vertical dimension, or height.

> **Note:** For more explanation of writing modes and block and inline dimensions, read [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Syntax

    var inlineSize = ResizeObserverSize.inlineSize;

### Value

A decimal representing the inline size in pixels.

## Examples

In this example we return an array of sizing information with {{domxref("ResizeObserverEntry.contentBoxSize")}}. The `inlineSize` property returns the inline dimension size of the observed element.

```js
const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    let elemSize = entry.contentBoxSize[0];
    console.log(elemSize.inlineSize); // a decimal
  }
});

resizeObserver.observe(divElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
