---
title: "DOMPoint: fromPoint() static method"
short-title: fromPoint()
slug: Web/API/DOMPoint/fromPoint_static
page-type: web-api-static-method
browser-compat: api.DOMPoint.fromPoint_static
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`fromPoint()`** static method of the {{domxref("DOMPoint")}} interface creates and returns a new mutable `DOMPoint` object given a source point.

You can also create a new `DOMPoint` object using the
{{domxref("DOMPoint.DOMPoint", "DOMPoint()")}} constructor.

Although this interface is based on `DOMPointReadOnly`, it is not read-only;
the properties within may be changed at will.

## Syntax

```js-nolint
DOMPoint.fromPoint(sourcePoint)
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

A new {{domxref("DOMPoint")}} object whose coordinate and perspective values are
identical to those in the source point. The point's properties are mutable and may be
changed at any time.

## Examples

### Creating a mutable point from a read-only point

If you have a {{domxref("DOMPointReadOnly")}} object, you can easily create a mutable
copy of that point:

```js
const mutablePoint = DOMPoint.fromPoint(readOnlyPoint);
```

### Creating a 2D point

This sample creates a 2D point, specifying an inline object that includes the values to
use for {{domxref("DOMPointReadOnly.x", "x")}} and {{domxref("DOMPointReadOnly.y", "y")}}.
The _z_ and _w_ properties are allowed to keep their default values (0 and 1 respectively).

```js
const center = DOMPoint.fromPoint({ x: 75, y: -50, z: -55, w: 0.25 });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
