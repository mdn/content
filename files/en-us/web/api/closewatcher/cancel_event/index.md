---
title: "CloseWatcher: cancel event"
short-title: cancel
slug: Web/API/CloseWatcher/cancel_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.CloseWatcher.cancel_event
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

A `cancel` event is fired at a {{domxref("CloseWatcher")}} object before the `close` event, so that `close` can be prevented from firing, if necessary.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("cancel", (event) => { })

oncancel = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Using the `cancel` event

The `cancel` event can be used to interrupt the close request. The `cancel` event is triggered by the `requestClose()` method.

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
