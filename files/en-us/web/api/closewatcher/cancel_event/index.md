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

A `cancel` event is fired at a {{domxref("CloseWatcher")}} object before the `close` event, so that `close` can be prevented from firing, if necessary. It is triggered by all close signals (e.g. the <kbd>Esc</kbd> key) as well as {{domxref("CloseWatcher.requestClose()")}}.

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

In this example, we ask the user to confirm that they really want to close the component, and if they don't, we cancel the event using {{domxref("Event.preventDefault()")}}, which prevents the `close` event from being fired.

```js
watcher.addEventListener("cancel", (e) => {
  if (e.cancelable && hasUnsavedData) {
    const userReallyWantsToClose = confirm("Are you sure you want to close?");
    if (!userReallyWantsToClose) {
      e.preventDefault();
    }
  }
};

// Trigger a close request manually
watcher.requestClose();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
