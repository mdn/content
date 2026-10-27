---
title: "MediaSource: sourceopen event"
short-title: sourceopen
slug: Web/API/MediaSource/sourceopen_event
page-type: web-api-event
browser-compat: api.MediaSource.sourceopen_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`sourceopen`** event is fired when a {{domxref("MediaSource")}} object's {{domxref("MediaSource.readyState", "readyState")}} changes to `"open"`.
This indicates that the `MediaSource` is ready to receive data from {{domxref("SourceBuffer")}} objects. This can occur either when the `MediaSource` object is first attached to a media element or when the {{domxref("MediaSource.readyState", "readyState")}} changes from `"ended"` back to `"open"`.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("sourceopen", (event) => {});
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onsourceopen = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Handling the sourceopen event

This example sets up a {{domxref("MediaSource")}}, connects it to a video element, and listens for the `sourceopen` event. When the event fires, it adds a {{domxref("SourceBuffer")}} to handle the video data, fetches the data, appends it to the buffer, and finally revokes the object URL when the source ends.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", (event) => {
  console.log("MediaSource sourceopen:", event);
  // Add source buffers and begin adding media data.
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );
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
