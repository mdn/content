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

The **`close()`** method of the {{domxref("CloseWatcher")}} interface lets you skip any logic in the `cancel` event handler and immediately fire the `close` event. It then deactivates the close watcher as if `destroy()` was called.

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
watcher.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
