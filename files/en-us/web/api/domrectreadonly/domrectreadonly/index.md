---
title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - DOM
  - DOMRectReadOnly
  - Geometry
  - Reference
browser-compat: api.DOMRectReadOnly.DOMRectReadOnly
---
{{APIRef("Geometry Interfaces")}}

The **`DOMRectReadOnly()`** constructor creates a new
{{domxref("DOMRectReadOnly")}} object.

## Syntax

```js
new DOMRectReadOnly(x, y, width, height)
```

### Parameters

- `x`
  - : The `x` coordinate of the `DOMRectReadOnly`'s
    origin.
- `y`
  - : The `y` coordinate of the `DOMRectReadOnly`'s
    origin.
- `width`
  - : The width of the `DOMRectReadOnly`.
- `height`
  - : The height of the `DOMRectReadOnly`.

## Examples

To create a new `DOMPoint`, you could run a line of code like so:

```js
const myDOMRect = new DOMRectReadOnly(0, 0, 100, 100)
// running 'myDOMRect' in the console would then return
// DOMRect { x: 0, y: 0, width: 100, height: 100, top: 0, right: 100, bottom: 100, left: 0 }
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
