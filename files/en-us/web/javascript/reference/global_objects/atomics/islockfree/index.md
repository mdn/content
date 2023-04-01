---
title: Atomics.isLockFree()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.isLockFree
---

{{JSRef}}

The **`Atomics.isLockFree()`** static
method is used to determine whether the `Atomics` methods use locks
or atomic hardware operations when applied to typed arrays with the given element
byte size.
It returns `false` if the given size is not one of the [BYTES_PER_ELEMENT](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/BYTES_PER_ELEMENT)
property of integer TypedArray types.

{{EmbedInteractiveExample("pages/js/atomics-islockfree.html")}}

## Syntax

```js-nolint
Atomics.isLockFree(size)
```

### Parameters

- `size`
  - : The size in bytes to check.

### Return value

A `true` or `false` value indicating whether the operation is lock free.

## Examples

### Using isLockFree

```js
Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true
Atomics.isLockFree(5); // false
Atomics.isLockFree(6); // false
Atomics.isLockFree(7); // false
Atomics.isLockFree(8); // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
