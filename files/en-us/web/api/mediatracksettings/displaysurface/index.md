---
title: "MediaTrackSettings: displaySurface property"
short-title: displaySurface
slug: Web/API/MediaTrackSettings/displaySurface
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.displaySurface_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`displaySurface`** property indicates the type of display
surface being captured.

## Value

The value of `displaySurface` is a string that comes from the `DisplayCaptureSurfaceType` enumerated type, and is one of the following:

- `browser`
  - : The stream's video track presents the entire contents of a single browser tab which the user selected during the {{domxref("MediaDevices.getDisplayMedia","getDisplayMedia()")}} call.
- `monitor`
  - : The video track in the stream presents the complete contents of one or more of the
    user's screens. Any empty space (if the displays are of different dimensions) is
    filled with a backdrop chosen by the user agent.
- `window`
  - : The stream's video track presents the contents of a single window selected by the user.
    The window may be from any application, not necessarily just from within the user agent.

Not all user agents support all of these surface types.

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
