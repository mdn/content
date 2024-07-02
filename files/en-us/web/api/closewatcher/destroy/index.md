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

The **`destroy()`** method of the {{domxref("CloseWatcher")}} interface deactivates the close watcher so that it will no longer receive `cancel` or `close` events. This method is useful when a close watcher is associated with a component that gets removed from the DOM before being closed. Similar to how you clean up event listeners with {{domxref("EventTarget.removeEventListener", "removeEventListener()")}}.

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
