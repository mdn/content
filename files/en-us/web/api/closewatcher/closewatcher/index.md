---
title: "CloseWatcher: CloseWatcher() constructor"
short-title: CloseWatcher()
slug: Web/API/CloseWatcher/CloseWatcher
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CloseWatcher.CloseWatcher
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
      - : If a `signal`, is provided then the watcher can be destroyed (as if by `watcher.destroy()`) by aborting the given {{domxref("AbortSignal")}}.

## Return value

A new {{domxref("CloseWatcher")}} object.

## Examples

### Creating new `CloseWatcher` instances

Create a new close watcher.

```js
const watcher = new CloseWatcher();
```

Create a new `CloseWatcher` with an {{domxref("AbortSignal")}} that controls destroying the watcher.

```js
const controller = new AbortController();
const signalWatcher = new CloseWatcher({ signal: controller.signal };
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
