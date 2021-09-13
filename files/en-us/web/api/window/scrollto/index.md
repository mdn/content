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

- `options` is a {{domxref("ScrollToOptions")}} dictionary.

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
