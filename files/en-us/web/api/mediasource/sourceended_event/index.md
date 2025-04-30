---
title: "MediaSource: sourceended event"
short-title: sourceended
slug: Web/API/MediaSource/sourceended_event
page-type: web-api-event
browser-compat: api.MediaSource.sourceended_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`sourceended`** event is fired when a {{domxref("MediaSource")}} object's {{domxref("MediaSource.readyState", "readyState")}} changes to `"ended"`. This indicates that the application has finished sending data to the `MediaSource`. When an application has finished appending all media data to the {{domxref("SourceBuffer")}} objects associated with a `MediaSource`, it calls the {{domxref("MediaSource.endOfStream()")}}  method on the `MediaSource`. This causes the {{domxref("MediaSource.readyState", "readyState")}} to transition to `"ended"` and triggers the `sourceended` event.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
mediaSource.addEventListener("sourceended", (event) => {})

onsourceended = (event) => {}
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the sourceopen event

This example demonstrates setting up a video element for playback and handling the `sourceended` event for proper resource management.  The code sets up a {{domxref("MediaSource")}}, initiates playback by fetching and buffering video data, and then uses the `sourceended` event to perform cleanup tasks like removing event listeners and notifying the user when playback is complete.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"'
  );

  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data);
       sourceBuffer.addEventListener("updateend", () => {
        mediaSource.endOfStream();
      });
    });
});

mediaSource.addEventListener("sourceended", (event) => {
  console.log("MediaSource sourceended:", event);
  URL.revokeObjectURL(video.src);
  // Perform cleanup

  // Remove event listeners from SourceBuffer and MediaSource
  sourceBuffer.removeEventListener("updateend", () => { });
  mediaSource.removeEventListener("sourceopen", () => {});

  // Notify user (e.g., display a "Playback finished" message)
  const messageElement = document.createElement('p');
  messageElement.textContent = "Playback finished.";
  document.body.appendChild(messageElement);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("MediaSource.endOfStream()")}}

