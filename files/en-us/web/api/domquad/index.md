---
title: DOMQuad
slug: Web/API/DOMQuad
page-type: web-api-interface
tags:
  - API
  - DOM
  - DOM Reference
  - DOMQuad
  - Geometry
browser-compat: api.DOMQuad
---
{{APIRef("Geometry Interfaces")}}

A `DOMQuad` is a collection of four `DOMPoint`s defining the corners of an arbitrary quadrilateral. Returning `DOMQuad`s lets `getBoxQuads()` return accurate information even when arbitrary 2D or 3D transforms are present. It has a handy `bounds` attribute returning a `DOMRectReadOnly` for those cases where you just want an axis-aligned bounding rectangle.

## Constructor

- {{domxref("DOMQuad.DOMQuad", "DOMQuad()")}}
  - : Creates a new `DOMQuad` object.

## Properties

- p1,p2,p3,p4 {{ReadOnlyInline}}
  - : are {{domxref("DOMPoint")}} objects for each of the `DOMQuad` object's four corners.

## Methods

- {{domxref("DOMQuad.fromRect()")}}
  - : Returns a new `DOMQuad` object based on the passed set of coordinates.
- {{domxref("DOMQuad.fromQuad()")}}
  - : Returns a new `DOMQuad` object based on the passed set of coordinates.
- {{domxref("DOMQuad.getBounds()")}}
  - : Returns a {{domxref("DOMRect")}} object with the coordinates and dimensions of the `DOMQuad` object.
- {{domxref("DOMQuad.toJSON()")}}
  - : Returns a JSON representation of the `DOMQuad` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
