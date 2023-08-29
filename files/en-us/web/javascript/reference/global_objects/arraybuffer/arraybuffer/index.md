---
title: ArrayBuffer() constructor
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
page-type: javascript-constructor
browser-compat: javascript.builtins.ArrayBuffer.ArrayBuffer
---

{{JSRef}}

The **`ArrayBuffer()`** constructor creates {{jsxref("ArrayBuffer")}} objects.

{{EmbedInteractiveExample("pages/js/arraybuffer-constructor.html","shorter")}}

## Syntax

```js-nolint
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

> **Note:** `ArrayBuffer()` can only be constructed with [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new). Attempting to call it without `new` throws a {{jsxref("TypeError")}}.

### Parameters

- `length`
  - : The size, in bytes, of the array buffer to create.
- `options` {{optional_inline}}
  - : An object, which can contain the following properties:
    - `maxByteLength` {{optional_inline}}
      - : The maximum size, in bytes, that the array buffer can be resized to.

### Return value

A new `ArrayBuffer` object of the specified size, with its {{jsxref("ArrayBuffer/maxByteLength", "maxByteLength")}} property set to the specified `maxByteLength` if one was specified. Its contents are initialized to 0.

### Exceptions

- {{jsxref("RangeError")}}
  - : Thrown in one of the following cases:
    - `length` or `maxByteLength` is larger than {{jsxref("Number.MAX_SAFE_INTEGER")}} (≥ 2<sup>53</sup>) or negative.
    - `length` is larger than `maxByteLength`.

## Examples

### Creating an ArrayBuffer

In this example, we create a 8-byte buffer with a {{jsxref("Global_Objects/Int32Array",
  "Int32Array")}} view referring to the buffer:

```js
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Creating a resizable ArrayBuffer

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then {{jsxref("ArrayBuffer/resize", "resize()")}} it to 12 bytes:

```js
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

> **Note:** It is recommended that `maxByteLength` is set to the smallest value possible for your use case. It should never exceed `1073741824` (1GB) to reduce the risk of out-of-memory errors.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of `ArrayBuffer` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("SharedArrayBuffer")}}
