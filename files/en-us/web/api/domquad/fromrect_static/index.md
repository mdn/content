---
title: "DOMQuad: fromRect() static method"
short-title: fromRect()
slug: Web/API/DOMQuad/fromRect_static
page-type: web-api-static-method
browser-compat: api.DOMQuad.fromRect_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromRect()`** static method of the {{domxref("DOMQuad")}} interface returns a new `DOMQuad` object based on the provided set of coordinates in the shape of a `DOMRect` object.

## Syntax

```js-nolint
DOMQuad.fromRect()
DOMQuad.fromRect(rect)
```

### Parameters

- `rect` {{optional_inline}}
  - : An object specifying the coordinates of a rectangle. All properties default to `0`. This object should usually be a {{domxref("DOMRect")}} or {{domxref("DOMRectReadOnly")}} instance. To manually construct the rectangle properties, you should use the {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} constructor. The properties are:
    - `x`: The x coordinate of the rectangle's origin (top-left corner).
    - `y`: The y coordinate of the rectangle's origin (top-left corner).
    - `width`: The width of the rectangle.
    - `height`: The height of the rectangle.

### Return value

A {{domxref("DOMQuad")}} object.

## Examples

### Creating a quad from DOMRect

This example shows how to create a `DOMQuad` from a {{domxref("DOMRect")}} object.

```js
const domRect = new DOMRect(50, 60, 200, 100);
const quad = DOMQuad.fromRect(domRect);

console.log(quad.p1); // DOMPoint {x: 50, y: 60, z: 0, w: 1}
console.log(quad.p2); // DOMPoint {x: 250, y: 60, z: 0, w: 1}
console.log(quad.p3); // DOMPoint {x: 250, y: 160, z: 0, w: 1}
console.log(quad.p4); // DOMPoint {x: 50, y: 160, z: 0, w: 1}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} constructor
- {{domxref("DOMRect")}}
- {{domxref("DOMPoint")}}
