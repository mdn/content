---
title: IdleDetector.start()
slug: Web/API/IdleDetector/start
tags:
  - API
  - Method
  - Reference
  - start
  - IdleDetector
browser-compat: api.IdleDetector.start
---
{{securecontext_header}}{{DefaultAPISidebar("Idle Detection API")}}

The **`start()`** method of the {{domxref("IdleDetector")}} interface returns a
{{jsxref("Promise")}} that resolves when the detector starts listening for changes in the
user's idle state. This
method takes an optional `options` object with the `threshold` in milliseconds
where inactivity should be reported and `signal` for an `AbortSignal` to abort
the idle detector.

## Syntax

```js
IdleDetector.start();
IdleDetector.start(options);
```

### Parameters

- `options`{{optional_inline}}
  - : An object with the following properties:
    - `threshold`: The minimum number of idle milliseconds before reporting should begin.
    - `signal`: A reference to an {{domxref('AbortSignal')}} instance allowing you to abort idel detection.

### Return Value

A {{jsxref("Promise")}}.

## Examples

The following example shows how to start idle detection using the `options` argument. It retrieves an instance of `AbortSignal` from an instance of {{domxref("AbortController")}}.

```js
const controller = new AbortController();
const signal = controller.signal;

await idleDetector.start({
  threshold: 60_000,
  signal,
});
console.log('IdleDetector is active.');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

