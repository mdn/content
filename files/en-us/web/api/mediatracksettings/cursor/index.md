---
title: MediaTrackSettings.cursor
slug: Web/API/MediaTrackSettings/cursor
page-type: web-api-instance-property
tags:
  - API
  - Capture
  - Constraints
  - Cursor
  - Media
  - Media Capture and Streaming
  - Media Capture and Streaming API
  - Property
  - Recording
  - Reference
  - Screen Capture
  - Screen Capture API
  - Settings
  - display
  - screen
browser-compat: api.MediaTrackSettings.cursor
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's **`cursor`** property indicates whether or not the cursor should be captured as part of the video track included in the {{domxref("MediaStream")}} returned by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}.

## Value

The value of `cursor` comes from the `CursorCaptureConstraint` enumerated string type, and may have one of the following values:

- `always`
  - : The mouse should always be visible in the video content of the {{domxref("MediaStream")}}, unless the mouse has moved outside the area of the content.
- `motion`
  - : The mouse cursor should always be included in the video if it's moving, and for a short time after it stops moving.
- `never`
  - : The mouse cursor is never included in the shared video.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the screen capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaDevices.getDisplayMedia()")}}
- {{domxref("MediaStreamTrack.getConstraints()")}}
- {{domxref("MediaStreamTrack.applyConstraints()")}}
- {{domxref("MediaStreamTrack.getSettings()")}}
