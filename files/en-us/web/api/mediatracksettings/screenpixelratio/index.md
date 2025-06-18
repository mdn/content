---
title: "MediaTrackSettings: screenPixelRatio property"
short-title: screenPixelRatio
slug: Web/API/MediaTrackSettings/screenPixelRatio
page-type: web-api-instance-property
browser-compat: api.MediaTrackSettings.screenPixelRatio
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's **`screenPixelRatio`** property is a double-precision floating point value indicating the ratio of the size of a CSS pixel on the capturing screen by the vertical size of a pixel on the captured display surface. It cannot be used as a constraint or capability.

This property allows applications using the [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API) to save resources by sending the video of a screen capture using their logical, or device independent, resolution.

## Value

A double-precision floating-point number indicating the ratio of the size of a CSS pixel on the capturing screen by the vertical size of a pixel on the captured display surface.

Specifically, this is calculated by dividing the size of a {{glossary("CSS pixel")}} at a page zoom of `1.0` and using a scale factor of `1.0` on the capturing screen by the vertical size of a pixel from the [display surface](/en-US/docs/Web/API/MediaTrackConstraints/displaySurface).

## Description

It is common for a screen to have zoom applied via the operating system (OS). The resolution before applying the zoom is called the **logical resolution**, and the resolution after the zoom is applied is called the **physical resolution**.

The logical resolution is normally lower than the physical resolution, therefore a video-conferencing app can save bandwidth and CPU by:

1. Removing the zoom applied to the captured display surface by the OS.
2. Sending the video of the screen capture at the logical resolution.
3. Reapplying the zoom after receiving it on the remote client to size it back up to its physical resolution.

Since the logical resolution is normally lower than the actual/physical resolution, the application can save bandwidth and CPU when sending the video using this resolution.

## Examples

### Basic `screenPixelRatio` usage

The following snippet shows how an application may use `screenPixelRatio` to constrain a {{domxref("MediaStreamTrack")}}'s' [`width`](/en-US/docs/Web/API/MediaTrackConstraints/width) and [`height`](/en-US/docs/Web/API/MediaTrackConstraints/height) to the logical resolution when scaling exceeds an acceptable threshold (specified by an application-defined constant).

```js
const RESOLUTION_LIMIT = 1.5;

async function startCapture() {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const track = stream.getVideoTracks()[0];
  const settings = track.getSettings();
  const capabilities = track.getCapabilities();

  if (track.screenPixelRatio > RESOLUTION_LIMIT) {
    let physicalWidth = capabilities.width.max;
    let physicalHeight = capabilities.height.max;
    let logicalWidth = physicalWidth / settings.screenPixelRatio;
    let logicalHeight = physicalHeight / settings.screenPixelRatio;
    await track.applyConstraints({
      width: logicalWidth,
      height: logicalHeight,
    });
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackSettings")}}
