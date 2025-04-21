---
title: "SourceBuffer: updateend event"
short-title: updateend
slug: Web/API/SourceBuffer/updateend_event
page-type: web-api-event
browser-compat: api.SourceBuffer.updateend_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`updateend`** event is fired when the {{domxref("SourceBuffer")}}'s append or remove operation has completed.

## Syntax

```js-nolint
sourceBuffer.addEventListener('updateend', (event) => {
  // Handle the updateend event
});
```

## Event type

{{domxref("Event")}}

## Description

The `updateend` event is fired by a `SourceBuffer` object to signal the completion of an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation. The `updating` attribute transitions from `true` to `false`. This event is fired after the `update` event.

## Event handler

| Property      | Type           | Description                                                  |
| ------------- | -------------- | ------------------------------------------------------------ |
| `onupdateend` | `EventHandler` | The function to be called when the `updateend` event occurs. |

### Event handler syntax

```js-nolint
sourceBuffer.onupdateend = (event) => {
  // Handle the updateend event
};
```

## Examples

### Handling the updateend event after appending data

This example demonstrates how to handle the `updateend` event after a successful `appendBuffer()` operation.

```js-nolint
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');

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
