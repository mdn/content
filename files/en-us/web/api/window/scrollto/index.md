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
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameters

- `xCoord`
  - : The x-coordinate of the document that you want the viewport's left edge to scroll to.
- `yCoord`
  - : The y-coordinate of the document that you want the viewport's top edge to scroll to.
- `options`
  - : An object containing the following properties:
    - `top`
      - : The y-coordinate of the document that you want the viewport's top edge to scroll to. This is the same as the `yCoord` parameter.
    - `left`
      - : The x-coordinate of the document that you want the viewport's left edge to scroll to. This is the same as the `xCoord` parameter.
    - `behavior`
      - : Determines whether the scrolling is instant or animates smoothly. This option is a string that must take one of the following values:
        - `smooth`: The scrolling animates smoothly.
        - `instant`: The scrolling happens instantly in a single jump.
        - `auto`: The scroll behavior is determined by the computed value of the {{cssxref("scroll-behavior")}} CSS property on the document.

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
