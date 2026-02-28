---
title: "ManagedMediaSource: endstreaming event"
short-title: endstreaming
slug: Web/API/ManagedMediaSource/endstreaming_event
page-type: web-api-event
browser-compat: api.ManagedMediaSource.endstreaming_event
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`endstreaming`** event of the {{domxref("ManagedMediaSource")}} interface is fired when the {{domxref("ManagedMediaSource.streaming", "streaming")}} property changes from `true` to `false`. This indicates that the user agent has enough data buffered to ensure uninterrupted playback, and the application can stop fetching new media segments.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("endstreaming", (event) => {});

onendstreaming = (event) => {};
```

## Event type

A generic {{domxref("Event")}}.

## Examples

### Pausing fetches in response to endstreaming

This example creates a {{domxref("ManagedMediaSource")}}, attaches it to a video element, and uses the `startstreaming` and `endstreaming` events to control when media segments are fetched.

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

  let shouldFetch = false;

  source.addEventListener("sourceopen", () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    source.addEventListener("startstreaming", async () => {
      console.log("startstreaming — fetching media data");
      shouldFetch = true;
      const response = await fetch(videoUrl);
      const data = await response.arrayBuffer();
      if (shouldFetch) {
        sourceBuffer.appendBuffer(data);
      }
    });

    source.addEventListener("endstreaming", () => {
      console.log("endstreaming — enough data buffered");
      shouldFetch = false;
    });
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}} event
- {{domxref("ManagedMediaSource.streaming")}}
- {{domxref("ManagedMediaSource")}}
- {{domxref("MediaSource")}}
