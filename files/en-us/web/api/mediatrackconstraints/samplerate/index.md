---
title: "MediaTrackConstraints: sampleRate property"
short-title: sampleRate
slug: Web/API/MediaTrackConstraints/sampleRate
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.sampleRate_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`sampleRate`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.sampleRate", "sampleRate")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.sampleRate")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

If this value is a number, the user agent will attempt to obtain media whose sample
rate is as close as possible to this number given the capabilities of the hardware and
the other constraints specified. Otherwise, the value of this
[`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will guide the user agent in its efforts to provide an
exact match to the required sample rate (if `exact` is specified or both
`min` and `max` are provided and have the same value) or to a
best-possible value.

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
