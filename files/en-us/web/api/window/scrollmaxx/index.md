---
title: "Window: scrollMaxX property"
short-title: scrollMaxX
slug: Web/API/Window/scrollMaxX
page-type: web-api-instance-property
status:
  - non-standard
browser-compat: api.Window.scrollMaxX
---

{{APIRef}} {{Non-standard_header}}

The **`Window.scrollMaxX`** read-only property returns the
maximum number of pixels that the document can be scrolled horizontally.

## Value

A number.

## Examples

```js
// Scroll to right edge of the page
let maxX = window.scrollMaxX;

window.scrollTo(maxX, 0);
```

## Notes

Do not use this property to get the total document width, which is not equivalent to [window.innerWidth](/en-US/docs/Web/API/Window/innerWidth) + window\.scrollMaxX,
because {{domxref("window.innerWidth")}} includes the width of any visible vertical
scrollbar, thus the result would exceed the total document width by the width of any
visible vertical scrollbar. Instead use
{{domxref("element.scrollWidth","document.body.scrollWidth")}}. See also
{{domxref("window.scrollMaxY")}}.

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}
