---
title: "MediaTrackSupportedConstraints: displaySurface property"
short-title: displaySurface
slug: Web/API/MediaTrackSupportedConstraints/displaySurface
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.displaySurface_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSupportedConstraints")}} dictionary's **`displaySurface`** property indicates whether or not the {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}} constraint is supported by the user agent and the device on which the content is being used.

The supported constraints list is obtained by calling {{domxref("MediaDevices.getSupportedConstraints","navigator.mediaDevices.getSupportedConstraints()")}}.

## Value

A Boolean value which is `true` if the {{domxref("MediaTrackConstraints.displaySurface", "displaySurface")}} constraint is supported by the device and user agent.

## Examples

This method sets up the constraints object specifying the options for the call to
{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. It adds the
`displaySurface` constraint (requesting that only fullscreen sharing be
allowed) only if it is known to be supported by the browser. Capturing is then started
by calling `getDisplayMedia()` and attaching the returned stream to the video
element referenced by the variable `videoElem`.

```js
async function capture() {
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  let displayMediaOptions = {
    video: {},
    audio: false,
  };

  if (supportedConstraints.displaySurface) {
    displayMediaOptions.video.displaySurface = "monitor";
  }

  try {
    videoElem.srcObject =
      await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch (err) {
    /* handle the error */
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the screen capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
