---
title: ManagedSourceBuffer
slug: Web/API/ManagedSourceBuffer
page-type: web-api-interface
browser-compat: api.ManagedSourceBuffer
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`ManagedSourceBuffer`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} is a {{domxref("SourceBuffer")}} that is created by a {{domxref("ManagedMediaSource")}} when {{domxref("MediaSource.addSourceBuffer", "addSourceBuffer()")}} is called. It inherits all the properties and methods of `SourceBuffer`, and additionally fires a {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} event whenever the buffered ranges change — including when the user agent evicts content as part of its memory cleanup algorithm.

Applications should listen for the `bufferedchange` event to track changes to buffered data, since a `ManagedMediaSource` may evict content at any time for reasons such as memory or hardware limitations.

{{InheritanceDiagram}}

## Instance properties

_Inherits properties from its parent interface, {{domxref("SourceBuffer")}}._

## Instance methods

_Inherits methods from its parent interface, {{domxref("SourceBuffer")}}._

## Events

_Also inherits events from its parent interface, {{domxref("SourceBuffer")}}._

- {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}}
  - : Fired when the `ManagedSourceBuffer`'s buffered range changes, following a call to {{domxref("SourceBuffer.appendBuffer", "appendBuffer()")}}, {{domxref("SourceBuffer.remove", "remove()")}}, {{domxref("MediaSource.endOfStream", "endOfStream()")}}, or as a consequence of the user agent running the memory cleanup algorithm.

## Examples

### Listening for buffered range changes

This example sets up a {{domxref("ManagedMediaSource")}}, adds a `ManagedSourceBuffer`, fetches a fragmented MP4 file, and listens for the `bufferedchange` event to log any changes to the buffered ranges.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const source = new ManagedMediaSource();
  const video = document.createElement("video");

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  source.addEventListener("sourceopen", async () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Added: ${event.addedRanges.start(i)}s - ${event.addedRanges.end(i)}s`,
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
- {{domxref("BufferedChangeEvent")}}
- {{domxref("SourceBuffer")}}
- {{domxref("MediaSource")}}
