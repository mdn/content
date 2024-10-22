---
title: "Window: scroll() method"
short-title: scroll()
slug: Web/API/Window/scroll
page-type: web-api-instance-method
browser-compat: api.Window.scroll
---

{{APIRef}}

The **`Window.scroll()`** method scrolls the window to a
particular place in the document.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameters

- `xCoord`
  - : The pixel along the horizontal axis of the document that you
    want displayed in the upper left.
- `yCoord`
  - : The pixel along the vertical axis of the document that you
    want displayed in the upper left.
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

```html
<!-- put the 100th vertical pixel at the top of the window -->

<button onclick="scroll(0, 100);">click to scroll to the 100th pixel</button>
```

Using `options`:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Notes

{{domxref("Window.scrollTo()")}} is effectively the same as this method. For relative
scrolling, see {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}},
and {{domxref("Window.scrollByPages()")}}.

For scrolling elements, see {{domxref("Element.scrollTop")}} and
{{domxref("Element.scrollLeft")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Window.scrollByLines()")}}
- {{domxref("Window.scrollByPages()")}}
- {{domxref("Element.scrollIntoView()")}}
