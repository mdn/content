---
title: "SourceBuffer: abort event"
short-title: abort
slug: Web/API/SourceBuffer/abort_event
page-type: web-api-event
browser-compat: api.SourceBuffer.abort_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`abort`** event is fired when the {{domxref("SourceBuffer.abort()")}} method is called on a {{domxref("SourceBuffer")}} object.

## Syntax

```js-nolint
sourceBuffer.addEventListener('abort', (event) => {
  // Handle the abort event
});
```

## Event type

{{domxref("Event")}}

## Description

The `abort` event is fired when the {{domxref("SourceBuffer.abort()")}} method is called on a {{domxref("SourceBuffer")}} object. This typically occurs when an ongoing append operation is terminated. When an abort event is fired, the `SourceBuffer`'s `updating` attribute is also set to `false`.

## Event handler

| Property | Type         | Description                                      |
|----------|--------------|--------------------------------------------------|
| `onabort`  | `EventHandler` | The function to be called when the `abort` event occurs. |

### Event handler syntax

```js-nolint
sourceBuffer.onabort = (event) => {
  // Handle the abort event
};
```

## Examples

### Aborting an append operation

This example demonstrates how to abort an append operation and handle the `abort` event.

```html-nolint
<video id="myVideo"></video>

<script>
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer('video/mp4; codecs="avc1.42E01E"');
  let fetchingData = true;

  sourceBuffer.addEventListener("abort", (event) => {
    console.log("SourceBuffer abort:", event);
    fetchingData = false;
    // Handle the abort event, e.g., display a message, try to re-fetch.
  });

  fetch("video-data.mp4")
    .then((response) => response.arrayBuffer())
    .then((data) => {
      if (fetchingData) {
        sourceBuffer.appendBuffer(data);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });

  // Abort the append operation after 1 second
  setTimeout(() => {
    sourceBuffer.abort();
  }, 1000);
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