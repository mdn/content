---
title: Window.scrollBy()
slug: Web/API/Window/scrollBy
tags:
  - API
  - CSSOM View
  - Method
  - Reference
browser-compat: api.Window.scrollBy
---
{{ APIRef() }}

The **`Window.scrollBy()`** method scrolls the document in the
window by the given amount.

## Syntax

```js
window.scrollBy(x-coord, y-coord);
window.scrollBy(options)
```

### Parameters

- `x-coord` is the horizontal pixel value that you want to scroll by.
- `y-coord` is the vertical pixel value that you want to scroll by.

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

To scroll down one page:

    window.scrollBy(0, window.innerHeight);

To scroll up:

    window.scrollBy(0, -window.innerHeight);

Using `options`:

    window.scrollBy({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });

## Notes

`window.scrollBy()` scrolls by a particular amount, whereas
{{domxref("window.scroll()")}} scrolls to an absolute position in the document. See also
{{domxref("window.scrollByLines()")}} and {{domxref("window.scrollByPages()")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
