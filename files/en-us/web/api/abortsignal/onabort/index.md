---
title: AbortSignal.onabort
slug: Web/API/AbortSignal/onabort
tags:
  - API
  - AbortSignal
  - Event Handler
  - Experimental
  - Fetch
  - Property
  - Reference
  - onabort
browser-compat: api.AbortSignal.onabort
---
{{APIRef("DOM")}}

The **`onabort`** read-only property of the {{domxref("AbortSignal")}} interface is an event handler invoked when an {{event("abort_(cancellable_fetch)", "abort")}} event fires, i.e. when the fetch requests the signal is communicating with are aborted.

## Syntax

```js
abortSignal.onabort = function() { /* ... */ };
```

## Examples

In the following snippet, we create a new `AbortController` object, and get its {{domxref("AbortSignal")}} (available using the `signal` property). Later on we check whether or not the signal has been aborted using the `onabort` property, and send an appropriate log to the console.

```js
var controller = new AbortController();
var signal = controller.signal;

signal.onabort = function() {
  console.log('Request aborted');
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
