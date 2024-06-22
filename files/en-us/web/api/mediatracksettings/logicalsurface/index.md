---
title: "MediaTrackSettings: logicalSurface property"
short-title: logicalSurface
slug: Web/API/MediaTrackSettings/logicalSurface
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.logicalSurface_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`logicalSurface`** property indicates whether or not the
display area being captured is a logical surface. Logical surfaces are those which are
not necessarily entirely onscreen, or may even be off-screen, such as windows' backing
buffers (where only part of the buffer is visible without scrolling the containing
window) and offscreen rendering contexts.

## Value

A Boolean value which is `true` if the video track in the stream of captured
video is taken from a logical display surface.

The most common scenario in which a display surface may be a logical one is if the
selected surface contains the entire content area of a window which is too large to
display onscreen at once. Since the window that contains the surface has to be scrolled
to show the rest of the contents, the surface is a logical one.

A visible display surface (that is, a surface for which `logicalSurface`
returns `false`) is the portion of a logical display surface which is
currently visible onscreen.

For example, a user agent _may_ choose to allow the user to choose whether to
share the entire document (a `browser` with `logicalSurface` value
of `true`), or just the currently visible portion of the document (where the
`logicalSurface` of the `browser` surface is `false`).

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
