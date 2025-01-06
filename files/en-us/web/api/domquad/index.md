---
title: DOMQuad
slug: Web/API/DOMQuad
page-type: web-api-interface
browser-compat: api.DOMQuad
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

A `DOMQuad` is a collection of four `DOMPoint`s defining the corners of an arbitrary quadrilateral. Returning `DOMQuad`s lets `getBoxQuads()` return accurate information even when arbitrary 2D or 3D transforms are present. It has a handy `bounds` attribute returning a `DOMRectReadOnly` for those cases where you just want an axis-aligned bounding rectangle.

## Constructor

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}}
  - : Creates a new `DOMQuad` object.

## Instance properties

- {{domxref("DOMQuad.p1")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMPoint")}} representing one corner of the `DOMQuad`.
- {{domxref("DOMQuad.p2")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMPoint")}} representing one corner of the `DOMQuad`.
- {{domxref("DOMQuad.p3")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMPoint")}} representing one corner of the `DOMQuad`.
- {{domxref("DOMQuad.p4")}} {{ReadOnlyInline}}
  - : A {{domxref("DOMPoint")}} representing one corner of the `DOMQuad`.

## Instance methods

- {{domxref("DOMQuad.fromRect()")}}
  - : Returns a new `DOMQuad` object based on the passed set of coordinates.
- {{domxref("DOMQuad.fromQuad()")}}
  - : Returns a new `DOMQuad` object or a set of quadrilateral coordinates based on the provided input.
- {{domxref("DOMQuad.getBounds()")}}
  - : Returns a {{domxref("DOMRect")}} object with the coordinates and dimensions of the `DOMQuad` object.
- {{domxref("DOMQuad.toJSON()")}}
  - : Returns a JSON representation of the `DOMQuad` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
