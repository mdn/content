---
title: DOMMatrixReadOnly.scale()
slug: Web/API/DOMMatrixReadOnly/scale
page-type: web-api-instance-method
tags:
  - Method
  - Reference
browser-compat: api.DOMMatrixReadOnly.scale
---
{{APIRef("Geometry Interfaces")}}

The **`scale()`** method of the
{{domxref("DOMMatrixReadOnly")}} interface creates a new matrix being the result of the
original matrix with a scale transform applied.

## Syntax

The `scale()` method is specified with either one or six values.

```js
DOMMatrixReadOnly.scale(scaleX);
DOMMatrixReadOnly.scale(scaleX, scaleY);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX, originY);
DOMMatrixReadOnly.scale(scaleX, scaleY, scaleZ, originX, originY, originZ);
```

### Parameters

- `scaleX`
  - : A multiplier for the scale value on the x-axis.
- `scaleY` {{optional_inline}}
  - : A multiplier for the scale value on the y-axis. If not supplied, this defaults to
    the value of `scaleX`.
- `scaleZ` {{optional_inline}}
  - : A multiplier for the scale value on the z-axis. If this value is anything other
    than 1, the resulting matrix will be 3D.
- `originX` {{optional_inline}}
  - : An x-coordinate for the origin of the transformation. If no origin is supplied,
    this defaults to 0.
- `originY` {{optional_inline}}
  - : A y-coordinate for the origin of the transformation. If no origin is supplied, this
    defaults to 0.
- `originZ` {{optional_inline}}
  - : A z-coordinate for the origin of the transformation. If no origin is supplied, this
    defaults to 0. If this value is anything other than 0, the resulting matrix will be
    3D.

### Return value

Returns a [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix)
containing a new matrix being the result of the matrix x and y dimensions being scaled
by the given factor, centered on the origin given. The original matrix is not modified.

If a scale is applied about the z-axis, the resulting matrix will be a 4x4 3D matrix.

## Examples

This SVG contains three squares, one red, one blue, and one green, each positioned at
the document origin:

```html
<svg width="250" height="250" viewBox="0 0 25 25">
  <rect width="25" height="25" fill="red" />
  <rect id="transformed" width="25" height="25" fill="blue" />
  <rect id="transformedOrigin" width="25" height="25" fill="green" />
</svg>
```

This JavaScript first creates an identity matrix, then uses the `scale()`
method to create a new matrix with a single parameter.

We test if the browser supports a six parameter `scale()` method by creating
a new matrix using three parameters and observing it's `is2D` property — if
this is `false` then the third parameter has been accepted by the browser as
a `scaleZ` parameter, making this a 3D matrix.

We then create a new matrix scaled about a given origin, using either three or six
parameters depending on the browser support.

These new matrices are then applied to the blue and green squares as a
`transform`, changing their dimensions and position. The red square is left
in place.

```js
const matrix = new DOMMatrixReadOnly();
const scaledMatrix = matrix.scale(0.5);

let scaledMatrixWithOrigin = matrix.scale(0.5, 25, 25);

// if the browser has interpreted these parameters as scaleX, scaleY, scaleZ, the resulting matrix is 3D
const browserExpectsSixParamScale = !scaledMatrixWithOrigin.is2D;
if (browserExpectsSixParamScale) {
  scaledMatrixWithOrigin = matrix.scale(0.5, 0.5, 1, 25, 25, 0);
}

document.querySelector('#transformed').setAttribute('transform', scaledMatrix.toString());
document.querySelector('#transformedOrigin').setAttribute('transform', scaledMatrixWithOrigin.toString());
```

{{ EmbedLiveSample('Examples', '250', '250',
  'screen_shot_2019-02-18_at_13.23.31.png',
  'Web/API/DOMMatrixReadOnly/scale') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
