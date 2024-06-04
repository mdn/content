---
title: "CloseWatcher: requestClose() method"
short-title: requestClose()
slug: Web/API/CloseWatcher/requestClose
page-type: web-api-instance-method
browser-compat: api.CloseWatcher.requestClose
status:
  - experimental
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

The **`requestClose()`** method of the {{domxref("CloseWatcher")}} interface fires a `cancel` event and if that event is not canceled with {{domxref("Event.preventDefault()")}}, proceeds to fire a `close` event, and then finally deactivates the close watcher as if `destroy()` was called.

## Syntax

```js-nolint
requestClose()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Using the `requestClose()` method

Use the `requestClose()` method to go through the `cancel` event handler first if there is one.

```js
// Use the cancel event to interrupt the close request
watcher.addEventListener("cancel", (e) => {
  e.preventDefault();
  // Close if some condition is met
  if (condition) {
    watcher.close();
  }
};

// Trigger a close request manually
watcher.requestClose();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
