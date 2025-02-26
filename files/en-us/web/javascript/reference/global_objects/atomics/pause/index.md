---
title: Atomics.pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.pause
---

{{JSRef}}

The **`Atomics.pause()`** static method provides a micro-wait primitive by hinting to the CPU that it is spinning while waiting on a value. This releases shared CPU resources to other cores without yielding the current thread. 

`pause()` has no observable behavior other than timing. The exact behavior is dependent on the CPU architecture and the operating system. For example, in Intel x86, it may be a `pause` instruction as per [Intel's optimization manual](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html). It could be a no-op in certain platforms.

## Syntax

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### Parameters

- `durationHint` {{optional_inline}}
  - : An integer that is positively correlated with the wait duration. Larger values result in longer waits (and more `pause` instructions sent), but the exact number has no physical meaning. There may be an internal upper bound on the maximum amount of time paused, to the order of tens to hundreds of nanoseconds. The hint may be ignored.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `durationHint` is not an integer or `undefined`.

## Examples

### Using Atomics.pause()

Consider a thread that tries to acquire a lock in a futex. Without micro-waits, one would just call {{jsxref("Atomics.wait()")}} or {{jsxref("Atomics.waitAsync()")}}. However, this can be inefficient because it causes the thread to be scheduled out and back in, which is expensive. Instead, we can implement a fast path by making the CPU spin for a short while to see if it can acquire the lock without waiting, and only yield back to the kernel if it can't. This is known as [busy waiting](https://en.wikipedia.org/wiki/Busy_waiting), or [spinlocking](https://en.wikipedia.org/wiki/Spinlock).

```js
// Imagine another thread also has access to this shared memory
const sab = new SharedArrayBuffer(1024);
const i32 = new Int32Array(sab);

// Fast path: spin the CPU for a short while
let spin = 0;
do {
  if (Atomics.compareExchange(i32, 0, 0, 1) === 0) {
    break;
  }
  Atomics.pause();
  spin++;
} while (spin < 10);

// Slow path: wait for the lock
// This can only be called in a worker thread,
// because the main thread cannot be blocked
Atomics.wait(i32, 0, 1);
```

### Backoff strategies

The `durationHint` parameter can be used to implement backoff strategies. For example, a thread can start with a small hint and increase it exponentially on each iteration. This is preferable to calling `pause()` many times because in un-JITed code, function calls themselves have a high overhead.

```js
// Exponential backoff
for (let hint = 1; hint < 1000; hint *= 2) {
  Atomics.pause(hint);
}

// Linear backoff
for (let hint = 1; hint < 100; hint++) {
  Atomics.pause(hint);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
- {{jsxref("Atomics.waitAsync()")}}
