---
title: "DOMMatrixReadOnly: toFloat32Array() method"
short-title: toFloat32Array()
slug: Web/API/DOMMatrixReadOnly/toFloat32Array
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.toFloat32Array
---

{{APIRef("DOM")}}

The **`toFloat32Array()`** method of the {{domxref("DOMMatrixReadOnly")}} interface returns a new {{jsxref("Float32Array")}} containing all 16 elements (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) which comprise the matrix. The elements are stored into the array as single-precision floating-point numbers in column-major (colexographical access, or "colex") order. (In other words, down the first column from top to bottom, then the second column, and so forth.)

For double-precision floating-point numbers, see {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}.

## Syntax

```js-nolint
toFloat32Array()
```

### Parameters

None.

### Return value

A {{jsxref("Float32Array")}}; an array of the matrix's 16 element values.

## Examples

### Basic usage

```js
const matrix = new DOMMatrixReadOnly();
const float32 = matrix.translate(20, 30, 50).toFloat32Array();
console.log(float32); // Float64Array(16) [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 30, 0, 1 ] ]
console.log(`m41: ${float32[12]}, m42: ${float32[13]}, m43: ${float32[14]}`); // m41: 20, m42: 30, M44: 40
```

### Single precision

There are multiple ways to access the values of a matrix. This example rotates a matrix by 30deg, saving the rotated state as a JSON object using the {{domxref("DOMMatrixReadOnly.toJSON()")}} method and as a single-precision array using the `toFloat32Array()` method.

```js
const matrix = new DOMMatrixReadOnly();
const json = matrix.rotate(30).toJSON();
const float32 = matrix.rotate(30).toFloat32Array();

console.log(`a: ${json["a"]}, b: ${json["b"]}`); // a: 0.8660254037844387, b: 0.49999999999999994
console.log(`a: ${float32[0]}, b: ${float32[1]}`); // a: 0.8660253882408142, b: 0.5
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
