---
title: "MediaTrackSettings: width property"
short-title: width
slug: Web/API/MediaTrackSettings/width
page-type: web-api-instance-property
browser-compat: api.MediaTrackSettings.width
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's **`width`**
property is an integer indicating the number of pixels wide
{{domxref("MediaStreamTrack")}} is currently configured to be. This lets you determine
what value was selected to comply with your specified constraints for this property's
value as described in the {{domxref("MediaTrackConstraints.width")}} property you
provided when calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}
or {{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.width")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

An integer value indicating the width, in pixels, of the video track as currently configured.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.width")}}
- {{domxref("MediaTrackSettings")}}
