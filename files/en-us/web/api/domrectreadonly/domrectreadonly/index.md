---
title: DOMRectReadOnly()
slug: Web/API/DOMRectReadOnly/DOMRectReadOnly
tags:
  - API
  - Constructor
  - DOM
  - DOM Reference
  - DOMRectReadOnly
  - Experimental
  - Geometry
  - Reference
browser-compat: api.DOMRectReadOnly.DOMRectReadOnly
---
{{APIRef("DOM")}}{{ SeeCompatTable }}

The **`DOMRectReadOnly()`** constructor creates a new
{{domxref("DOMRectReadOnly")}} object.

## Syntax

```js
const myDOMRectReadOnly = new DOMRectReadOnly(x, y, width, height)
```

### Parameters

- _x_
  - : The `x` coordinate of the `DOMRectReadOnly`'s
    origin.
- _y_
  - : The `y` coordinate of the `DOMRectReadOnly`'s
    origin.
- _width_
  - : The width of the `DOMRectReadOnly`.
- _height_
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
