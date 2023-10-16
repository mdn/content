---
title: Atomics.exchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/exchange
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.exchange
---

{{JSRef}}

The **`Atomics.exchange()`** static method stores a given value
at a given position in the array and returns the old value at that position. This atomic
operation guarantees that no other write happens between the read of the old value and
the write of the new value.

{{EmbedInteractiveExample("pages/js/atomics-exchange.html")}}

## Syntax

```js-nolint
Atomics.exchange(typedArray, index, value)
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
- `value`
  - : The number to exchange.

### Return value

The old value at the given position
(`typedArray[index]`).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not one of the allowed integer types.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

### Using exchange()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.compareExchange()")}}
