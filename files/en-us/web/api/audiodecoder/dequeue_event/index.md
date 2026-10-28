---
title: "AudioDecoder: dequeue event"
short-title: dequeue
slug: Web/API/AudioDecoder/dequeue_event
page-type: web-api-event
browser-compat: api.AudioDecoder.dequeue_event
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`dequeue`** event of the {{domxref("AudioDecoder")}} interface fires to signal a decrease in {{domxref("AudioDecoder.decodeQueueSize")}}.

This eliminates the need for developers to use a {{domxref("Window.setTimeout", "setTimeout()")}} poll to determine when the queue has decreased, and more work should be queued up.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("dequeue", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
ondequeue = (event) => { }
```

## Example

```js
audioDecoder.addEventListener("dequeue", (event) => {
  // Queue up more decoding work
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
