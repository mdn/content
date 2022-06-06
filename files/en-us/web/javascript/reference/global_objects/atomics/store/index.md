---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
tags:
  - Atomics
  - JavaScript
  - Method
  - Shared Memory
browser-compat: javascript.builtins.Atomics.store
---
{{JSRef}}

The static **`Atomics.store()`**
method stores a given value at the given position in the array and returns that value.

{{EmbedInteractiveExample("pages/js/atomics-store.html")}}

## Syntax

```js
Atomics.store(typedArray, index, value)
```

### Parameters

- `typedArray`
  - : An integer typed array. One of {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}},
    {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}},
    {{jsxref("Uint32Array")}}, {{jsxref("BigInt64Array")}}, or
    {{jsxref("BigUint64Array")}}.
- `index`
  - : The position in the `typedArray` to store a
    `value` in.
- `value`
  - : The number to store.

### Return value

The value that has been stored.

### Exceptions

- Throws a {{jsxref("TypeError")}}, if `typedArray` is not one
  of the allowed integer types.
- Throws a {{jsxref("RangeError")}}, if `index` is out of bounds
  in the `typedArray`.

## Examples

### Using store()

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.load()")}}
