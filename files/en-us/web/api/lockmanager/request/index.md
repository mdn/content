---
title: "LockManager: request() method"
short-title: request()
slug: Web/API/LockManager/request
page-type: web-api-instance-method
browser-compat: api.LockManager.request
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

The **`request()`** method of the {{domxref("LockManager")}} interface requests a {{domxref('Lock')}} object with parameters specifying its name and characteristics.
The requested `Lock` is passed to a callback, while the function itself returns a {{jsxref('Promise')}} that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.

The `mode` property of the `options` parameter may be either `"exclusive"` or `"shared"`.

Request an `"exclusive"` lock when it should only be held by one code instance at a time.
This applies to code in both tabs and workers. Use this to represent mutually exclusive access to a resource.
When an `"exclusive"` lock for a given name is held, no other lock with the same name can be held.

Request a `"shared"` lock when multiple instances of the code can share access to a resource.
When a `"shared"` lock for a given name is held, other `"shared"` locks for the same name can be granted, but no `"exclusive"` locks with that name can be held or granted.

This shared/exclusive lock pattern is common in database transaction architecture, for example to allow multiple simultaneous readers (each requests a `"shared"` lock) but only one writer (a single `"exclusive"` lock).
This is known as the readers-writer pattern.
In the [IndexedDB API](/en-US/docs/Web/API/IndexedDB_API), this is exposed as `"readonly"` and `"readwrite"` transactions which have the same semantics.

## Syntax

```js-nolint
request(name, callback)
request(name, options, callback)
```

### Parameters

- `name`

  - : An identifier for the lock you want to request.

- `options` {{optional_inline}}

  - : An object describing characteristics of the lock you want to create.
    Valid values are:

    - `mode` {{optional_inline}}

      - : Either `"exclusive"` or `"shared"`.
        The default value is `"exclusive"`.

    - `ifAvailable` {{optional_inline}}

      - : If `true`, the lock request will only be granted if it is not already held.
        If it cannot be granted, the callback will be invoked with `null` instead of a `Lock` instance.
        The default value is `false`.

    - `steal` {{optional_inline}}

      - : If `true`, then any held locks with the same name will be released, and the request will be granted, preempting any queued requests for it.
        The default value is `false`.

        > [!WARNING]
        > Use with care!
        > Code that was previously running inside the lock continues to run, and may clash with the code that now holds the lock.

    - `signal` {{optional_inline}}
      - : An {{domxref("AbortSignal")}} (the {{domxref("AbortController.signal", "signal")}} property of an {{domxref("AbortController")}});
        if specified and the {{domxref("AbortController")}} is aborted, the lock request is dropped if it was not already granted.

- `callback`
  - : Method called when the lock is granted.
    The lock is automatically released when the callback returns (or an exception is thrown).
    Usually the callback is an async function, which causes the lock to be released only when the async function has completely finished.

### Return value

A {{jsxref('Promise')}} that resolves (or rejects) with the result of the callback after the lock is released, or rejects if the request is aborted.

### Exceptions

This method may return a promise rejected with a {{domxref("DOMException")}} of one of the following types:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the environments document is not fully active.
- `SecurityError` {{domxref("DOMException")}}
  - : Thrown if a lock manager cannot be obtained for the current environment.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Thrown if `name` starts with a hyphen (`-`), both options `steal` and `ifAvailable` are `true`, or if option `signal` exists and _either_ option `steal` or `ifAvailable` is `true`.
- `AbortError` {{domxref("DOMException")}}
  - : Thrown if the option `signal` exists and is aborted.

## Examples

### General Example

The following example shows the basic use of the `request()` method with an asynchronous function as the callback.
Once the callback is invoked, no other running code on this origin can hold `my_resource` until the callback returns.

```js
await navigator.locks.request("my_resource", async (lock) => {
  // The lock was granted.
});
```

### `mode` example

The following example shows how to use the `mode` option for readers and writers.

Notice that both functions use a lock called `my_resource`.
The `do_read()` requests a lock in `'shared'` mode meaning that multiple calls may occur simultaneously across different event handlers, tabs, or workers.

```js
async function do_read() {
  await navigator.locks.request(
    "my_resource",
    { mode: "shared" },
    async (lock) => {
      // Read code here.
    },
  );
}
```

The `do_write()` function use the same lock but in `'exclusive'` mode which will delay invocation of the `request()` call in `do_read()` until the write operation has completed.
This applies across event handlers, tabs, or workers.

```js
async function do_write() {
  await navigator.locks.request(
    "my_resource",
    { mode: "exclusive" },
    async (lock) => {
      // Write code here.
    },
  );
}
```

### `ifAvailable` example

To grab a lock only if it isn't already being held, use the `ifAvailable` option.
In this function `await` means the method will not return until the callback is complete.
Since the lock is only granted if it was available, this call avoids needing to wait on the lock being released elsewhere.

```js
await navigator.locks.request(
  "my_resource",
  { ifAvailable: true },
  async (lock) => {
    if (!lock) {
      // The lock was not granted - get out fast.
      return;
    }

    // The lock was granted, and no other running code in this origin is holding
    // the 'my_res_lock' lock until this returns.
  },
);
```

### `signal` example

To only wait for a lock for a short period of time, use the `signal` option.

```js
const controller = new AbortController();
// Wait at most 200ms.
setTimeout(() => controller.abort(), 200);

try {
  await navigator.locks.request(
    "my_resource",
    { signal: controller.signal },
    async (lock) => {
      // The lock was acquired!
    },
  );
} catch (ex) {
  if (ex.name === "AbortError") {
    // The request aborted before it could be granted.
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
