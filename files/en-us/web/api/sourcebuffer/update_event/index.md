---
title: "SourceBuffer: update event"
short-title: update
slug: Web/API/SourceBuffer/update_event
page-type: web-api-event
browser-compat: api.SourceBuffer.update_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`update`** event is fired when the {{domxref("SourceBuffer")}}'s append or remove operation has successfully completed.

## Syntax

```js-nolint
sourceBuffer.addEventListener('update', (event) => {
  // Handle the update event
});
```

## Event type

{{domxref("Event")}}

## Description

The `update` event is fired by a `SourceBuffer` object to signal the successful completion of an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation. The `updating` attribute transitions from `true` to `false`. This event is fired before the `updateend` event.

## Event handler

| Property   | Type           | Description                                               |
| ---------- | -------------- | --------------------------------------------------------- |
| `onupdate` | `EventHandler` | The function to be called when the `update` event occurs. |

### Event handler syntax

```js-nolint
sourceBuffer.onupdate = (event) => {
  // Handle the update event
};
```

## Examples

### Handling the update event after appending data

This example demonstrates how to handle the `update` event after a successful `appendBuffer()` operation.

```js-nolint
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');

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