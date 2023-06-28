---
title: "Element: scrollBy() method"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
page-type: web-api-instance-method
browser-compat: api.Element.scrollBy
---

{{APIRef}}

The **`scrollBy()`** method of the {{domxref("Element")}}
interface scrolls an element by the given amount.

## Syntax

```js-nolint
scrollBy(x-coord, y-coord)
scrollBy(options)
```

### Parameters

- `x-coord` is the horizontal pixel value that you want to
  scroll by.
- `y-coord` is the vertical pixel value that you want to scroll
  by.

\- or -

- `options`
  - : A dictionary containing the following parameters:
    - `top`
      - : Specifies the number of pixels along the Y axis to scroll the window or element.
    - `left`
      - : Specifies the number of pixels along the X axis to scroll the window or element.
    - `behavior`
      - : Specifies whether the scrolling should animate smoothly (`smooth`), happen instantly in a single jump (`instant`), or let the browser choose (`auto`, default).

### Return value

None ({{jsxref("undefined")}}).

## Examples

```js
// scroll an element
element.scrollBy(300, 300);
```

Using `options`:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
