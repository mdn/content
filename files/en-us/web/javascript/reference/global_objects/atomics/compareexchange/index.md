---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
browser-compat: javascript.builtins.Atomics.compareExchange
---
{{JSRef}}

The static
**`Atomics.compareExchange()`**
method exchanges a given replacement value at a given position in the array, if a given
expected value equals the old value.  It returns the old value at that position whether
it was equal to the expected value or not. This atomic operation guarantees that no
other write happens until the modified value is written back.

{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}

## Syntax

```js
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to exchange a
    `value`.
- `expectedValue`
  - : The value to check for equality.
- `replacementValue`
  - : The number to exchange.

### Return value

The old value at the given position
(`typedArray[index]`).

### Exceptions

- Throws a {{jsxref("TypeError")}}, if `typedArray` is not one
  of the allowed integer types.
- Throws a {{jsxref("RangeError")}}, if `index` is out of bounds
  in the `typedArray`.

## Examples

### Using compareExchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.exchange()")}}
