---
title: DOMPointReadOnly
slug: Web/API/DOMPointReadOnly
page-type: web-api-interface
tags:
  - API
  - Coordinate
  - DOM
  - DOM Reference
  - DOMPointReadOnly
  - Geometry
  - Geometry Interfaces
  - Interface
  - Point
  - Reference
browser-compat: api.DOMPointReadOnly
---
{{APIRef("Geometry Interfaces")}}

The **`DOMPointReadOnly`** interface specifies the coordinate and perspective fields used by {{domxref("DOMPoint")}} to define a 2D or 3D point in a coordinate system.

{{AvailableInWorkers}}

There are two ways to create a new `DOMPointReadOnly` instance. First, you can use its constructor, passing in the values of the parameters for each dimension and, optionally, the perspective:

```js
/* 2D */
const point2D = new DOMPointReadOnly(50, 50);

/* 3D */
const point3D = new DOMPointReadOnly(50, 50, 25);

/* 3D with perspective */
const point3DPerspective = new DOMPointReadOnly(100, 100, 100, 1.0);
```

The other option is to use the static {{domxref("DOMPointReadOnly.fromPoint()")}} method:

```js
const point = DOMPointReadOnly.fromPoint({x: 100, y: 100, z: 50, w: 1.0});
```

## Constructor

- {{domxref("DOMPointReadOnly.DOMPointReadOnly","DOMPointReadOnly()")}}
  - : Creates a new `DOMPointReadOnly` object given the values of its coordinates and perspective. To create a point using an object, you can instead use {{domxref("DOMPointReadOnly.fromPoint()")}}.

## Properties

- {{domxref("DOMPointReadOnly.x")}} {{ReadOnlyInline}}
  - : The point's horizontal coordinate, `x`.
- {{domxref("DOMPointReadOnly.y")}} {{ReadOnlyInline}}
  - : The point's vertical coordinate, `y`.
- {{domxref("DOMPointReadOnly.z")}} {{ReadOnlyInline}}
  - : The point's depth coordinate, `z`.
- {{domxref("DOMPointReadOnly.w")}} {{ReadOnlyInline}}
  - : The point's perspective value, `w`.

## Static methods

- {{domxref("DOMPointReadOnly.fromPoint()")}}
  - : A static method that creates a new `DOMPointReadOnly` object given the coordinates provided in the specified object.

## Methods

- {{domxref("DOMPointReadOnly.matrixTransform", "matrixTransform()")}}
  - : Applies a matrix transform specified as an object to the `DOMPointReadOnly` object.
- {{domxref("DOMPointReadOnly.toJSON()", "toJSON()")}}
  - : Returns a JSON representation of the `DOMPointReadOnly` object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMPoint")}}
- {{domxref("DOMRect")}}
- {{domxref("DOMMatrix")}}
