---
title: ManagedMediaSource
slug: Web/API/ManagedMediaSource
page-type: web-api-interface
browser-compat: api.ManagedMediaSource
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`ManagedMediaSource`** interface of the {{domxref("Media Source Extensions API", "Media Source Extensions API", "", "nocode")}} is a {{domxref("MediaSource")}} that actively manages its memory content. Unlike a regular `MediaSource`, the user agent can evict content from its {{domxref("ManagedSourceBuffer")}} objects at any time, for reasons such as memory or hardware limitations. This makes it suitable for power-efficient streaming scenarios where the user agent needs more control over buffered media data.

When {{domxref("MediaSource.addSourceBuffer", "addSourceBuffer()")}} is called on a `ManagedMediaSource`, it creates {{domxref("ManagedSourceBuffer")}} objects (instead of {{domxref("SourceBuffer")}} objects), which fire {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} events to notify the application when buffered ranges are modified by the user agent.

> [!NOTE]
> On Safari, `ManagedMediaSource` only activates when remote playback is explicitly disabled on the media element (by setting {{domxref("HTMLMediaElement.disableRemotePlayback")}} to `true`), or when an AirPlay source alternative is provided (for example, an HLS {{htmlelement("source")}} element). Without either of these, the {{domxref("MediaSource.sourceopen_event", "sourceopen")}} event will not fire.

{{InheritanceDiagram}}

## Constructor

- {{domxref("ManagedMediaSource.ManagedMediaSource", "ManagedMediaSource()")}}
  - : Creates and returns a new `ManagedMediaSource` object with no associated source buffers.

## Instance properties

_Also inherits properties from its parent interface, {{domxref("MediaSource")}}._

- {{domxref("ManagedMediaSource.streaming")}} {{ReadOnlyInline}}
  - : A boolean indicating whether the `ManagedMediaSource` object is currently streaming. When `true`, the application should actively fetch and append media data. When `false`, the application can stop fetching new data.

## Instance methods

_Inherits methods from its parent interface, {{domxref("MediaSource")}}._

## Events

_Also inherits events from its parent interface, {{domxref("MediaSource")}}._

- {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}}
  - : Fired when the `ManagedMediaSource`'s {{domxref("ManagedMediaSource.streaming", "streaming")}} property changes from `false` to `true`.
- {{domxref("ManagedMediaSource.endstreaming_event", "endstreaming")}}
  - : Fired when the `ManagedMediaSource`'s {{domxref("ManagedMediaSource.streaming", "streaming")}} property changes from `true` to `false`.

## Examples

### Setting up a managed media source

The following example sets up a `ManagedMediaSource`, connects it to a video element, and listens for the {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}} and {{domxref("ManagedMediaSource.endstreaming_event", "endstreaming")}} events to control when media data is fetched. {{domxref("ManagedSourceBuffer.bufferedchange_event", "bufferedchange")}} events are logged below the video.

```html
<video controls width="300" height="169"></video> <output id="log"></output>
```

```css hidden
body {
  font-family: system-ui;
}

video {
  display: block;
  margin-bottom: 1rem;
}

output {
  display: block;
  white-space: pre;
  height: 5rem;
  overflow: scroll;
  border: 1px solid #ccc;
  padding: 0.5rem;
}
```

```js
const output = document.querySelector("#log");
function log(msg) {
  output.textContent += msg + "\n";
  output.scrollTop = output.scrollHeight;
}

const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';
const video = document.querySelector("video");

if (!window.ManagedMediaSource?.isTypeSupported(mediaType)) {
  log("ManagedMediaSource is not supported in this browser.");
} else {
  const source = new ManagedMediaSource();
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);

  video.addEventListener("canplay", () => log("canplay — video is ready"));

  source.addEventListener("sourceopen", () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        log(
          `Buffered: ${event.addedRanges.start(i).toFixed(2)}s – ${event.addedRanges.end(i).toFixed(2)}s`,
        );
      }
    });

    source.addEventListener("startstreaming", async () => {
      log("startstreaming — fetching media data…");
      const response = await fetch(videoUrl);
      const data = await response.arrayBuffer();
      sourceBuffer.appendBuffer(data);
    });

    source.addEventListener("endstreaming", () => {
      log("endstreaming — enough data buffered");
    });
  });
}
```

{{EmbedLiveSample("Setting up a managed media source", "", "300px")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MediaSource")}}
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("BufferedChangeEvent")}}
- {{domxref("SourceBuffer")}}
