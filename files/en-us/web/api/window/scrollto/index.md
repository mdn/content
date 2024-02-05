---
title: "Window: scrollTo() method"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
page-type: web-api-instance-method
browser-compat: api.Window.scrollTo
---

{{APIRef}}

**`Window.scrollTo()`** scrolls to a particular set of
coordinates in the document.

## Syntax

```js-nolint
scrollTo(x-coord, y-coord)
scrollTo(options)
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
      - : Determines whether scrolling is instant or animates smoothly. This option is a string which must take one of the following values:
        - `smooth`: scrolling should animate smoothly
        - `instant`: scrolling should happen instantly in a single jump
        - `auto`: scroll behavior is determined by the computed value of {{cssxref("scroll-behavior")}}

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
window.scrollTo(0, 1000);
```

Using `options`:

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
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
