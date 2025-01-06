---
title: "DOMMatrixReadOnly: toJSON() method"
short-title: toJSON()
slug: Web/API/DOMMatrixReadOnly/toJSON
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.toJSON
---

{{APIRef("DOM")}}

The **`toJSON()`** method of the {{domxref("DOMMatrixReadOnly")}} interface creates and returns a {{jsxref("JSON")}} object. The JSON object includes the 2D matrix elements `a` through `f`, the 16 elements of the 4X4 3D matrix, `m[1-4][1-4]`, the boolean {{domxref("DOMMatrixReadOnly.is2D", "is2D")}} property, and the boolean {{domxref("DOMMatrixReadOnly.isIdentity", "isIdentity")}} property.

## Syntax

```js-nolint
DOMMatrixReadOnly.toJSON()
```

### Parameters

None.

### Return value

A {{jsxref("JSON")}} object; a JSON representation of the `DOMMatrixReadOnly` object.

## Examples

```js
const matrix = new DOMMatrixReadOnly();
console.log(matrix.translate(20, 30).toJSON());
/*
{
    "a": 1,
    "b": 0,
    "c": 0,
    "d": 1,
    "e": 20,
    "f": 30,
    "m11": 1,
    "m12": 0,
    "m13": 0,
    "m14": 0,
    "m21": 0,
    "m22": 1,
    "m23": 0,
    "m24": 0,
    "m31": 0,
    "m32": 0,
    "m33": 1,
    "m34": 0,
    "m41": 20,
    "m42": 30,
    "m43": 0,
    "m44": 1,
    "is2D": true,
    "isIdentity": false
}
*/
console.log(matrix.translate(22, 55, 66).toJSON());
/*
{
    "a": 1,
    "b": 0,
    "c": 0,
    "d": 1,
    "e": 22,
    "f": 55,
    "m11": 1,
    "m12": 0,
    "m13": 0,
    "m14": 0,
    "m21": 0,
    "m22": 1,
    "m23": 0,
    "m24": 0,
    "m31": 0,
    "m32": 0,
    "m33": 1,
    "m34": 0,
    "m41": 22,
    "m42": 55,
    "m43": 66,
    "m44": 1,
    "is2D": false,
    "isIdentity": false
}
*/
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.toString()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
