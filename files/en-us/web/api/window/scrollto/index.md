---
title: Window.scrollTo()
slug: Web/API/Window/scrollTo
tags:
  - API
  - CSSOM View
  - Method
  - NeedsMarkupWork
  - Reference
browser-compat: api.Window.scrollTo
---
{{APIRef}}

**`Window.scrollTo()`** scrolls to a particular set of
coordinates in the document.

## Syntax

```js
window.scrollTo(x-coord, y-coord)
window.scrollTo(options)
```

### Parameters

- `x-coord` is the pixel along the horizontal axis of the
  document that you want displayed in the upper left.
- `y-coord` is the pixel along the vertical axis of the document
  that you want displayed in the upper left.

\- or -

- `options`
  - : A dictionary containing the following parameters:
    - `top`
      - : Specifies the number of pixels along the Y axis to scroll the window or element.
    - `left`
      - : Specifies the number of pixels along the X axis to scroll the window or element.
    - `behavior`
      - : Specifies whether the scrolling should animate smoothly (`smooth`), happen instantly in a single jump (`instant`), or let the browser choose (`auto`, default).

## Examples

```js
window.scrollTo(0, 1000);
```

Using `options`:

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## Notes

{{domxref("Window.scroll()")}} is effectively the same as this method. For relative
scrolling, see {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}},
and {{domxref("Window.scrollByPages()")}}.

For scrolling elements, see {{domxref("Element.scrollTop")}} and
{{domxref("Element.scrollLeft")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
