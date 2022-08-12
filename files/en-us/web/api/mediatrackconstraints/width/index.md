---
title: MediaTrackConstraints.width
slug: Web/API/MediaTrackConstraints/width
page-type: web-api-instance-property
tags:
  - API
  - Constraints
  - Media
  - Media Capture and Streams
  - Media Streams API
  - MediaTrackConstraints
  - Property
  - Reference
  - WebRTC
  - width
browser-compat: api.MediaTrackConstraints.width
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackConstraints")}} dictionary's
**`width`** property is a [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong)
describing the requested or mandatory constraints placed upon the value of the
{{domxref("MediaTrackSettings.width", "width")}} constrainable property.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.width")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

If this value is a number, the user agent will attempt to obtain media whose width is
as close as possible to this number given the capabilities of the hardware and the other
constraints specified. Otherwise, the value of this [`ConstrainULong`](/en-US/docs/Web/API/MediaTrackConstraints#constrainulong) will
guide the user agent in its efforts to provide an exact match to the required width (if
`exact` is specified or both `min` and `max` are
provided and have the same value) or to a best-possible value.

## Examples

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example: Constraint exerciser")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints")}}
- {{domxref("MediaDevices.getSupportedConstraints()")}}
- {{domxref("MediaTrackSupportedConstraints")}}
- {{domxref("MediaStreamTrack")}}
