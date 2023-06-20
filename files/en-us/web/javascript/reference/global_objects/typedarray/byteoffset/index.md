---
title: TypedArray.prototype.byteOffset
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.TypedArray.byteOffset
---

{{JSRef}}

The **`byteOffset`** accessor property of {{jsxref("TypedArray")}} instances returns the offset (in bytes) of this typed array from the start of its {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}.

## Syntax

### Return value

The getter for `byteOffset` returns an integer whose value is established via the second `byteOffset` parameter of the {{jsxref("TypedArray")}} constructor, where _TypedArray_ is one of the [TypedArray objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

There is no setter for `byteOffset`, so you cannot change this property's value using assignment.

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
