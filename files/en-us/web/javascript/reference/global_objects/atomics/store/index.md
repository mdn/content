---
title: Atomics.store()
short-title: store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.store
sidebar: jsref
---

The **`Atomics.store()`** static method stores a given value at a given position in the array and returns that value. This atomic operation guarantees that the write is tear-free, and that all atomic writes are sequentially consistent.

Note that unlike many other `Atomic` methods, `store()` returns the new value instead of the old value. To get the old value, use {{jsxref("Atomics.exchange()")}} instead.

## Syntax

```js-nolint
Atomics.store(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to store a `value` in.
- `value`
  - : The number to store.

### Return value

The value that has been stored.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

Note that these examples cannot be run directly from the console or an arbitrary web page, because `SharedArrayBuffer` is not defined unless its [security requirements](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) are met.

### Using Atomics.store()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

console.log(Atomics.store(ta, 0, 12)); // 12, the new/current value
console.log(Atomics.load(ta, 0)); // 12, the new/current value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
- {{jsxref("Atomics.exchange()")}}
