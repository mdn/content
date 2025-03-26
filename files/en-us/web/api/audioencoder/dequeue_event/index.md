---
title: "AudioEncoder: dequeue event"
short-title: dequeue
slug: Web/API/AudioEncoder/dequeue_event
page-type: web-api-event
browser-compat: api.AudioEncoder.dequeue_event
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`dequeue`** event of the {{domxref("AudioEncoder")}} interface fires to signal a decrease in {{domxref("AudioEncoder.encodeQueueSize")}}.

This eliminates the need for developers to use a {{domxref("Window.setTimeout", "setTimeout()")}} poll to determine when the queue has decreased, and more work should be queued up.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Example

```js
audioEncoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
