---
title: "CloseWatcher: destroy() method"
short-title: destroy()
slug: Web/API/CloseWatcher/destroy
page-type: web-api-instance-method
status:
  - experimental
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`destroy()`** method of the {{domxref("CloseWatcher")}} interface deactivates the close watcher so that it will no longer receive `close` events.

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

Use the `destory()` method to dispose the watcher instance

```js
// Listen for close requests
watcher.addEventListener("close", () => {
  // Close your UI component
  sidebar.hide();
  // Dispose the watcher instance
  watcher.destroy();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
