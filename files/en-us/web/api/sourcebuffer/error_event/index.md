---
title: "SourceBuffer: error event"
short-title: error
slug: Web/API/SourceBuffer/error_event
page-type: web-api-event
browser-compat: api.SourceBuffer.error_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`error`** event is fired when an error occurs during the processing of an {{domxref("SourceBuffer.appendBuffer()")}} or {{domxref("SourceBuffer.remove()")}} operation.

## Syntax

```js-nolint
sourceBuffer.addEventListener("error", (event) => {
  // Handle the error
});
```

## Event type

{{domxref("Event")}}

## Description

The `error` event is fired by a {{domxref("SourceBuffer")}} object to signal that an error occurred while attempting to add or remove media data. This may happen, for example, if the data being appended is not in the expected format, the `SourceBuffer` is in an invalid state, or the user agent is unable to process the data. The `updating` attribute transitions from true to false.

## Event handler

| Property | Type         | Description                                      |
|----------|--------------|--------------------------------------------------|
| `onerror`  | `EventHandler` | The function to be called when the `error` event occurs. |

### Event handler syntax

```js-nolint
sourceBuffer.onerror = (event) => {
  // Handle the error
};
```

## Examples

### Handling errors during `appendBuffer()`

This example demonstrates how to handle errors that occur during the `appendBuffer()` operation.

```html-nolint
<video id="myVideo"></video>

<script>
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');

  sourceBuffer.onerror = (event) => {
    console.error("SourceBuffer error:", event);
    // Handle the error (e.g., display a user-friendly message, try a different source)
  };

  fetch("invalid-video-data.mp4") // Simulate fetching invalid data
    .then((response) => response.arrayBuffer())
    .then((data) => {
      sourceBuffer.appendBuffer(data); // This will likely cause an error
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
});

mediaSource.addEventListener("sourceended", () => {
  URL.revokeObjectURL(video.src);
});
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}