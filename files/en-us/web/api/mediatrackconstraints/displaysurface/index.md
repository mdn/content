---
title: "MediaTrackConstraints: displaySurface property"
short-title: displaySurface
slug: Web/API/MediaTrackConstraints/displaySurface
page-type: web-api-instance-property
browser-compat: api.MediaTrackConstraints.displaySurface
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's **`displaySurface`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) describing the requested or mandatory constraints placed upon the value of the {{domxref("MediaTrackSettings.displaySurface","displaySurface")}} constrainable property.

This is used to specify the type or types of display surfaces which {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} will let the user select among for sharing purposes.

If needed, you can determine whether or not this constraint is supported by checking the value of {{domxref("MediaTrackSupportedConstraints.displaySurface")}} as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) which specifies the type of display surface that's being captured.
This value _does not_ affect the list of display sources in the browser's user interface.

See [how constraints are defined](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

## Usage notes

You can check the setting selected by the user agent after the display media has been
created by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} by calling
{{domxref("MediaStreamTrack.getSettings", "getSettings()")}} on the display media's
video {{domxref("MediaStreamTrack")}}, then checking the value of the returned
{{domxref("MediaTrackSettings")}} object's
{{domxref("MediaTrackSettings.displaySurface", "displaySurface")}} object.

For example, if your app needs to know when the surface being shared is a monitor — meaning that there's possibly a non-content backdrop being captured — it can use code similar
to this:

```js
let mayHaveBackdropFlag = false;
let displaySurface = displayStream
  .getVideoTracks()[0]
  .getSettings().displaySurface;

if (displaySurface === "monitor") {
  mayHaveBackdropFlag = true;
}
```

Following this code, `mayHaveBackdrop` is `true` if the display
surface contained in the stream is of type `monitor`.
Later code can use this flag to determine whether or not to perform special processing,
such as to remove or replace the backdrop, or to "cut" the individual display areas out
of the received frames of video.

## Examples

Here are some example constraints objects for `getDisplayMedia()` that make
use of the `displaySurface` property. In addition, see the
[Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example
that demonstrates how constraints are used.

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
