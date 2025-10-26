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
  - : An object specifying the coordinates for the four corners of the quadrilateral. If not specified, all corners default to `(0, 0, 0, 1)`. This object should usually be another {{domxref("DOMQuad")}} instance. To manually construct the point properties, you should use the {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} constructor. The object can contain the following properties:
    - `p1` {{optional_inline}}
      - : A {{domxref("DOMPoint")}} representing one corner of the quad.
    - `p2` {{optional_inline}}
      - : A {{domxref("DOMPoint")}} representing one corner of the quad.
    - `p3` {{optional_inline}}
      - : A {{domxref("DOMPoint")}} representing one corner of the quad.
    - `p4` {{optional_inline}}
      - : A {{domxref("DOMPoint")}} representing one corner of the quad.

### Return value

A {{domxref("DOMQuad")}} object.

## Examples

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

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} constructor
- {{domxref("DOMPoint")}}
- {{domxref("DOMQuad.p1", "p1")}}, {{domxref("DOMQuad.p2", "p2")}}, {{domxref("DOMQuad.p3", "p3")}}, {{domxref("DOMQuad.p4", "p4")}}
- {{domxref("DOMRect")}}
