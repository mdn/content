---
title: "SourceBuffer: updateend event"
short-title: updateend
slug: Web/API/SourceBuffer/updateend_event
page-type: web-api-event
browser-compat: api.SourceBuffer.updateend_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`updateend`** event signals the (not necessarily successful) completion of an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation. The {{domxref("SourceBuffer.updating", "updating")}} attribute transitions from `true` to `false`. This event is fired after the {{domxref("SourceBuffer.update_event", "update")}}, {{domxref("SourceBuffer.error_event", "error")}}, or {{domxref("SourceBuffer.abort_event", "abort")}} events.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("updateend", (event) => { })

onupdateend = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the updateend event after appending data

This example demonstrates how to handle the `updateend` event after a successful `appendBuffer()` operation.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );

  sourceBuffer.addEventListener("updateend", (event) => {
    console.log("SourceBuffer updateend:", event);
    // Perform any cleanup or finalization steps.
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
