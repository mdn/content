---
title: MediaTrackSupportedConstraints.logicalSurface
slug: Web/API/MediaTrackSupportedConstraints/logicalSurface
tags:
  - API
  - Capture
  - Logical
  - Media
  - Media Capture and Streams
  - Media Capture and Streams API
  - Reference
  - Screen Capture
  - Screen Capture API
  - Sharing
  - Surface
  - Video
  - display
  - screen
browser-compat: api.MediaTrackSupportedConstraints.logicalSurface
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSupportedConstraints")}} dictionary's
**`logicalSurface`** property indicates whether or not the
{{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}} constraint is
supported by the user agent and the device on which the content is being used.

The supported constraints list is obtained by calling
{{domxref("MediaDevices.getSupportedConstraints",
  "navigator.mediaDevices.getSupportedConstraints()")}}.

## Syntax

```js
isLogicalSurfaceSupported = supportedConstraints.logicalSurface;
```

### Value

A Boolean value which is `true` if the
{{domxref("MediaTrackConstraints.logicalSurface", "logicalSurface")}} constraint is
supported by the device and user agent.

## Example

This method sets up the constraints object specifying the options for the call to
{{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}. It adds the
`logicalSurface` constraint (requesting that only logical display
surfaces—those which may not be entirely visible onscreen—be included among the options
available to the user) only if it is known to be supported by the browser. Capturing is
then started by calling `getDisplayMedia()` and attaching the returned stream
to the video element referenced by the variable `videoElem`.

```js
async function capture() {
  let supportedConstraints = navigator.mediaDevices.getSupportedConstraints();
  let displayMediaOptions = {
    video: {
    },
    audio: false;
  };

  if (supportedConstraints.logicalSurface) {
    displayMediaOptions.video.logicalSurface = "monitor";
  }

  try {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
  } catch(err) {
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
- [Using the
  screen capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities,
  constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
