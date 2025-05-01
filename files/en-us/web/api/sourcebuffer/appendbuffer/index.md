---
title: "SourceBuffer: appendBuffer() method"
short-title: appendBuffer()
slug: Web/API/SourceBuffer/appendBuffer
page-type: web-api-instance-method
browser-compat: api.SourceBuffer.appendBuffer
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`appendBuffer()`** method of the
{{domxref("SourceBuffer")}} interface appends media segment data from an
{{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object
to the `SourceBuffer`.

## Syntax

```js-nolint
appendBuffer(source)
```

### Parameters

- `source`
  - : Either an {{jsxref("ArrayBuffer")}}, a {{jsxref("TypedArray")}} or a {{jsxref("DataView")}} object
    that contains the media segment data you want to add to the `SourceBuffer`.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{domxref("DOMException")}} `QuotaExceededError`
  - : The buffer is full, and no more data can be appended. This might occur if the `SourceBuffer` has reached a browser-defined limit on the amount of buffered data.
- {{domxref("DOMException")}} `InvalidStateError`
  - : Thrown in one of the following cases:
    - The `SourceBuffer` object's `updating` attribute is `true`. You must wait for any previous append, update, or remove operations to complete (indicated by the `updateend` event) before calling `appendBuffer()` again.
    - The `SourceBuffer` has been removed from the `sourceBuffers` attribute of the parent media source.
    - The `HTMLMediaElement`'s `error` attribute is not null.

Additionally, errors can occur after the `updatestart` has been fired and the `appendBuffer()` method has returned: for example, because the buffer contained bytes that were incorrectly formatted. In this situation the `error` event will be fired on this `SourceBuffer` instance.

## Examples

### Basic usage

This example demonstrates adding video data to a video element for playback. The `MediaSource` provides the video data, and the `SourceBuffer` adds that data. The example fetches video segment data, appends it to the `SourceBuffer`, and ends the stream when finished.

```js
const mediaSource = new MediaSource();
const video = document.querySelector("video");
video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
  );

  fetch("/my-video-segment.mp4")
    .then((response) => response.arrayBuffer())
    .then((buffer) => {
      sourceBuffer.appendBuffer(buffer);
      sourceBuffer.addEventListener("updateend", () => {
        if (mediaSource.readyState === "open") {
          mediaSource.endOfStream();
        }
      });
    });
});
```

### Handling errors

This example demonstrates how to handle errors that may occur when calling `appendBuffer()`.

It calls `appendBuffer()` inside a [`try...catch`](/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) block to catch and handle the exceptions that the method synchronously throws. It also listens for the `error` event to handle errors that occur after `appendBuffer()` has returned, while the buffer is being asynchronously updated.

```js
sourceBuffer.addEventListener("error", (e) => {
  console.error("Error appending buffer:", e);
  // Handle the error appropriately, e.g., show a message to the user,
  // try a different source, or stop playback.
});

try {
  sourceBuffer.appendBuffer(data);
} catch (e) {
  if (e instanceof InvalidStateError) {
    console.error(
      "InvalidStateError: The SourceBuffer is in an invalid state.",
    );
  } else if (e instanceof QuotaExceededError) {
    console.error("QuotaExceededError: The buffer is full.");
  } else {
    console.error("An unexpected error occurred:", e);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
