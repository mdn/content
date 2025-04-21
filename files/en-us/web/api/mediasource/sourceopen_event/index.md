---
title: "MediaSource: sourceopen event"
short-title: sourceopen
slug: Web/API/MediaSource/sourceopen_event
page-type: web-api-event
browser-compat: api.MediaSource.sourceopen_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`sourceopen``** event is fired when a {{domxref("MediaSource")}} object's `readyState` changes to `open`.

## Syntax

```js-nolint
mediaSource.addEventListener('sourceopen', (event) => {
  // Handle the sourceopen event
});
```

## Event type

{{domxref("Event")}}

## Description

The `sourceopen` event is fired when the `readyState` attribute of a {{domxref("MediaSource")}} object transitions to the `"open"` state. This indicates that the `MediaSource` is ready to receive data from {{domxref("SourceBuffer")}} objects. This can occur either when the `MediaSource` object is first attached to a media element or when the `readyState` changes from `"ended"` back to `"open"`.

## Event handler

| Property  | Type           | Description                                              |
| --------- | -------------- | -------------------------------------------------------- |
| `onsourceopen` | `EventHandler` | The function to be called when the `sourceopen` event occurs. |

### Event handler syntax

```js-nolint
mediaSource.onsourceopen = (event) => {
  // Handle the sourceopen event
};
```

## Examples

### Handling the sourceopen event

This example sets up a {{domxref("MediaSource")}}, connects it to a video element, and listens for the `sourceopen` event. When the event fires, it adds a {{domxref("SourceBuffer")}} to handle the video data, fetches the data, appends it to the buffer, and finally revokes the object URL when the source ends.

```js-nolint
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  console.log("MediaSource sourceopen:", event);
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
