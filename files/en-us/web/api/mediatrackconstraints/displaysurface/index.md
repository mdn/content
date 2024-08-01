---
title: "MediaTrackConstraints: displaySurface property"
short-title: displaySurface
slug: Web/API/MediaTrackConstraints/displaySurface
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.displaySurface_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's **`displaySurface`** property is a [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) describing the preferred value for the {{domxref("MediaTrackSettings.displaySurface","displaySurface")}} constrainable property.

This is set by the application to identify to the user agent the type of display surface (`window`, `browser`, or `monitor`) preferred by the application. It has no effect on what the user can choose to share, but may be used to present the options in a different order.

If needed, you can determine whether or not this constraint is supported by checking the value of {{domxref("MediaTrackSupportedConstraints.displaySurface")}} as returned by a call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A [`ConstrainDOMString`](/en-US/docs/Web/API/MediaTrackConstraints#constraindomstring) which specifies the type of display surface preferred by the application.
This value _does not_ add or remove display sources in the browser's user interface, but may reorder them. You can't use this property to limit the user to a subset of the three display-surface values `window`, `browser`, and `monitor` — but, as you will see below, you can see what was chosen, and reject it.

See [how constraints are defined](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#how_constraints_are_defined).

> [!NOTE]
> You cannot set [`monitorTypeSurfaces: "exclude"`](/en-US/docs/Web/API/MediaDevices/getDisplayMedia#monitortypesurfaces) at the same time as `displaySurface: "monitor"` as the two settings are contradictory. Trying to do so will result in the associated `getDisplayMedia()` call failing with a `TypeError`.

## Usage notes

You can check the setting selected by the user agent after the display media has been
created by {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} by calling
{{domxref("MediaStreamTrack.getSettings", "getSettings()")}} on the display media's
video {{domxref("MediaStreamTrack")}}, then checking the value of the returned
{{domxref("MediaTrackSettings")}} object's
{{domxref("MediaTrackSettings.displaySurface", "displaySurface")}} object.

For example, if your app prefers not to share a monitor — meaning that there's possibly a non-content backdrop being captured — it can use code similar
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
use of the `displaySurface` property.

```js
dsConstraints = { displaySurface: "window" }; // 'browser' and 'monitor' are also possible
applyConstraints(dsConstraints);
// The user still may choose to share the monitor or the browser,
// but we indicated that a window is preferred.
```

In addition, see the
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
