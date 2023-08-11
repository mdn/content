---
title: "AudioDecoder: dequeue event"
short-title: dequeue
slug: Web/API/AudioDecoder/dequeue_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.AudioDecoder.dequeue_event
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{SeeCompatTable}}

The **`dequeue`** event of the {{domxref("AudioDecoder")}} interface fires to signal a decrease in {{domxref("AudioDecoder.decodeQueueSize")}}.

This eliminates the need for developers to use a {{domxref("setTimeout", "setTimeout()")}} poll to determine when the queue has decreased, and more work should be queued up.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
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
