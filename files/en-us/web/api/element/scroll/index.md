---
title: Element.scroll()
slug: Web/API/Element/scroll
page-type: web-api-instance-method
tags:
  - API
  - Element
  - Method
  - Reference
  - Scroll
browser-compat: api.Element.scroll
---
{{APIRef}}

The **`scroll()`** method of the {{domxref("Element")}}
interface scrolls the element to a particular set of coordinates inside a given
element.

## Syntax

```js
scroll(x-coord, y-coord)
scroll(options)
```

### Parameters

- `x-coord`
  - : The pixel along the horizontal axis of the element that you want displayed in the
    upper left.
- `y-coord`
  - : The pixel along the vertical axis of the element that you want displayed in the
    upper left.

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
// Put the 1000th vertical pixel at the top of the element
element.scroll(0, 1000);
```

Using `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
