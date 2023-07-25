---
title: Atomics.waitAsync()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.waitAsync
---

{{JSRef}}

The **`Atomics.waitAsync()`** static method waits asynchronously on a shared memory location and returns a {{jsxref("Promise")}}.

Unlike {{jsxref("Atomics.wait()")}}, `waitAsync` is non-blocking and usable on the main thread.

> **Note:** This operation only works with a shared {{jsxref("Int32Array")}} or {{jsxref("BigInt64Array")}}.

## Syntax

```js-nolint
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Parameters

- `typedArray`
  - : An {{jsxref("Int32Array")}} or {{jsxref("BigInt64Array")}} that views a {{jsxref("SharedArrayBuffer")}}.
- `index`
  - : The position in the `typedArray` to wait on.
- `value`
  - : The expected value to test.
- `timeout` {{optional_inline}}
  - : Time to wait in milliseconds. {{jsxref("Infinity")}}, if no time is provided.

### Return value

An {{jsxref("Object")}} with the following properties:

- `async`
  - : A boolean indicating whether the `value` property is a {{jsxref("Promise")}} or not.
- `value`
  - : If `async` is `false`, it will be a string which is either `"not-equal"` or `"timed-out"` (only when the `timeout` parameter is `0`). If `async` is `true`, it will be a {{jsxref("Promise")}} which is fulfilled with a string value, either `"ok"` or `"timed-out"`. The promise is never rejected.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `typedArray` is not an {{jsxref("Int32Array")}} or {{jsxref("BigInt64Array")}} that views a {{jsxref("SharedArrayBuffer")}}.
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

### Using waitAsync()

Given a shared `Int32Array`.

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

A reading thread is sleeping and waiting on location 0 which is expected to be 0.
The `result.value` will be a promise.

```js
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

In the reading thread or in another thread, the memory location 0 is called and the promise can be resolved with `"ok"`.

```js
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

If it isn't resolving to `"ok"`, the value in the shared memory location wasn't the expected (the `value` would be `"not-equal"` instead of a promise) or the timeout was reached (the promise will resolve to `"time-out"`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.notify()")}}
