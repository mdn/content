---
title: AbortSignal.reason
slug: Web/API/AbortSignal/reason
tags:
  - API
  - AbortSignal
  - Experimental
  - Property
  - Reference
  - reason
browser-compat: api.AbortSignal.reason
---
{{APIRef("DOM")}} {{SeeCompatTable}}

The **`reason`** read-only property returns a JavaScript value that indicates the abort reason.

The property is `undefined` when the signal has not been aborted.
It can be set to a specific value when the signal is aborted, using {{domxref("AbortController.abort()")}} or {{domxref("AbortSignal.abort()")}}.
If not explicitly set in those methods, it defaults to "AbortError" {{domxref("DOMException")}}.

## Value

A JavaScript value that indicates the abort reason, or `undefined`, if not aborted.

## Examples

In the following snippet, we create a new `AbortController` object, and get its {{domxref("AbortSignal")}} (available using the `signal` property).
Later on, using the `aborted` property, we check whether or not the signal has been aborted, and log the abort status and reason to the console.

```js
var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted ? console.log(`Request aborted with reason: ${signal.reason}`) : console.log('Request not aborted');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
