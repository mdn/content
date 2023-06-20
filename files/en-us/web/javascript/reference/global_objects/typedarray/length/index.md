---
title: TypedArray.prototype.length
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/length
page-type: javascript-instance-accessor-property
browser-compat: javascript.builtins.TypedArray.length
---

{{JSRef}}

The **`length`** accessor property of {{jsxref("TypedArray")}} instances returns the length (in elements) of this typed array.

{{EmbedInteractiveExample("pages/js/typedarray-length.html","shorter")}}

## Syntax

### Return value

The getter for `length` returns an integer whose value is either explicitly specified via the `length` parameter of the {{jsxref("TypedArray")}} constructor, or implicitly calculated by the `byteOffset` parameter and the `byteLength` of the referenced {{jsxref("ArrayBuffer")}} or {{jsxref("SharedArrayBuffer")}}, where _TypedArray_ is one of the [TypedArray objects](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#typedarray_objects).

There is no setter for `length`, so you cannot change this property's value using assignment.

## Description

The value of `length` is always equal to the value of {{jsxref("TypedArray/byteLength", "byteLength")}} divided by {{jsxref("TypedArray/BYTES_PER_ELEMENT", "BYTES_PER_ELEMENT")}}.

## Examples

### Using the `length` property

```js
const buffer = new ArrayBuffer(8);

let uint8 = new Uint8Array(buffer);
uint8.length; // 8 (matches the length of the buffer)

uint8 = new Uint8Array(buffer, 1, 5);
uint8.length; // 5 (as specified when constructing the Uint8Array)

uint8 = new Uint8Array(buffer, 2);
uint8.length; // 6 (due to the offset of the constructed Uint8Array)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
