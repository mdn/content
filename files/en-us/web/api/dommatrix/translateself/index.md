---
title: "DOMMatrix: translateSelf() method"
short-title: translateSelf()
slug: Web/API/DOMMatrix/translateSelf
page-type: web-api-instance-method
browser-compat: api.DOMMatrix.translateSelf
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

The `translateSelf()` method of the {{domxref("DOMMatrix")}} interface is a mutable transformation method that modifies a matrix. It applies the specified vectors and returns the updated matrix. The default vector is `[0, 0, 0]`.

To translate a matrix without mutating it, see {{domxref("DOMMatrixReadOnly.translate()")}}

## Syntax

```js-nolint
translateSelf(translateX, translateY)
translateSelf(translateX, translateY, translateZ)
```

### Parameters

- `translateX`
  - : A number representing the abscissa (x-coordinate) of the translating vector.
- `translateY`
  - : A number representing the ordinate (y-coordinate) of the translating vector.
- `translateZ` {{optional_inline}}
  - : A number representing the z component of the translating vector. If not supplied,
    this defaults to 0. If this is anything other than 0, the resulting matrix will be
    3D.

### Return value

Returns itself; the [`DOMMatrix`](/en-US/docs/Web/API/DOMMatrix) translated by the given
vector.

## Examples

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
matrix.translateSelf(25, 25); // mutate it
console.log(matrix); // output: "matrix(1, 0, 0, 1, 25, 25)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.translate()")}}
- CSS {{cssxref("transform")}} property
- CSS {{cssxref("translate")}} property
- CSS {{cssxref("transform-function")}} functions
  - {{cssxref("transform-function/translate", "translate()")}}
  - {{cssxref("transform-function/translate3d", "translate3d()")}}
  - {{cssxref("transform-function/translateX", "translateX()")}}
  - {{cssxref("transform-function/translateY", "translateY()")}}
  - {{cssxref("transform-function/translateZ", "translateZ()")}}
- [CSS transforms](/en-US/docs/Web/CSS/CSS_transforms) module
- SVG [`transform`](/en-US/docs/Web/SVG/Attribute/transform) attribute
- {{domxref("CanvasRenderingContext2D")}} interface methods
  - {{domxref("CanvasRenderingContext2D.translate()")}}
  - {{domxref("CanvasRenderingContext2D.transform()")}}
  - {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - {{domxref("CanvasRenderingContext2D.resetTransform()")}}
