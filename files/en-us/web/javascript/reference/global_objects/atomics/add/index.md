---
title: Atomics.add()
short-title: add()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/add
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.add
sidebar: jsref
---

The **`Atomics.add()`** static method adds a given value at a given position in the array, and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.

## Syntax

```js-nolint
Atomics.add(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to add a `value` to.
- `value`
  - : The number to add.

### Return value

The old value at the given position (`typedArray[index]`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

Note that these examples cannot be run directly from the console or an arbitrary web page, because `SharedArrayBuffer` is not defined unless its [security requirements](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) are met.

### Using Atomics.add()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
// Create a view and set the value of the 0 index
const ta = new Uint8Array(sab);
ta[0] = 7;

// 7 + 12 = 19
console.log(Atomics.add(ta, 0, 12)); // 7, the old value
console.log(Atomics.load(ta, 0)); // 19, the new/current value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.sub()")}}
