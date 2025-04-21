---
title: "SourceBuffer: updatestart event"
short-title: updatestart
slug: Web/API/SourceBuffer/updatestart_event
page-type: web-api-event
browser-compat: api.SourceBuffer.updatestart_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`updatestart`** event is fired when the {{domxref("SourceBuffer")}}'s append or remove operation has begun.

## Syntax

```js-nolint
sourceBuffer.addEventListener('updatestart', (event) => {
  // Handle the updatestart event
});
```

## Event type

{{domxref("Event")}}

## Description

The `updatestart` event is fired by a `SourceBuffer` object to signal the begining of an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation. The `updating` attribute transitions from `false` to `true` when this event is fired.

## Event handler

| Property | Type         | Description                                      |
|----------|--------------|--------------------------------------------------|
| `onupdatestart`  | `EventHandler` | The function to be called when the `updatestart` event occurs. |

### Event handler syntax

```js-nolint
sourceBuffer.onupdatestart = (event) => {
  // Handle the updatestart event
};
```

## Examples

### Handling the updatestart event before appending data

This example demonstrates how to handle the `updatestart` event before an `appendBuffer()` operation.

```js-nolint
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');

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