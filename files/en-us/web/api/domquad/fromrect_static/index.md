---
title: "DOMQuad: fromRect() static method"
short-title: fromRect()
slug: Web/API/DOMQuad/fromRect_static
page-type: web-api-static-method
browser-compat: api.DOMQuad.fromRect_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromRect()`** static method of the {{domxref("DOMQuad")}} interface returns a new `DOMQuad` object based on the provided set of coordinates in the shape of a {{domxref("DOMRect")}} object.

## Syntax

```js-nolint
DOMQuad.fromRect()
DOMQuad.fromRect(rect)
```

### Parameters

- `rect` {{optional_inline}}
  - : A {{domxref("DOMRect")}}, {{domxref("DOMRectReadOnly")}}, or an object with the same properties. All properties default to `0`. The properties are:
    - {{domxref("DOMRect/x", "x")}} {{optional_inline}}
      - : The x coordinate of the rectangle's origin (top-left corner).
    - {{domxref("DOMRect/y", "y")}} {{optional_inline}}
      - : The y coordinate of the rectangle's origin (top-left corner).
    - {{domxref("DOMRect/width", "width")}} {{optional_inline}}
      - : The width of the rectangle.
    - {{domxref("DOMRect/height", "height")}} {{optional_inline}}
      - : The height of the rectangle.

### Return value

A {{domxref("DOMQuad")}} object.

## Examples

### Creating a rectangular quad

This example creates a `DOMQuad` from scratch that happens to be rectangular. Using `fromRect()` is more convenient than using the {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} constructor.

```js
const quad = DOMQuad.fromRect({ x: 10, y: 20, width: 100, height: 50 });

console.log(quad.p1); // DOMPoint {x: 10, y: 20, z: 0, w: 1}
console.log(quad.p2); // DOMPoint {x: 110, y: 20, z: 0, w: 1}
console.log(quad.p3); // DOMPoint {x: 110, y: 70, z: 0, w: 1}
console.log(quad.p4); // DOMPoint {x: 10, y: 70, z: 0, w: 1}
```

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
