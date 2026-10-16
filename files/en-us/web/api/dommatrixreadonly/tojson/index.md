---
title: "DOMMatrixReadOnly: toJSON() method"
short-title: toJSON()
slug: Web/API/DOMMatrixReadOnly/toJSON
page-type: web-api-instance-method
browser-compat: api.DOMMatrixReadOnly.toJSON
---

{{APIRef("DOM")}}

The **`toJSON()`** method of the {{domxref("DOMMatrixReadOnly")}} interface returns a JSON-serializable plain object representing the `DOMMatrixReadOnly` object.

The `toJSON()` method is automatically called by {{jsxref("JSON.stringify()")}} when a `DOMMatrixReadOnly` object is stringified. This method is generally intended to, by default, usefully serialize `DOMMatrixReadOnly` objects during [JSON](/en-US/docs/Glossary/JSON) serialization, which can then be deserialized using the {{domxref("DOMMatrixReadOnly/fromMatrix_static", "DOMMatrixReadOnly.fromMatrix()")}} function within the reviver of {{jsxref("JSON.parse()")}}.

## Syntax

```js-nolint
toJSON()
```

### Parameters

None.

### Return value

A JSON-serializable plain object, containing the following properties:

- `a`
- `b`
- `c`
- `d`
- `e`
- `f`
- `m11`
- `m12`
- `m13`
- `m14`
- `m21`
- `m22`
- `m23`
- `m24`
- `m31`
- `m32`
- `m33`
- `m34`
- `m41`
- `m42`
- `m43`
- `m44`
- {{domxref("DOMMatrixReadOnly/is2D", "is2D")}}
- {{domxref("DOMMatrixReadOnly/isIdentity", "isIdentity")}}

Each property's value is copied as-is.

## Examples

### Calling toJSON() directly

This example creates a `DOMMatrixReadOnly` object. Calling `toJSON()` directly returns a plain object. You can access its properties, which is the same as accessing them on the original object.

```js
const matrix = new DOMMatrixReadOnly().translate(20, 30);
const matrix3D = new DOMMatrixReadOnly().translate(22, 55, 66);

const json = matrix.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.is2D); // Same value as matrix.is2D
```

### Serializing to a JSON string

In this example, the `DOMMatrixReadOnly` object from the previous example is automatically serialized by {{jsxref("JSON.stringify()")}}, which calls the `toJSON()` method.

```js
console.log(JSON.stringify(matrix));
```

This would log a JSON string like so (formatted for readability):

```json
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
```

The three-dimensional matrix from the previous example has `is2D` set to `false`:

```js
console.log(JSON.stringify(matrix3D));
```

This would log a JSON string like so (formatted for readability):

```json
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("DOMMatrixReadOnly.toString()")}}
- {{domxref("DOMMatrix.setMatrixValue()")}}
