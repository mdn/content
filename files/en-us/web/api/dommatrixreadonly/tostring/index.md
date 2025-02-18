---
title: "DOMMatrixReadOnly: toString() method"
short-title: toString()
slug: Web/API/DOMMatrixReadOnly/toString
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.toString
---

{{APIRef("DOM")}}

The **`toString()`** {{Glossary("stringifier")}} of the {{domxref("DOMMatrixReadOnly")}} interface returns the value of the matrix as a string in the form of a `matrix()` or `matrix3d()` CSS [transform function](/en-US/docs/Web/CSS/transform-function); comma-separated lists of 6 or 16 coordinate values, prepended by `"matrix(` or `"matrix3d(` respectively, appended by `)"`.

For a 2D matrix, the elements [`a` through `f`](/en-US/docs/Web/API/DOMMatrix#a) are listed, for a total of six values and the form `matrix(a, b, c, d, e, f)`. See the {{cssxref("transform-function/matrix", "matrix()")}} CSS function for details on this syntax.

For a 3D matrix, the returned string contains all [16 elements](/en-US/docs/Web/API/DOMMatrix#m11) and takes the form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)`. See the CSS {{cssxref("transform-function/matrix3d", "matrix3d()")}} function for details on the 3D notation's syntax.

## Syntax

```js-nolint
toString()
```

### Parameters

None.

### Return value

A string; the values of the list separated by commas, within `matrix()` or `matrix3d()` function syntax.

## Examples

```js
const matrix = new DOMMatrixReadOnly();
console.log(matrix.translate(20, 30).toString()); // matrix(1, 0, 0, 1, 20, 30)
console.log(matrix.translate(30, 40, 50).toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.skewY(15).skewX(5).rotate(3).translate(20, 50).toString());
// matrix(1.003, 0.321, 0.035, 1.01, 21.816, 56.824)
console.log(
  matrix.skewY(15).skewX(5).rotate(3).translate(20, 50, 60).toString(),
);
// matrix3d(1.003, 0.321, 0, 0, 0.0350, 1.008, 0, 0, 0, 0, 1, 0, 21.816, 56.824, 60, 1)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.toJSON()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
