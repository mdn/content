---
title: "CloseWatcher: close() method"
short-title: close()
slug: Web/API/CloseWatcher/close
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.CloseWatcher.close
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`close()`** method of the {{domxref("CloseWatcher")}} interface immediately fires the `close` event and deactivates the close watcher as if `destroy()` was called. It skips any logic in the `cancel` event handler.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using the `close()` method

Use the `close()` method to deactivate the close watcher and destroy it.

```js
watcher.addEventListener("cancel", (e) => {
  e.preventDefault();
  // Decide to close if some condition is met
  if (condition) {
    watcher.close();
  }
};
watcher.requestClose();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
