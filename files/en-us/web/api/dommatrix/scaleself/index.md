---
title: "DOMMatrix: scaleSelf() method"
short-title: scaleSelf()
slug: Web/API/DOMMatrix/scaleSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.scaleSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The **`scaleSelf()`** method of the {{domxref("DOMMatrix")}} interface is a mutable transformation method that modifies a matrix by applying a specified scaling factor, centered on the given origin, with a default origin of `(0, 0)`, returning the scaled matrix.

To scale a matrix without mutating it, see {{domxref("DOMMatrixReadOnly.scale()")}}, which creates a new scaled matrix while leaving the original unchanged.

## Syntax

```js-nolint
scaleSelf()
scaleSelf(scaleX)
scaleSelf(scaleX, scaleY)
scaleSelf(scaleX, scaleY, scaleZ)
scaleSelf(scaleX, scaleY, scaleZ, originX)
scaleSelf(scaleX, scaleY, scaleZ, originX, originY)
scaleSelf(scaleX, scaleY, scaleZ, originX, originY, originZ)
```

### Parameters

- `scaleX` {{optional_inline}}
  - : A multiplier for the scale value on the x-axis. If not supplied, this defaults to `1`.
- `scaleY` {{optional_inline}}
  - : A multiplier for the scale value on the y-axis. If not supplied, this defaults to the value of `scaleX`.
- `scaleZ` {{optional_inline}}
  - : A multiplier for the scale value on the z-axis. If this value is anything other than 1, the resulting matrix will be 3D.
- `originX` {{optional_inline}}
  - : An x-coordinate for the origin of the transformation. If no origin is supplied, this defaults to 0.
- `originY` {{optional_inline}}
  - : A y-coordinate for the origin of the transformation. If no origin is supplied, this defaults to 0.
- `originZ` {{optional_inline}}
  - : A z-coordinate for the origin of the transformation. If no origin is supplied, this defaults to 0. If this value is anything other than 0, the resulting matrix will be 3D.

### Return value

Returns itself; a {{domxref("DOMMatrix")}}.

If a scale is applied about the z-axis, the matrix will be a 4✕4 3D matrix.

## Examples

This SVG contains two semi-opaque squares, one red and one blue, each positioned at the document origin:

```html
<svg viewBox="0 0 50 50" height="200">
  <rect width="25" height="25" fill="#ff000099" />
  <rect id="transformed" width="25" height="25" fill="#0000ff99" />
</svg>
```

This JavaScript first creates a matrix, then scales the matrix to one that halves the width and doubles the height, using the `scaleSelf()` method.

The matrix is then applied to the blue square as a
`transform`, changing its dimensions and position. The red square is left
unchanged.

```js
const matrix = new DOMMatrix();
matrix.scaleSelf(0.5, 2);

document
  .querySelector("#transformed")
  .setAttribute("transform", matrix.toString());
```

{{EmbedLiveSample('Examples', '', '220')}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.scale()")}}
- {{domxref("DOMMatrix.scale3dSelf()")}}
- CSS {{cssxref("transform")}} property and the {{cssxref("transform-function/scale", "scaleSelf()")}} and {{cssxref("transform-function/matrix", "matrix()")}} functions
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Reference/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface {{domxref("CanvasRenderingContext2D.transform()", "transform()")}} method
