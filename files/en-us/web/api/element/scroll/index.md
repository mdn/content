---
title: Element.scroll()
slug: Web/API/Element/scroll
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
element.scroll(x-coord, y-coord)
element.scroll(options)
```

### Parameters

#### Calling with coordinates

- `x-coord`
  - : The pixel along the horizontal axis of the element that you want displayed in the
    upper left.
- `y-coord`
  - : The pixel along the vertical axis of the element that you want displayed in the
    upper left.

#### Calling with `options`

- `options`
  - : A {{domxref("ScrollToOptions")}} dictionary.

## Examples

```js
// Put the 1000th vertical pixel at the top of the element
element.scroll(0, 1000);
```

Using `options`:

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
