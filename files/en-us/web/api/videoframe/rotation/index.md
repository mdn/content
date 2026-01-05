---
title: "VideoFrame: rotation property"
short-title: rotation
slug: Web/API/VideoFrame/rotation
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.VideoFrame.rotation
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

The **`rotation`** property of the {{domxref("VideoFrame")}} interface returns the rotation of the video frame.

## Value

An integer representing the rotation (0, 90, 180, or 270) in degrees clockwise. Defaults to `0`. Arbitrary numbers (including negatives) are rounded to the next quarter turn.

## Examples

### Detecting when a camera video is rotated

Given a stream of video frames from a camera, obtained using a {{domxref("MediaStreamTrackProcessor")}}, you can check the `rotation` property on the `VideoFrame` objects to see whether or not the frames are rotated.

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const track = stream.getTracks()[0];

const trackProcessor = new MediaStreamTrackProcessor(track);

const reader = trackProcessor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;
  const frameFromCamera = result.value;
  // Returns 0, 90, 180, or 270 indicating the frame's rotation
  console.log(frameFromCamera.rotation);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
