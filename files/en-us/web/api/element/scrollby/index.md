---
title: Element.scrollBy()
slug: Web/API/Element/scrollBy
tags:
  - API
  - CSSOM View
  - Element
  - Method
  - Reference
  - scrollBy
browser-compat: api.Element.scrollBy
---
{{APIRef}}

The **`scrollBy()`** method of the {{domxref("Element")}}
interface scrolls an element by the given amount.

## Syntax

```js
element.scrollBy(x-coord, y-coord);
element.scrollBy(options)
```

### Parameters

- `x-coord` is the horizontal pixel value that you want to
  scroll by.
- `y-coord` is the vertical pixel value that you want to scroll
  by.

\- or -

- `options` is a {{domxref("ScrollToOptions")}} dictionary.

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
  behavior: 'smooth'
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
