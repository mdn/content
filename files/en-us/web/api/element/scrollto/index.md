---
title: "Element: scrollTo() method"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
page-type: web-api-instance-method
browser-compat: api.Element.scrollTo
---

{{APIRef("CSSOM view API")}}

The **`scrollTo()`** method of the {{domxref("Element")}}
interface scrolls to a particular set of coordinates inside a given element.

This method is an alias for {{domxref("Element.scroll()")}}.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameters

- `xCoord`
  - : The x-coordinate of the element's scrollable content that you want the left edge of the element's scrollport to scroll to.
- `yCoord`
  - : The y-coordinate of the element's scrollable content that you want the top edge of the element's scrollport to scroll to.
- `options`
  - : An object containing the following properties:
    - `top`
      - : The y-coordinate of the element's scrollable content that you want the top edge of the element's scrollport to scroll to. This is the same as the `yCoord` parameter.
    - `left`
      - : The x-coordinate of the element's scrollable content that you want the left edge of the element's scrollport to scroll to. This is the same as the `xCoord` parameter.
    - `behavior`
      - : Determines whether the scrolling is instant or animates smoothly. This option is a string that must take one of the following values:
        - `smooth`: The scrolling animates smoothly.
        - `instant`: The scrolling happens instantly in a single jump.
        - `auto`: The scroll behavior is determined by the computed value of the {{cssxref("scroll-behavior")}} CSS property on the element.

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
element.scrollTo(0, 1000);
```

Using `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
