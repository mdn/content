---
title: "MediaTrackSettings: frameRate property"
short-title: frameRate
slug: Web/API/MediaTrackSettings/frameRate
page-type: web-api-instance-property
browser-compat: api.MediaTrackSettings.frameRate
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`frameRate`** property is a double-precision floating-point
number indicating the frame rate, in frames per second, of the
{{domxref("MediaStreamTrack")}} as currently configured. This lets you determine what
value was selected to comply with your specified constraints for this property's value
as described in the {{domxref("MediaTrackConstraints.frameRate")}} property you provided
when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.frameRate")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A double-precision floating-point number indicating the current configuration of the
track's frame rate, in frames per second.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.frameRate")}}
- {{domxref("MediaTrackSettings")}}
