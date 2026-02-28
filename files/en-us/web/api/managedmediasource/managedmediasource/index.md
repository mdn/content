---
title: "ManagedMediaSource: ManagedMediaSource() constructor"
short-title: ManagedMediaSource()
slug: Web/API/ManagedMediaSource/ManagedMediaSource
page-type: web-api-constructor
browser-compat: api.ManagedMediaSource.ManagedMediaSource
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`ManagedMediaSource()`** constructor of the {{domxref("ManagedMediaSource")}} interface constructs and returns a new `ManagedMediaSource` object with no associated source buffers.

## Syntax

```js-nolint
new ManagedMediaSource()
```

### Parameters

None.

### Return value

A new {{domxref("ManagedMediaSource")}} object.

## Examples

### Creating a ManagedMediaSource and attaching it to a video element

The following example creates a new `ManagedMediaSource`, attaches it to a video element, and uses the {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}} event to begin fetching media data.

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

- {{domxref("ManagedMediaSource")}}
- {{domxref("ManagedSourceBuffer")}}
- {{domxref("MediaSource.MediaSource", "MediaSource()")}}
