---
title: "MediaTrackSettings: aspectRatio property"
short-title: aspectRatio
slug: Web/API/MediaTrackSettings/aspectRatio
page-type: web-api-instance-property
browser-compat: api.MediaStreamTrack.applyConstraints.aspectRatio_constraint
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's **`aspectRatio`** property is a double-precision floating-point number indicating the {{glossary("aspect ratio")}} of the {{domxref("MediaStreamTrack")}} as currently configured.
This lets you determine what value was selected to comply with your specified constraints for this property's value as described in the {{domxref("MediaTrackConstraints.aspectRatio")}} property you provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or {{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.aspectRatio")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A double-precision floating-point number indicating the current configuration of the
track's aspect ratio. The aspect ratio is computed by taking the track's width, dividing
by its height, and rounding the result to ten decimal places. For example, the standard
16:9 high-definition aspect ratio can be computed as 1920/1080, or 1.7777777778.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.aspectRatio")}}
- {{domxref("MediaTrackSettings")}}
