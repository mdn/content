---
title: DOMPointReadOnly.fromPoint()
slug: Web/API/DOMPointReadOnly/fromPoint
page-type: web-api-static-method
tags:
  - API
  - Coordinates
  - DOM
  - DOMPointReadOnly
  - Geometry
  - Geometry Interfaces
  - Method
  - Point
  - Reference
  - Static Method
  - fromPoint
browser-compat: api.DOMPointReadOnly.fromPoint
---
{{APIRef("DOM")}}

The static **{{domxref("DOMPointReadOnly")}}**
method `fromPoint()` creates and returns a new
`DOMPointReadOnly` object given a source point.

You can also create a new `DOMPointReadOnly` object using the
{{domxref("DOMPointReadOnly.DOMPointReadOnly", "new DOMPointReadOnly()")}} constructor.

## Syntax

```js
fromPoint(sourcePoint)
```

### Parameters

- `sourcePoint`

  - : A {{domxref("DOMPoint")}} or {{domxref("DOMPointReadOnly")}} instance, or an object containing the following properties, from which to take the
    values of the new point's properties:

    - `x`
      - : An unrestricted floating-point value indicating the `x`-coordinate of the point in space. This is generally the horizontal coordinate, with positive values being to the right and negative values to the left. The default value is `0`.
    - `y`
      - : An unrestricted floating-point number providing the point's `y`-coordinate. This is the vertical coordinate, and barring any transforms applied to the coordinate system, positive values are downward and negative values upward toward the top of the screen. The default is `0`.
    - `z`
      - : An unrestricted floating-point value which gives the point's `z`-coordinate, which is (assuming no transformations that alter the situation) the depth coordinate; positive values are closer to the user and negative values retreat back into the screen. The default value is `0`.
    - `w`
      - : The point's `w` perspective value, given as an unrestricted floating-point number. The default is `1`.

### Return value

A new {{domxref("DOMPointReadOnly")}} object (which is identical to the source point).

## Examples

### Creating a 2D point

This sample creates a 2D point, specifying an inline object that includes the values to
use for {{domxref("DOMPointReadOnly.x", "x")}} and {{domxref("DOMPointReadOnly.y",
  "y")}}. The `z` and `w` properties are allowed to keep their
default values (`0` and `1` respectively).

```js
const point2D = DOMPointReadOnly.fromPoint({x: 25, y: 25})
```

### Creating a 3D point using an existing point

This example creates a point, `origPoint`, of type
{{domxref("DOMPoint")}}, using {{domxref("DOMPoint.DOMPoint", "new DOMPoint()")}}. That
point is then used as the input for `fromPoint()` to create a new point,
`newPoint`.

```js
const origPoint = new DOMPoint(25, 25, 100, 0.5)

const newPoint = DOMPointReadOnly.fromPoint(origPoint)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
