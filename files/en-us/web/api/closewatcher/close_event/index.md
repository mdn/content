---
title: "CloseWatcher: close event"
short-title: close
slug: Web/API/CloseWatcher/close_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.CloseWatcher.close_event
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

A `close` event is fired at a {{domxref("CloseWatcher")}} object when a close request was received and only fired if the {{domxref("CloseWatcher.cancel_event", "cancel")}} event that preceded the `close` one was not canceled.

The `close` event handler is where the code to close the UI component should be called: this ensures that the component will be closed properly either from the platform-specific close signal or from a call to {{domxref("CloseWatcher.requestClose()")}}.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("close", (event) => { })

onclose = (event) => { }
```

## Event type

An {{domxref("Event")}}.

## Examples

### Using the `close` event

Use the `close` to listen for close requests.

```js
watcher.addEventListener("close", () => {
  // Close your UI component
  sidebar.hide();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
