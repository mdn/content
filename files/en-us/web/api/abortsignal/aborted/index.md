---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
tags:
  - API
  - AbortSignal
  - Experimental
  - Property
  - Reference
  - aborted
browser-compat: api.AbortSignal.aborted
---
{{APIRef("DOM")}}

The **`aborted`** read-only property returns a value that indicates whether the DOM requests the signal is communicating with are aborted (`true`) or not (`false`).

## Value

`true` (aborted) or `false`

## Examples

In the following snippet, we create a new `AbortController` object, and get its {{domxref("AbortSignal")}} (available using the `signal` property).
Later on, using the `aborted` property, we check whether or not the signal has been aborted, and send an appropriate log to the console.

```js
var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted ? console.log('Request has been aborted') : console.log('Request not aborted');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
