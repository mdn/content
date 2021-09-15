---
title: Element.scrollTo()
slug: Web/API/Element/scrollTo
tags:
  - API
  - Element
  - Method
  - Reference
  - scrollTo
browser-compat: api.Element.scrollTo
---
{{APIRef}}

The **`scrollTo()`** method of the {{domxref("Element")}}
interface scrolls to a particular set of coordinates inside a given element.

## Syntax

```js
element.scrollTo(x-coord, y-coord)
element.scrollTo(options)
```

### Parameters

- `x-coord` is the pixel along the horizontal axis of the
  element that you want displayed in the upper left.
- `y-coord` is the pixel along the vertical axis of the element
  that you want displayed in the upper left.

\- or -

- `options` is a {{domxref("ScrollToOptions")}} dictionary.

## Examples

```js
element.scrollTo(0, 1000);
```

Using `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: 'smooth'
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Element.scrollTop")}}, {{domxref("Element.scrollLeft")}}
- {{domxref("Window.scrollTo()")}}
