---
title: "BufferedChangeEvent: removedRanges property"
short-title: removedRanges
slug: Web/API/BufferedChangeEvent/removedRanges
page-type: web-api-instance-property
browser-compat: api.BufferedChangeEvent.removedRanges
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`removedRanges`** read-only property of the {{domxref("BufferedChangeEvent")}} interface returns a {{domxref("TimeRanges")}} object representing the time ranges that were removed from the {{domxref("ManagedSourceBuffer")}}'s buffer. These are the ranges removed between the last `updatestart` and `updateend` events, during the most recent run of the coded frame removal or coded frame eviction algorithm, or as a consequence of the user agent running the memory cleanup algorithm.

## Value

A {{domxref("TimeRanges")}} object.

## Examples

### Logging removed ranges on buffer change

This example creates a {{domxref("ManagedMediaSource")}}, attaches it to a video element, fetches a fragmented MP4 file, and then removes a portion of the buffered data. The `bufferedchange` event handler logs any removed time ranges.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const video = document.createElement("video");
  const source = new ManagedMediaSource();

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  source.addEventListener("sourceopen", async () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      const removed = event.removedRanges;
      for (let i = 0; i < removed.length; i++) {
        console.log(`Removed range: ${removed.start(i)}s - ${removed.end(i)}s`);
      }
    });

    const response = await fetch(videoUrl);
    const data = await response.arrayBuffer();
    sourceBuffer.appendBuffer(data);

    // Once appended, remove the first 5 seconds to trigger removedRanges
    sourceBuffer.addEventListener(
      "updateend",
      () => {
        sourceBuffer.remove(0, 5);
      },
      { once: true },
    );
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BufferedChangeEvent.addedRanges")}}
- {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} event
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("TimeRanges")}}
