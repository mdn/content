---
title: "SourceBuffer: updatestart event"
short-title: updatestart
slug: Web/API/SourceBuffer/updatestart_event
page-type: web-api-event
browser-compat: api.SourceBuffer.updatestart_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`updatestart`** event signals the begining of an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation. The {{domxref("SourceBuffer.updating", "updating")}} attribute transitions from `false` to `true` when this event is fired.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("updatestart", (event) => { })

onupdatestart = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the updatestart event before appending data

This example demonstrates how to handle the `updatestart` event before an `appendBuffer()` operation.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );

  sourceBuffer.addEventListener("updatestart", (event) => {
    console.log("SourceBuffer updatestart:", event);
    // Perform setup, e.g., show a loading indicator.
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
