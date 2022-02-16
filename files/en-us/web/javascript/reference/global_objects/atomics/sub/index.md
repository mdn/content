---
title: Atomics.sub()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/sub
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
browser-compat: javascript.builtins.Atomics.sub
---
{{JSRef}}

The static **`Atomics.sub()`** method subtracts a given value
at a given position in the array and returns the old value at that position. This atomic
operation guarantees that no other write happens until the modified value is written
back.

{{EmbedInteractiveExample("pages/js/atomics-sub.html")}}

## Syntax

```js
Atomics.sub(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to subtract a
    `value` from.
- `value`
  - : The number to subtract.

### Return value

The old value at the given position
(`typedArray[index]`).

### Exceptions

- Throws a {{jsxref("TypeError")}}, if `typedArray` is not one
  of the allowed integer types.
- Throws a {{jsxref("RangeError")}}, if `index` is out of bounds
  in the `typedArray`.

## Examples

### Using sub

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // returns 48, the old value
Atomics.load(ta, 0); // 36
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.add()")}}
