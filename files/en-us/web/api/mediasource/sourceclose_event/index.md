---
title: "MediaSource: sourceclose event"
short-title: sourceclose
slug: Web/API/MediaSource/sourceclose_event
page-type: web-api-event
browser-compat: api.MediaSource.sourceclose_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`sourceclose`** event is fired when a {{domxref("MediaSource")}} object's {{domxref("MediaSource.readyState", "readyState")}} changes to `"closed"`. This indicates that the `MediaSource` has been detached from the media element.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("sourceclose", (event) => { })

onsourceclose = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the sourceclose event

This example demonstrates detaching a media element from a `MediaSource` and handling the `sourceclose` event for proper resource management. The code sets up a {{domxref("MediaSource")}}, attaches it to a video element, and listens for the `sourceclose event`. When the event fires, it performs cleanup tasks.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');
  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data);
    });
});

function detachMediaSource() {
  video.src = null; // Detach the MediaSource
}

mediaSource.addEventListener("sourceclose", (event) => {
  console.log("MediaSource sourceclose:", event);
  // Perform cleanup tasks here, e.g., release resources, update UI
  URL.revokeObjectURL(video.src); // Clean up the object URL
});

// Call detachMediaSource() when appropriate, e.g., on a button click
document
  .getElementById("detachButton")
  .addEventListener("click", detachMediaSource);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
