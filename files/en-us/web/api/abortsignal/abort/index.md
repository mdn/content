---
title: AbortSignal.abort()
slug: Web/API/AbortSignal/abort
tags:
  - API
  - AbortSignal
  - Method
  - Reference
  - abort
browser-compat: api.AbortSignal.abort
---
{{APIRef("DOM")}}

The static **`AbortSignal.abort()`** method returns an {{domxref("AbortSignal")}} that is already set as aborted (and which does not trigger an abort event).

This is shorthand for the following code:

```js
const controller = new AbortController();
controller.abort();
return controller.signal;
```

This could, for example, be passed to a fetch method in order to run its abort logic (i.e. it may be that code is organised such that the abort logic should be run even if the intended fetch operation has not been started).

> **Note:** The method is similar in purpose to {{JSxRef("Promise.reject")}}

## Syntax

```js
AbortSignal.abort();
```

### Return value

An `AbortSignal` instance with the {{domxref("AbortSignal.aborted")}} property set to `true`.

.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
