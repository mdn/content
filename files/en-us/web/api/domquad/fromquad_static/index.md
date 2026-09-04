---
title: "DOMQuad: fromQuad() static method"
short-title: fromQuad()
slug: Web/API/DOMQuad/fromQuad_static
page-type: web-api-static-method
browser-compat: api.DOMQuad.fromQuad_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromQuad()`** static method of the {{domxref("DOMQuad")}} interface returns a new `DOMQuad` object based on the provided set of coordinates in the shape of another `DOMQuad` object.

## Syntax

```js-nolint
DOMQuad.fromQuad()
DOMQuad.fromQuad(quad)
```

### Parameters

- `quad` {{optional_inline}}
  - : A {{domxref("DOMQuad")}} or an object with the same properties. All properties default to `(0, 0, 0, 1)`. The properties are:
    - {{domxref("DOMQuad/p1", "p1")}} {{optional_inline}}, {{domxref("DOMQuad/p2", "p2")}} {{optional_inline}}, {{domxref("DOMQuad/p3", "p3")}} {{optional_inline}}, {{domxref("DOMQuad/p4", "p4")}} {{optional_inline}}
      - : Each a {{domxref("DOMPoint")}} or an object with the same properties representing one corner of the quad.

    This object should usually be another {{domxref("DOMQuad")}} instance, or an existing object retrieved from some data storage. If you are creating this object from scratch, you should use the {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}} constructor, which accepts the four points separately, avoiding creating the intermediate object.

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
- {{domxref("DOMRect")}}
