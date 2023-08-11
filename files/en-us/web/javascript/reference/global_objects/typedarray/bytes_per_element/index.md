---
title: TypedArray.BYTES_PER_ELEMENT
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT
page-type: javascript-static-data-property
browser-compat: javascript.builtins.TypedArray.BYTES_PER_ELEMENT
---

{{JSRef}}

The **`TypedArray.BYTES_PER_ELEMENT`** static data property represents the size in bytes of each element in a typed array.

{{EmbedInteractiveExample("pages/js/typedarray-bytes-per-element.html","shorter")}}

## Value

A number whose value depends on the type of `TypedArray`.

{{js_property_attributes(0, 0, 0)}}

## Description

`TypedArray` objects differ from each other in the number of bytes per element and in the way the bytes are interpreted. The `BYTES_PER_ELEMENT` constant contains the number of bytes each element in the given `TypedArray` has.

The `BYTES_PER_ELEMENT` property is both an _instance property_ and a _static property_. It's available on both `TypedArray` subclass constructors and on instances of those constructors.

As an instance property, `BYTES_PER_ELEMENT` is defined on the constructor's `prototype`.

```js
console.log(Object.hasOwn(Int8Array.prototype, "BYTES_PER_ELEMENT")); // true
```

## Examples

### Using BYTES_PER_ELEMENT

As a static property:

```js
Int8Array.BYTES_PER_ELEMENT; // 1
Uint8Array.BYTES_PER_ELEMENT; // 1
Uint8ClampedArray.BYTES_PER_ELEMENT; // 1
Int16Array.BYTES_PER_ELEMENT; // 2
Uint16Array.BYTES_PER_ELEMENT; // 2
Int32Array.BYTES_PER_ELEMENT; // 4
Uint32Array.BYTES_PER_ELEMENT; // 4
Float32Array.BYTES_PER_ELEMENT; // 4
Float64Array.BYTES_PER_ELEMENT; // 8
BigInt64Array.BYTES_PER_ELEMENT; // 8
BigUint64Array.BYTES_PER_ELEMENT; // 8
```

As an instance property:

```js
new Int8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8Array([]).BYTES_PER_ELEMENT; // 1
new Uint8ClampedArray([]).BYTES_PER_ELEMENT; // 1
new Int16Array([]).BYTES_PER_ELEMENT; // 2
new Uint16Array([]).BYTES_PER_ELEMENT; // 2
new Int32Array([]).BYTES_PER_ELEMENT; // 4
new Uint32Array([]).BYTES_PER_ELEMENT; // 4
new Float32Array([]).BYTES_PER_ELEMENT; // 4
new Float64Array([]).BYTES_PER_ELEMENT; // 8
new BigInt64Array([]).BYTES_PER_ELEMENT; // 8
new BigUint64Array([]).BYTES_PER_ELEMENT; // 8
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
