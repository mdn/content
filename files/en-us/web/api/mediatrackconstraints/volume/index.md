---
title: MediaTrackConstraints.volume
slug: Web/API/MediaTrackConstraints/volume
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Constraints
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Reference
  - Volume
  - WebRTC
  - getusermedia
  - Deprecated
  - Non-standard
browser-compat: api.MediaTrackConstraints.volume
---
{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`volume`** property is a [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.volume", "volume")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.volume")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) describing the acceptable or required value(s) for an
audio track's volume, on a linear scale where 0.0 means silence and 1.0 is the highest
supported volume.

If this value is a number, the user agent will attempt to obtain media whose volume is
as close as possible to this number given the capabilities of the hardware and the other
constraints specified. Otherwise, the value of this [`ConstrainDouble`](/en-US/docs/Web/API/MediaTrackConstraints#constraindouble) will
guide the user agent in its efforts to provide an exact match to the required volume (if
`exact` is specified or both `min` and `max` are
provided and have the same value) or to a best-possible value.

Any constraint set which only permits values outside the range 0.0 to 1.0 cannot be
satisfied and will result in failure.

## Examples

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example: Constraint exerciser")}} for an example.

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
