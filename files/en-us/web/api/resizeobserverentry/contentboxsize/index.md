---
title: ResizeObserverEntry.contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Resize Observer API
  - ResizeObserverEntry
  - contentBoxSize
browser-compat: api.ResizeObserverEntry.contentBoxSize
---
{{APIRef("Resize Observer API")}}

The **`contentBoxSize`** read-only property of
the {{domxref("ResizeObserverEntry")}} interface returns an array containing the new
content box size of the observed element when the callback is run.

## Value

An array containing objects with the new content box size of the observed element.
The array is necessary to support elements that have multiple fragments, which occur in multi-column scenarios. Each object in the array contains two properties:

- `blockSize`
  - : The length of the observed element's content box in the block dimension. For boxes
    with a horizontal {{cssxref("writing-mode")}}, this is the vertical dimension, or
    height; if the writing-mode is vertical, this is the horizontal dimension, or width.
- `inlineSize`
  - : The length of the observed element's content box in the inline dimension. For boxes
    with a horizontal {{cssxref("writing-mode")}}, this is the horizontal dimension, or
    width; if the writing-mode is vertical, this is the vertical dimension, or height.

> **Note:** For more explanation of writing modes and block and inline
> dimensions, read [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Examples

The following snippet is taken from the [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html)
([see source](https://github.com/mdn/dom-examples/blob/main/resize-observer/resize-observer-border-radius.html)) example. This example includes a green box, sized as a percentage of the
viewport size. When the viewport size is changed, the box's rounded corners change in
proportion to the size of the box. We could just implement this using
{{cssxref("border-radius")}} with a percentage, but that quickly leads to ugly-looking
elliptical corners; this solution gives you nice square corners that scale with the box
size.

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
