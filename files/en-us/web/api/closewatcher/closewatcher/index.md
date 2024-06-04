---
title: "CloseWatcher: CloseWatcher() constructor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
page-type: web-api-constructor
browser-compat: api.CloseWatcher.CloseWatcher
status:
  - experimental
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`CloseWatcher()`** constructor creates a new {{domxref("CloseWatcher")}} object.

## Syntax

```js-nolint
new CloseWatcher()
new CloseWatcher(options)
```

### Parameters

- `options` {{optional_inline}}
  - : An object that has the following properties:
    - `signal`
      - : An {{domxref("AbortSignal")}} that, if provided, the watcher can be destroyed by.

## Return value

A new {{domxref("CloseEvent")}} object.

## Examples

### Creating new `CloseWatcher` instances

Optionally, the `CloseWatcher` constructor accepts a `signal` option which is an {{domxref("AbortSignal")}}.

```js
// Create a new close watcher
let watcher = new CloseWatcher();

// Create a new CloseWatcher with an AbortSignal that controls destroying the watcher
let controller = new AbortController();
let signalWatcher = new CloseWatcher({ signal: controller.signal };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CloseWatcher")}}, the interface of the objects it constructs.
