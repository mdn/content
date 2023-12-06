---
title: "MediaTrackConstraints: channelCount property"
short-title: channelCount
slug: Web/API/MediaTrackConstraints/channelCount
page-type: web-api-instance-property
browser-compat: api.MediaTrackConstraints.channelCount
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`channelCount`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.channelCount", "channelCount")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.channelCount")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

If this value is a number, the user agent will attempt to obtain media whose channel
count is as close as possible to this number given the capabilities of the hardware and
the other constraints specified. Otherwise, the value of this
[`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will guide the user agent in its efforts to provide an
exact match to the required channel count (if `exact` is specified or both
`min` and `max` are provided and have the same value) or to a
best-possible value.

The channel count is 1 for monaural sound, 2 for stereo, and so forth.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
