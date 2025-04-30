---
title: "SourceBuffer: abort event"
short-title: abort
slug: Web/API/SourceBuffer/abort_event
page-type: web-api-event
browser-compat: api.SourceBuffer.abort_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`abort`** event is fired when the buffer is aborted, such as when the {{domxref("SourceBuffer.abort()")}} method is called. The {{domxref("SourceBuffer.updating", "updating")}} attribute is set to `false`.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Aborting an append operation

This example demonstrates how to abort an append operation and handle the `abort` event.

```js
const video = document.getElementById("myVideo");
const mediaSource = new MediaSource();

video.src = URL.createObjectURL(mediaSource);

mediaSource.addEventListener("sourceopen", () => {
  const sourceBuffer = mediaSource.addSourceBuffer(
    'video/mp4; codecs="avc1.42E01E"',
  );
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
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer.abort()")}}
