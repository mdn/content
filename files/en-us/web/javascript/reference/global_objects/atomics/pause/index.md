---
title: Atomics.pause()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/pause
page-type: javascript-static-method
browser-compat: javascript.builtins.Atomics.pause
---

{{JSRef}}

The **`Atomics.pause()`** static method provides a micro-wait primitive that hints to the CPU that the caller is spinning while waiting on access to a shared resource. This allows the system to reduce the resources allocated to the core (such as power) or thread, without yielding the current thread.

`pause()` has no observable behavior other than timing. The exact behavior is dependent on the CPU architecture and the operating system. For example, in Intel x86, it may be a `pause` instruction as per [Intel's optimization manual](https://www.intel.com/content/www/us/en/content-details/671488/intel-64-and-ia-32-architectures-optimization-reference-manual-volume-1.html). It could be a no-op in certain platforms.

## Syntax

```js-nolint
Atomics.pause()
Atomics.pause(durationHint)
```

### Parameters

- `durationHint` {{optional_inline}}
  - : An integer that an implementation may use to determine how long to wait. For a value `n + 1`, an implementation waits at least as long as it does for a given value `n`. The exact number has no physical meaning. There may be an internal upper bound on the maximum amount of time paused on the order of tens to hundreds of nanoseconds. This can be used to implement a [backoff strategy](#backoff_strategies) by increasing the `durationHint` passed in. There is no guarantee that an implementation will make use of this hint.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `durationHint` is not an integer or `undefined`.

## Examples

### Using Atomics.pause()

Calling {{jsxref("Atomics.wait()")}} or {{jsxref("Atomics.waitAsync()")}} in order to wait for access to shared memory causes the thread to be scheduled out of the core and then back in again after the wait. This is efficient during times of high contention, where access to the shared memory could take some time. When contention is low, then it is often more efficient to poll on the lock without yielding the thread: this approach is known as [busy waiting](https://en.wikipedia.org/wiki/Busy_waiting) or [spinlocking](https://en.wikipedia.org/wiki/Spinlock). The `pause()` method allows you to spinlock more efficiently while waiting, by providing a hint to the CPU about what the thread is doing, and hence its low need for resources.

To cater for both conditions, a common approach is to first spinlock in the hope that contention is low, and then wait if the lock is not gained after a short time. If we acquired the lock via spinlocking already, then the `wait()` call will be a no-op.

The example below shows how this approach can be used with `Atomics.pause()` and `Atomics.wait()`.

> [!WARNING]
> Using spinlocking on the main thread is not recommended, as it will freeze the entire page. In general, unless designed very carefully, spinlocks may not actually be more performant than a regular wait.

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

> [!NOTE]
> Implementations may not actually use `durationHint` at all and always wait for a constant time.

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
