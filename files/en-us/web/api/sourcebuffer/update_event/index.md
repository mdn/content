---
title: "SourceBuffer: update event"
short-title: update
slug: Web/API/SourceBuffer/update_event
page-type: web-api-event
browser-compat: api.SourceBuffer.update_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`update`** event signals the successful completion of an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation. The {{domxref("SourceBuffer.updating", "updating")}} attribute transitions from `true` to `false`. This event is fired before the {{domxref("SourceBuffer.updateend_event", "updateend")}} event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("update", (event) => { })

onupdate = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the update event after appending data

This example demonstrates how to handle the `update` event after a successful `appendBuffer()` operation.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );

  sourceBuffer.addEventListener("update", (event) => {
    console.log("SourceBuffer update:", event);
    // Continue with next action, e.g., append more data, change playback rate.
  });

  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data);
    });
});

mediaSource.addEventListener("sourceended", () => {
  URL.revokeObjectURL(video.src);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer.appendBuffer()")}}
- {{domxref("SourceBuffer.remove()")}}
