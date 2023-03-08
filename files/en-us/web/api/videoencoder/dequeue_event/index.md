---
title: "VideoEncoder: dequeue event"
slug: Web/API/VideoEncoder/dequeue_event
page-type: web-api-event
browser-compat: api.VideoEncoder.dequeue_event
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}

The **`dequeue`** event of the {{domxref("VideoEncoder")}} interface fires to signal a decrease in {{domxref("VideoEncoder.encodeQueueSize")}}.

This eliminates the need for developers to use a {{domxref("setTimeout", "setTimeout()")}} poll to determine when the queue has decreased, and more work should be queued up.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("dequeue", (event) => {});

ondequeue = (event) => {};
```

## Example

```js
videoEncoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
