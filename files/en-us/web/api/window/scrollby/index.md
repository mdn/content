---
title: "Window: scrollBy() method"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
page-type: web-api-instance-method
browser-compat: api.Window.scrollBy
---

{{APIRef}}

The **`Window.scrollBy()`** method scrolls the document in the
window by the given amount.

## Syntax

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Parameters

- `xCoord`
  - : The horizontal pixel value that you want to scroll by.
- `yCoord`
  - : The vertical pixel value that you want to scroll by.
- `options`
  - : An object containing the following properties:
    - `top`
      - : Specifies the number of pixels to scroll by along the Y axis.
    - `left`
      - : Specifies the number of pixels to scroll by along the X axis.
    - `behavior`
      - : Determines whether scrolling is instant or animates smoothly. This option is a string which must take one of the following values:
        - `smooth`: scrolling should animate smoothly
        - `instant`: scrolling should happen instantly in a single jump
        - `auto`: scroll behavior is determined by the computed value of {{cssxref("scroll-behavior")}}

### Return value

None ({{jsxref("undefined")}}).

## Examples

To scroll down one page:

```js
window.scrollBy(0, window.innerHeight);
```

To scroll up:

```js
window.scrollBy(0, -window.innerHeight);
```

Using `options`:

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Notes

`window.scrollBy()` scrolls by a particular amount, whereas
{{domxref("window.scroll()")}} scrolls to an absolute position in the document. See also
{{domxref("window.scrollByLines()")}} and {{domxref("window.scrollByPages()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
