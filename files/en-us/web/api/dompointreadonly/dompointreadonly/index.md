---
title: "DOMPointReadOnly: DOMPointReadOnly() constructor"
short-title: DOMPointReadOnly()
slug: Web/API/DOMPointReadOnly/DOMPointReadOnly
page-type: web-api-constructor
browser-compat: api.DOMPointReadOnly.DOMPointReadOnly
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`DOMPointReadOnly()`**
constructor returns a new {{domxref("DOMPointReadOnly")}} object representing a point
in 2D or 3D space, optionally with perspective, whose values cannot be altered by
script code.

## Syntax

```js-nolint
new DOMPointReadOnly()
new DOMPointReadOnly(x)
new DOMPointReadOnly(x, y)
new DOMPointReadOnly(x, y, z)
new DOMPointReadOnly(x, y, z, w)
```

### Parameters

- `x` {{optional_inline}}
  - : The value of the horizontal coordinate, x, as a floating point number. The default
    value is 0.
- `y` {{optional_inline}}
  - : The value of the vertical coordinate, y, as a floating point number. The default
    value is 0.
- `z` {{optional_inline}}
  - : The value of the depth coordinate, z, as a floating point number. The default value
    is 0.
- `w` {{optional_inline}}
  - : The value of the perspective, w, as a floating point number. The default is 1.

> [!NOTE]
> Each of these values is what's called an _unrestricted_
> number. In addition to any finite floating-point value, you may use special values
> such as ±{{jsxref("Infinity")}} and {{jsxref("NaN")}}.

### Return value

A new {{domxref("DOMPointReadOnly")}} object representing the specified location in
space.

## Examples

The following code demonstrates creating both 2D and 3D points.

```js
const point2D = new DOMPointReadOnly(50, 25);
const point3D = new DOMPointReadOnly(50, 0, 10);
const perspectivePoint3D = new DOMPointReadOnly(50, 50, 25, 0.5);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
