---
title: Atomics.wait()
short-title: wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.wait
sidebar: jsref
---

The **`Atomics.wait()`** static method verifies that a shared memory location contains a given value and if so sleeps, awaiting a wake-up notification or a time out. It returns a string which is `"not-equal"` if the memory location does not match the given value, `"ok"` if woken by {{jsxref("Atomics.notify()")}}, or `"timed-out"` if the timeout expires.

`Atomics.wait()` and {{jsxref("Atomics.notify()")}} are used together to enable thread synchronization based on a value in shared memory. A thread can proceed immediately if the synchronization value has changed, or it can wait for notification from another thread when it reaches the synchronization point.

This method only works with an {{jsxref("Int32Array")}} or {{jsxref("BigInt64Array")}} that views a {{jsxref("SharedArrayBuffer")}}. It is blocking and cannot be used in the main thread. For a non-blocking, asynchronous version of this method, see {{jsxref("Atomics.waitAsync()")}}.

## Syntax

```js-nolint
Atomics.wait(typedArray, index, value)
Atomics.wait(typedArray, index, value, timeout)
```

### Parameters

- `typedArray`
  - : An {{jsxref("Int32Array")}} or {{jsxref("BigInt64Array")}} that views a {{jsxref("SharedArrayBuffer")}}.
- `index`
  - : The position in the `typedArray` to wait on.
- `value`
  - : The expected value to test.
- `timeout` {{optional_inline}}
  - : Time to wait in milliseconds. {{jsxref("NaN")}} (and values that get converted to `NaN`, such as `undefined`) becomes {{jsxref("Infinity")}}. Negative values become `0`.

### Return value

A string which is either `"not-equal"`, `"ok"`, or `"timed-out"`.

- `"not-equal"` is returned immediately if the initial `value` does not equal what is stored at `index`.
- `"ok"` is returned if woken up by a call to `Atomics.notify()`, **regardless of whether the expected value has changed**.
- `"timed-out"` is returned if a sleeping wait exceeds the specified `timeout` without being woken up by `Atomics.notify()`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown in one of the following cases:
    - If `typedArray` is not an {{jsxref("Int32Array")}} or {{jsxref("BigInt64Array")}} that views a {{jsxref("SharedArrayBuffer")}}.
    - If the current thread cannot be blocked (for example, because it's the main thread).
- {{jsxref("RangeError")}}
  - : Thrown if `index` is out of bounds in the `typedArray`.

## Examples

### Using wait()

Given a shared `Int32Array`:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

A reading thread is sleeping and waiting on location 0 because the provided `value` matches what is stored at the provided `index`.
The reading thread will not move on until the writing thread has called `Atomics.notify()` on position 0 of the provided `typedArray`.
Note that if, after being woken up, the value of location 0 has not been changed by the writing thread, the reading thread will **not** go back to sleep, but will continue on.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

A writing thread stores a new value and notifies the waiting thread once it has
written:

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.waitAsync()")}}
- {{jsxref("Atomics.notify()")}}
