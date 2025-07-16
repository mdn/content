---
title: "MediaTrackSettings: screenPixelRatio property"
short-title: screenPixelRatio
slug: Web/API/MediaTrackSettings/screenPixelRatio
page-type: web-api-instance-property
spec-urls: https://w3c.github.io/mediacapture-screen-share/#dom-mediatracksettings-screenpixelratio
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's **`screenPixelRatio`** property is a number representing the ratio of the physical size of a pixel on the captured display surface (displayed at its physical resolution) to the logical size of a CSS pixel on the capturing screen (displayed at its logical resolution). It cannot be used as a constraint or capability.

This property allows applications using the [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API) to save resources by sending the video of a screen capture at its logical, or device independent, resolution.

## Value

A number representing the screen pixel ratio.

This is calculated by dividing the size of a {{glossary("CSS pixel")}} at a page zoom of `1.0` and using a scale factor of `1.0` on the capturing screen by the vertical size of a pixel from the captured [display surface](/en-US/docs/Web/API/MediaTrackConstraints/displaySurface).

## Description

It is common for a screen to have zoom applied via the operating system (OS), for example when the display is a high-resolution display, and you want the graphics to be shown at the same physical size as they would on a standard resolution display. The resolution before applying the zoom is called the **logical resolution**, and the resolution after the zoom is applied is called the **physical resolution**.

If the sender's captured screen is zoomed in, then the physical resolution is greater than the logical resolution, and a video-conferencing app can therefore save bandwidth and CPU by:

1. Removing the zoom applied to the captured display surface by the OS.
2. Sending the video of the screen capture at the logical resolution.
3. Reapplying the zoom after receiving it on the remote client to size it back up to its physical resolution.

The `screenPixelRatio` property describes the ratio of the physical size of a pixel to the logical size of a CSS pixel, and therefore enables the application to work out how much of a zoom factor has been applied, and then constrain the video to the logical size.

For example:

- If the captured display surface is being displayed on a standard resolution screen where physical pixel dimensions are about the same as CSS pixel dimensions, `screenPixelRatio` will return a value of `1`.
- If, however, the captured display surface is being displayed on a high-dpi resolution screen where physical pixel dimensions are about double the CSS pixel dimensions, `screenPixelRatio` will return a value of `2`.

## Examples

### Basic `screenPixelRatio` usage

In this example, the application defines a constant `RESOLUTION_LIMIT`, which represents the scaling factor beyond which the sending application should send video at the logical resolution rather than the physical resolution.

When `screenPixelRatio` exceeds this limit, the application uses the `screenPixelRatio` value to calculate the logical resolution from the physical resolution, and then constrains the captured {{domxref("MediaStreamTrack")}} to the logical resolution.

```js
const RESOLUTION_LIMIT = 1.5;

async function startCapture() {
  const stream = await navigator.mediaDevices.getDisplayMedia({
    video: true,
  });
  const track = stream.getVideoTracks()[0];
  const settings = track.getSettings();
  const capabilities = track.getCapabilities();

  if (settings.screenPixelRatio > RESOLUTION_LIMIT) {
    const physicalWidth = capabilities.width.max;
    const physicalHeight = capabilities.height.max;
    const logicalWidth = physicalWidth / settings.screenPixelRatio;
    const logicalHeight = physicalHeight / settings.screenPixelRatio;
    await track.applyConstraints({
      width: logicalWidth,
      height: logicalHeight,
    });
  }
}
```

## Specifications

{{Specifications}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackSettings")}}
