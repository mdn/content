---
title: "CloseWatcher: close event"
short-title: close
slug: Web/API/CloseWatcher/close_event
page-type: web-api-event
browser-compat: api.CloseWatcher.close_event
status:
  - experimental
---

{{APIRef("HTML DOM")}} {{SeeCompatTable}}

A `close` event is fired at a {{domxref("CloseWatcher")}} object when a close request was received.

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
  // Dispose the watcher instance
  watcher.destroy();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
