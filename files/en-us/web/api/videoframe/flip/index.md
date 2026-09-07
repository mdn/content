---
title: "VideoFrame: flip property"
short-title: flip
slug: Web/API/VideoFrame/flip
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.VideoFrame.flip
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

The **`flip`** property of the {{domxref("VideoFrame")}} interface returns a boolean that indicates whether the `VideoFrame` is horizontally mirrored.

## Value

A boolean. If `true`, horizontal mirroring is applied. Defaults to `false`.

## Examples

### Detecting when a camera video is flipped

Given a stream of video frames from a camera, obtained using a {{domxref("MediaStreamTrackProcessor")}}, you can check the `flip` property on the `VideoFrame` objects to see whether or not the frames are flipped.

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const track = stream.getTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor(track);

const reader = trackProcessor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;
  const frameFromCamera = result.value;
  // Returns `true` if the frame is horizontally flipped
  console.log(frameFromCamera.flip);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
