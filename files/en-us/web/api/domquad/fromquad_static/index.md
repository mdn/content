---
title: "DOMQuad: fromQuad() static method"
short-title: fromQuad()
slug: Web/API/DOMQuad/fromQuad_static
page-type: web-api-static-method
browser-compat: api.DOMQuad.fromQuad_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromQuad()`** static method of the {{domxref("DOMQuad")}} interface returns a new `DOMQuad` object or a set of quadrilateral coordinates based on the provided input.

## Syntax

```js-nolint
DOMQuad.fromQuad()
DOMQuad.fromQuad(quad)
```

### Parameters

- `quad` {{optional_inline}}
  - : An object specifying the coordinates for the four corners of the quadrilateral. If not specified, all corners default to `(0, 0, 0, 1)`. The object can contain the following properties:
    - `p1` {{optional_inline}}
      - : An object representing one corner of the quad.
    - `p2` {{optional_inline}}
      - : An object representing one corner of the quad.
    - `p3` {{optional_inline}}
      - : An object representing one corner of the quad.
    - `p4` {{optional_inline}}
      - : An object representing one corner of the quad.

### Return value

A {{domxref("DOMQuad")}} object.

## Examples

### Creating a quad from point objects

This example creates a `DOMQuad` from four point objects.

```js
const quad = DOMQuad.fromQuad({
  p1: { x: 10, y: 10 },
  p2: { x: 100, y: 10 },
  p3: { x: 100, y: 100 },
  p4: { x: 10, y: 100 },
});

console.log(quad.p1); // DOMPoint {x: 10, y: 10, z: 0, w: 1}
console.log(quad.p2); // DOMPoint {x: 100, y: 10, z: 0, w: 1}
console.log(quad.p3); // DOMPoint {x: 100, y: 100, z: 0, w: 1}
console.log(quad.p4); // DOMPoint {x: 10, y: 100, z: 0, w: 1}
```

### Creating a quad from an existing DOMQuad

This example shows how to create a new `DOMQuad` from an existing one.

```js
const originalQuad = new DOMQuad(
  { x: 0, y: 0 },
  { x: 50, y: 0 },
  { x: 50, y: 50 },
  { x: 0, y: 50 },
);

const newQuad = DOMQuad.fromQuad(originalQuad);

console.log(newQuad.p1.x, newQuad.p1.y); // 0 0
console.log(newQuad.p2.x, newQuad.p2.y); // 50 0
```

### Creating a 3D quad

This example creates a quad with 3D coordinates by specifying the z values.

```js
const quad3D = DOMQuad.fromQuad({
  p1: { x: 0, y: 0, z: 10 },
  p2: { x: 100, y: 0, z: 10 },
  p3: { x: 100, y: 100, z: 20 },
  p4: { x: 0, y: 100, z: 20 },
});

console.log(quad3D.p1.z); // 10
console.log(quad3D.p3.z); // 20
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} constructor
- {{domxref("DOMPoint")}}
- {{domxref("DOMQuad.p1", "p1")}}, {{domxref("DOMQuad.p2", "p2")}}, {{domxref("DOMQuad.p3", "p3")}}, {{domxref("DOMQuad.p4", "p4")}}
- {{domxref("DOMRect")}}
