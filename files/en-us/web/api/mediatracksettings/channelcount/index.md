---
title: "MediaTrackSettings: channelCount property"
short-title: channelCount
slug: Web/API/MediaTrackSettings/channelCount
page-type: web-api-instance-property
browser-compat: api.MediaTrackSettings.channelCount
---

{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`channelCount`** property is an integer indicating how many
audio channels the {{domxref("MediaStreamTrack")}} is currently configured to have. This
lets you determine what value was selected to comply with your specified constraints for
this property's value as described in the
{{domxref("MediaTrackConstraints.channelCount")}} property you provided when calling
either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.channelCount")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

An integer value indicating the number of audio channels on the track. A value of 1
indicates monaural sound, 2 means stereo, and so forth.

## Examples

See the [Constraint exerciser](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints#example_constraint_exerciser) example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Capture_and_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Capture_and_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.channelCount")}}
- {{domxref("MediaTrackSettings")}}
