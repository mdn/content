---
title: "VideoDecoder: dequeue event"
short-title: dequeue
slug: Web/API/VideoDecoder/dequeue_event
page-type: web-api-event
browser-compat: api.VideoDecoder.dequeue_event
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}

The **`dequeue`** event of the {{domxref("VideoDecoder")}} interface fires to signal a decrease in {{domxref("VideoDecoder.decodeQueueSize")}}.

This eliminates the need for developers to use a {{domxref("setTimeout", "setTimeout()")}} poll to determine when the queue has decreased, and more work should be queued up.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Example

```js
videoDecoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
