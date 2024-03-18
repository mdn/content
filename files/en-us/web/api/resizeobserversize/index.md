---
title: ResizeObserverSize
slug: Web/API/ResizeObserverSize
page-type: web-api-interface
browser-compat: api.ResizeObserverSize
---

{{DefaultAPISidebar("Resize Observer API")}}

The **`ResizeObserverSize`** interface of the {{domxref('Resize Observer API')}} is used by the {{domxref("ResizeObserverEntry")}} interface to access the box sizing properties of the element being observed.

> **Note:** In [multi-column layout](/en-US/docs/Web/CSS/CSS_multicol_layout), which is a fragmented context, the sizing returned by `ResizeObserverSize` will be the size of the first column.

## Instance properties

- {{domxref("ResizeObserverSize.blockSize")}} {{ReadOnlyInline}}
  - : The length of the observed element's border box in the block dimension. For boxes with a horizontal {{cssxref("writing-mode")}}, this is the vertical dimension, or height; if the writing-mode is vertical, this is the horizontal dimension, or width.
- {{domxref("ResizeObserverSize.inlineSize")}} {{ReadOnlyInline}}
  - : The length of the observed element's border box in the inline dimension. For boxes with a horizontal {{cssxref("writing-mode")}}, this is the horizontal dimension, or width; if the writing-mode is vertical, this is the vertical dimension, or height.

> **Note:** For more explanation of writing modes and block and inline dimensions, read [Handling different text directions](/en-US/docs/Learn/CSS/Building_blocks/Handling_different_text_directions).

## Examples

In this example the {{domxref("ResizeObserverEntry.contentBoxSize")}} property returns a `ResizeObserverSize` object. This is an array containing the sizing information for the content box of the observed element.

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    console.log(entry.contentBoxSize[0]); // a ResizeObserverSize
  }
});

resizeObserver.observe(divElem);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
