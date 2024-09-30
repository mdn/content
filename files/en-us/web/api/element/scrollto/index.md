---
title: "Element: scrollTo() method"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
page-type: web-api-instance-method
browser-compat: api.Element.scrollTo
---

{{APIRef}}

The **`scrollTo()`** method of the {{domxref("Element")}}
interface scrolls to a particular set of coordinates inside a given element.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameters

- `xCoord`
  - : The pixel along the horizontal axis of the
    element that you want displayed in the upper left.
- `yCoord`
  - : The pixel along the vertical axis of the element
    that you want displayed in the upper left.
- `options`
  - : An object containing the following properties:
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
