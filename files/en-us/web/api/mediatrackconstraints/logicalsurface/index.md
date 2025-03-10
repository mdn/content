---
title: "MediaTrackConstraints: logicalSurface property"
short-title: logicalSurface
slug: Web/API/MediaTrackConstraints/logicalSurface
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.logicalSurface_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's **`logicalSurface`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) describing the requested or mandatory constraints placed upon the value of the {{domxref("MediaTrackSettings.logicalSurface","logicalSurface")}} constrainable property.

This is used to specify whether or
not {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} should allow the
user to choose display surfaces which are not necessarily fully visible on the screen,
such as occluded windows or the complete content of windows which are large enough to
require scrolling to see their entire contents.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.logicalSurface")}} as returned by
a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A [`ConstrainBoolean`](/en-US/docs/Web/API/MediaTrackConstraints#constrainboolean) which is `true` if logical surfaces should be permitted among the selections available to the user.

See [how constraints are defined](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

## Usage notes

You can check the setting selected by the user agent after the display media has been
created by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} by calling
{{domxref("MediaStreamTrack.getSettings", "getSettings()")}} on the display media's
video {{domxref("MediaStreamTrack")}}, then checking the value of the returned
{{domxref("MediaTrackSettings")}} object's
{{domxref("MediaTrackSettings.logicalSurface", "logicalSurface")}} object.

For example, if your app needs to know if the selected display surface is a logical
one:

```js
let isLogicalSurface = displayStream
  .getVideoTracks()[0]
  .getSettings().logicalSurface;
```

Following this code, `isLogicalSurface` is `true` if the display
surface contained in the stream is a logical surface; that is, one which may not be
entirely onscreen, or may even be entirely offscreen.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
