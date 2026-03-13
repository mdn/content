---
title: ManagedMediaSource
slug: Web/API/ManagedMediaSource
page-type: web-api-interface
status:
  - experimental
browser-compat: api.ManagedMediaSource
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

The **`ManagedMediaSource`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} is a {{domxref("MediaSource")}} that actively manages its memory content. Unlike a regular `MediaSource`, the user agent can evict content from its {{domxref("ManagedSourceBuffer")}} objects at any time, for reasons such as memory or hardware limitations. This makes it suitable for power-efficient streaming scenarios where the user agent needs more control over buffered media data.

When {{domxref("MediaSource.addSourceBuffer", "addSourceBuffer()")}} is called on a `ManagedMediaSource`, it creates {{domxref("ManagedSourceBuffer")}} objects (instead of {{domxref("SourceBuffer")}} objects), which fire {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} events to notify the application when buffered ranges are modified by the user agent.

> [!NOTE]
> On Safari, `ManagedMediaSource` only activates when remote playback is explicitly disabled on the media element (by setting {{domxref("HTMLMediaElement.disableRemotePlayback")}} to `true`), or when an AirPlay source alternative is provided (for example, an HLS {{htmlelement("source")}} element). Without either of these, the {{domxref("MediaSource.sourceopen_event", "sourceopen")}} event will not fire.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ManagedMediaSource.ManagedMediaSource", "ManagedMediaSource()")}} {{experimental_inline}}
  - : Creates and returns a new `ManagedMediaSource` object instance with no associated source buffers.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("MediaSource")}}._

- {{domxref("ManagedMediaSource.streaming")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A boolean indicating whether the `ManagedMediaSource` object is currently streaming. When `true`, the application should actively fetch and append media data. When `false`, the application can stop fetching new data.

## Instance methods

_Inherits methods from its parent interface, {{domxref("MediaSource")}}._

## Events

_Also inherits events from its parent interface, {{domxref("MediaSource")}}._

- {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}} {{experimental_inline}}
  - : Fired when the `ManagedMediaSource`'s {{domxref("ManagedMediaSource.streaming", "streaming")}} property changes from `false` to `true`, meaning the media source has started streaming.
- {{domxref("ManagedMediaSource.endstreaming_event", "endstreaming")}} {{experimental_inline}}
  - : Fired when the `ManagedMediaSource`'s {{domxref("ManagedMediaSource.streaming", "streaming")}} property changes from `true` to `false`, meaning the media source has stopped streaming.

## Examples

### Setting up a managed media source

The following example sets up a `ManagedMediaSource`, connects it to a {{htmlelement("video")}} element, and listens for the {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}} and {{domxref("ManagedMediaSource.endstreaming_event", "endstreaming")}} events to control when media data is fetched. {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} events are logged below the video.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';
const video = document.querySelector("video");

if (!window.ManagedMediaSource?.isTypeSupported(mediaType)) {
  console.log("ManagedMediaSource is not supported in this browser.");
} else {
  const source = new ManagedMediaSource();
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);

  source.addEventListener("sourceopen", () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Buffered: ${event.addedRanges.start(i).toFixed(2)}s – ${event.addedRanges.end(i).toFixed(2)}s`,
        );
      }
    });

    source.addEventListener("startstreaming", async () => {
      console.log("startstreaming — fetching media data…");
      const response = await fetch(videoUrl);
      const data = await response.arrayBuffer();
      sourceBuffer.appendBuffer(data);
    });

    source.addEventListener("endstreaming", () => {
      console.log("endstreaming — enough data buffered");
    });
  });
}
```

{{EmbedGHLiveSample("dom-examples/media-source-extensions/managed-media-source/", '100%', 470)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("BufferedChangeEvent")}}
- {{domxref("SourceBuffer")}}
