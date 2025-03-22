---
title: "CloseWatcher: destroy() method"
short-title: destroy()
slug: Web/API/CloseWatcher/destroy
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CloseWatcher.destroy
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`destroy()`** method of the {{domxref("CloseWatcher")}} interface deactivates the close watcher. This is intended to be called if the relevant UI element is torn down in some other way than being closed.

After being deactivated, this `CloseWatcher` will no longer receive `cancel` or `close` events, and it will be possible to create new independent `CloseWatcher` instances.

## Syntax

```js-nolint
destroy()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using the `destroy()` method

Use the `destroy()` method to dispose of the watcher instance for cleanup.

```js
watcher.destroy();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
