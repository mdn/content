---
title: "BufferedChangeEvent: addedRanges property"
short-title: addedRanges
slug: Web/API/BufferedChangeEvent/addedRanges
page-type: web-api-instance-property
browser-compat: api.BufferedChangeEvent.addedRanges
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`addedRanges`** read-only property of the {{domxref("BufferedChangeEvent")}} interface returns a {{domxref("TimeRanges")}} object representing the time ranges that were added to the {{domxref("ManagedSourceBuffer")}}'s buffer. These are the ranges added between the last `updatestart` and `updateend` events, during the most recent run of the coded frame processing algorithm.

## Value

A {{domxref("TimeRanges")}} object.

## Examples

### Logging added ranges on buffer change

This example creates a {{domxref("ManagedMediaSource")}}, attaches it to a video element, fetches a fragmented MP4 file, and logs any time ranges added to the buffer.

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
      const added = event.addedRanges;
      for (let i = 0; i < added.length; i++) {
        console.log(`Added range: ${added.start(i)}s - ${added.end(i)}s`);
      }
    });

    const response = await fetch(videoUrl);
    const data = await response.arrayBuffer();
    sourceBuffer.appendBuffer(data);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("BufferedChangeEvent.removedRanges")}}
- {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} event
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("TimeRanges")}}
