---
title: "DOMMatrixReadOnly: toFloat64Array() method"
short-title: toFloat64Array()
slug: Web/API/DOMMatrixReadOnly/toFloat64Array
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.toFloat64Array
---

{{APIRef("DOM")}}

The **`toFloat64Array()`** method of the {{domxref("DOMMatrixReadOnly")}} interface returns a new {{jsxref("Float64Array")}} containing all 16 elements (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) which comprise the matrix. The elements are stored into the array as double-precision floating-point numbers in column-major (colexographical access, or "colex") order. (In other words, down the first column from top to bottom, then the second column, and so forth.)

## Syntax

```js-nolint
toFloat64Array()
```

### Parameters

None.

### Return value

A {{jsxref("Float64Array")}}; an array of the matrix's 16 element values.

## Examples

```js
const matrix = new DOMMatrixReadOnly();
let float64 = matrix.translate(20, 30, 50).toFloat64Array();
console.log(float64); // Float64Array(16) [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 30, 0, 1 ] ]
console.log(`m41: ${float64[12]}, m42: ${float64[13]}, m43: ${float64[14]}`); // m41: 20, m42: 30, M44: 40

float64 = matrix.rotate(30).toFloat64Array();
console.log(float64);
console.log(`m11: ${float64[0]}, m12: ${float64[1]}`); // m11: 0.8660254037844387, m12: 0.49999999999999994
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
