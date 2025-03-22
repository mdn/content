---
title: "ResizeObserverEntry: contentBoxSize property"
short-title: contentBoxSize
slug: Web/API/ResizeObserverEntry/contentBoxSize
page-type: web-api-instance-property
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

> [!NOTE]
> For more explanation of writing modes and block and inline
> dimensions, read [Handling different text directions](/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

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
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      // The standard makes contentBoxSize an array...
      if (entry.contentBoxSize[0]) {
        entry.target.style.borderRadius =
          Math.min(
            100,
            entry.contentBoxSize[0].inlineSize / 10 +
              entry.contentBoxSize[0].blockSize / 10,
          ) + "px";
      } else {
        // ...but old versions of Firefox treat it as a single item
        entry.target.style.borderRadius =
          Math.min(
            100,
            entry.contentBoxSize.inlineSize / 10 +
              entry.contentBoxSize.blockSize / 10,
          ) + "px";
      }
    } else {
      entry.target.style.borderRadius =
        Math.min(
          100,
          entry.contentRect.width / 10 + entry.contentRect.height / 10,
        ) + "px";
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
