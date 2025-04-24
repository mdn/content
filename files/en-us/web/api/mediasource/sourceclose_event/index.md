---
title: "MediaSource: sourceclose event"
short-title: sourceclose
slug: Web/API/MediaSource/sourceclose_event
page-type: web-api-event
browser-compat: api.MediaSource.sourceclose_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`sourceclose``** event is fired when a {{domxref("MediaSource")}} object's `readyState` changes to `open`.

## Syntax

```js-nolint
mediaSource.addEventListener('sourceclose', (event) => {
  // Handle the sourceclose event
});
```

## Event type

{{domxref("Event")}}

## Description

The `sourceclose` event is fired when the `readyState` attribute of a {{domxref("MediaSource")}} object transitions to the `"open"` state. This indicates that the `MediaSource` is ready to receive data from {{domxref("SourceBuffer")}} objects. This can occur either when the `MediaSource` object is first attached to a media element or when the `readyState` changes from `"ended"` back to `"open"`.

## Event handler

| Property  | Type           | Description                                              |
| --------- | -------------- | -------------------------------------------------------- |
| `onsourceclose` | `EventHandler` | The function to be called when the `sourceclose` event occurs. |

### Event handler syntax

```js-nolint
mediaSource.onsourceclose = (event) => {
  // Handle the sourceclose event
};
```

## Examples

### Handling the sourceclose event

This example sets up a {{domxref("MediaSource")}}, connects it to a video element, and listens for the `sourceclose` event. When the event fires, it adds a {{domxref("SourceBuffer")}} to handle the video data, fetches the data, appends it to the buffer, and finally revokes the object URL when the source ends.

```js-nolint
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceclose", (event) => {
  console.log("MediaSource sourceclose:", event);
  // Add source buffers and begin adding media data.
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');
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
