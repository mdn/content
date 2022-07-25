---
title: Window.scrollMaxY
slug: Web/API/Window/scrollMaxY
page-type: web-api-instance-property
tags:
  - API
  - DOM_0
  - HTML DOM
  - NeedsExample
  - NeedsMarkupWork
  - NeedsSpecTable
  - Non-standard
  - Property
  - Reference
  - Window
browser-compat: api.Window.scrollMaxY
---
{{APIRef}} {{Non-standard_header}}

The **`Window.scrollMaxY`** read-only property returns the
maximum number of pixels that the document can be scrolled vertically.

## Value

A number.

## Examples

```js
// Scroll to the bottom of the page
let maxY = window.scrollMaxY;

window.scrollTo(0, maxY);
```

## Notes

Do not use this property to get the total document height, which is not equivalent to
{{domxref("window.innerHeight")}} + window\.scrollMaxY, because
{{domxref("window.innerHeight")}} includes the width of any visible horizontal
scrollbar, thus the result would exceed the total document height by the width of any
visible horizontal scrollbar. Instead use
{{domxref("element.scrollHeight","document.body.scrollHeight")}}. See also
{{domxref("window.scrollMaxX")}} and {{domxref("window.scrollTo")}}.

## Specifications

This is not part of any specification.

## Browser compatibility

{{Compat}}
