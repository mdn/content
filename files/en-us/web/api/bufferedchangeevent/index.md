---
title: BufferedChangeEvent
slug: Web/API/BufferedChangeEvent
page-type: web-api-interface
browser-compat: api.BufferedChangeEvent
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`BufferedChangeEvent`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} represents the event object for the {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} event fired on a {{domxref("ManagedSourceBuffer")}}. This event is fired whenever the buffered ranges of the `ManagedSourceBuffer` change, for example as a result of {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}}, {{domxref("SourceBuffer.remove", "remove()")}}, or {{domxref("MediaSource.endOfStream", "endOfStream()")}} calls, or when the user agent runs the memory cleanup algorithm.

{{InheritanceDiagram}}

## Constructor

- {{domxref("BufferedChangeEvent.BufferedChangeEvent", "BufferedChangeEvent()")}}
  - : Creates and returns a new `BufferedChangeEvent` object.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("BufferedChangeEvent.addedRanges")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("TimeRanges")}} object representing the time ranges that were added to the {{domxref("ManagedSourceBuffer")}}'s buffer.
- {{domxref("BufferedChangeEvent.removedRanges")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("TimeRanges")}} object representing the time ranges that were removed from the {{domxref("ManagedSourceBuffer")}}'s buffer.

## Examples

### Handling buffered range changes

This example creates a {{domxref("ManagedMediaSource")}}, attaches it to a video element, fetches a fragmented MP4 file, and listens for the `bufferedchange` event. When the event fires, it logs the added time ranges.

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
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Added range: ${event.addedRanges.start(i)} - ${event.addedRanges.end(i)}`,
        );
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

- {{domxref("ManagedMediaSource")}}
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
