---
title: "ManagedMediaSource: streaming property"
short-title: streaming
slug: Web/API/ManagedMediaSource/streaming
page-type: web-api-instance-property
browser-compat: api.ManagedMediaSource.streaming
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`streaming`** read-only property of the {{domxref("ManagedMediaSource")}} interface is a boolean indicating whether the application should actively fetch and append media data. When `true`, the user agent needs more data to ensure uninterrupted playback. When `false`, the user agent has enough data buffered and the application can stop fetching new segments.

The value of this property is updated by the user agent's monitoring algorithm. When it changes, the corresponding {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}} or {{domxref("ManagedMediaSource.endstreaming_event", "endstreaming")}} event is fired.

## Value

A boolean. Initially `false`.

## Examples

### Checking the streaming state

This example creates a {{domxref("ManagedMediaSource")}}, attaches it to a video element, and logs the value of `streaming` whenever it changes.

```js
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const video = document.createElement("video");
  const source = new ManagedMediaSource();

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  console.log(source.streaming); // false

  source.addEventListener("startstreaming", () => {
    console.log(source.streaming); // true — start fetching data
  });

  source.addEventListener("endstreaming", () => {
    console.log(source.streaming); // false — stop fetching data
  });

  source.addEventListener("sourceopen", () => {
    source.addSourceBuffer(mediaType);
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ManagedMediaSource.startstreaming_event", "startstreaming")}} event
- {{domxref("ManagedMediaSource.endstreaming_event", "endstreaming")}} event
- {{domxref("ManagedMediaSource")}}
- {{domxref("MediaSource")}}
