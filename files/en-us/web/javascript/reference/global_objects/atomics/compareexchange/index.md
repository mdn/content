---
title: Atomics.compareExchange()
short-title: compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.compareExchange
sidebar: jsref
---

The **`Atomics.compareExchange()`** static method exchanges a given replacement value at a given position in the array, if a given expected value equals the old value. It returns the old value at that position whether it was equal to the expected value or not. This atomic operation guarantees that no other write happens until the modified value is written back.

## Syntax

```js-nolint
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}}, {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to exchange a `replacementValue`.
- `expectedValue`
  - : The value to check for equality.
- `replacementValue`
  - : The number to exchange.

### Return value

The old value at the given position (`typedArray[index]`). If the return value is equal to `expectedValue`, the exchange was successful; otherwise, the exchange failed.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

Note that these examples cannot be run directly from the console or an arbitrary web page, because `SharedArrayBuffer` is not defined unless its [security requirements](/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements) are met.

### Using Atomics.compareExchange()

```js
// Create a SharedArrayBuffer with a size in bytes
const sab = new SharedArrayBuffer(1024);
// Create a view and set the value of the 0 index
const ta = new Uint8Array(sab);
ta[0] = 7;

console.log(Atomics.compareExchange(ta, 0, 7, 12)); // 7, the old value
console.log(Atomics.load(ta, 0)); // 12, the new/current value
```

### Checking the return value

[Compare-and-swap](https://en.wikipedia.org/wiki/Compare-and-swap) guarantees that the new value is calculated based on up-to-date information; if the value had been updated by another thread in the meantime, the write would fail. Therefore, you should check the return value of `compareExchange()` to check if it has failed, and retry if necessary.

Here is one example of an atomic adder (same functionality as {{jsxref("Atomics.add()")}}), adapted from the linked Wikipedia article:

```js
function add(mem, index, a) {
  let done = false;
  while (!done) {
    const value = Atomics.load(mem, index);
    done = Atomics.compareExchange(mem, index, value, value + a) === value;
  }
  return value + a;
}
```

It first reads the value at the given index, then tries to update it with the new value. It keeps retrying until it successfully updates the value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
