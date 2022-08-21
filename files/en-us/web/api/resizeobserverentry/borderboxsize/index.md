---
title: ResizeObserverEntry.borderBoxSize
slug: Web/API/ResizeObserverEntry/borderBoxSize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Resize Observer API
  - ResizeObserverEntry
  - borderBoxSize
browser-compat: api.ResizeObserverEntry.borderBoxSize
---
{{APIRef("Resize Observer API")}}

The **`borderBoxSize`** read-only property of
the {{domxref("ResizeObserverEntry")}} interface returns an array containing the new
border box size of the observed element when the callback is run.

## Value

An array containing objects with the new border box size of the observed element. The
array is necessary to support elements that have multiple fragments, which occur in
multi-column scenarios. Each object in the array contains two properties:

- `blockSize`
  - : The length of the observed element's border box in the block dimension. For boxes
    with a horizontal {{cssxref("writing-mode")}}, this is the vertical dimension, or
    height; if the writing-mode is vertical, this is the horizontal dimension, or width.
- `inlineSize`
  - : The length of the observed element's border box in the inline dimension. For boxes
    with a horizontal {{cssxref("writing-mode")}}, this is the horizontal dimension, or
    width; if the writing-mode is vertical, this is the vertical dimension, or height.

> **Note:** For more explanation of writing modes and block and inline
> dimensions, read [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Examples

```js
const resizeObserver = new ResizeObserver((entries) => {
  const calcBorderRadius = (size1, size2) =>
    `${Math.min(100, size1 / 10 + size2 / 10)}px`;

  for (const entry of entries) {
    if (entry.borderBoxSize?.length > 0) {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.borderBoxSize[0].inlineSize,
        entry.borderBoxSize[0].blockSize
      );
    } else {
      entry.target.style.borderRadius = calcBorderRadius(
        entry.contentRect.width,
        entry.contentRect.height
      );
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
