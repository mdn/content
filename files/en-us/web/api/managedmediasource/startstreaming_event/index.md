---
title: "ManagedMediaSource: startstreaming event"
short-title: startstreaming
slug: Web/API/ManagedMediaSource/startstreaming_event
page-type: web-api-event
browser-compat: api.ManagedMediaSource.startstreaming_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`startstreaming`** event of the {{domxref("ManagedMediaSource")}} interface is fired when the {{domxref("ManagedMediaSource.streaming", "streaming")}} property changes from `false` to `true`. This indicates that the user agent needs more data to ensure uninterrupted playback, and the application should begin fetching and appending media segments.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("startstreaming", (event) => {});

onstartstreaming = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Fetching data in response to startstreaming

This example creates a {{domxref("ManagedMediaSource")}}, attaches it to a video element, and uses the `startstreaming` event to begin fetching and appending media data.

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

  source.addEventListener("sourceopen", () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    source.addEventListener("startstreaming", async () => {
      console.log("startstreaming — fetching media data");
      const response = await fetch(videoUrl);
      const data = await response.arrayBuffer();
      sourceBuffer.appendBuffer(data);
    });
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ManagedMediaSource.endstreaming_event", "endstreaming")}} event
- {{domxref("ManagedMediaSource.streaming")}}
- {{domxref("ManagedMediaSource")}}
- {{domxref("MediaSource")}}
