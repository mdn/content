---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.TypedArray.byteOffset
---

{{JSRef}}

The **`byteOffset`** accessor property of {{jsxref("TypedArray")}} instances returns the offset (in bytes) of this typed array from the start of its {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}.

## Description

The `byteOffset` property is an accessor property whose set accessor function is `undefined`, meaning that you can only read this property. The value is established when a _TypedArray_ is constructed and cannot be changed. _TypedArray_ is one of the [TypedArray objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

## Examples

### Using the byteOffset property

```js
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0 (no offset specified)

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3 (as specified when constructing Uint8Array)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
