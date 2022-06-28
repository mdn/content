---
title: MediaTrackSettings.channelCount
slug: Web/API/MediaTrackSettings/channelCount
page-type: web-api-instance-property
tags:
  - API
  - Audio
  - Media
  - Media Capture and Streams API
  - Media Streams API
  - MediaTrackSettings
  - Property
  - Reference
  - Settings
  - WebRTC
  - channelCount
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

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example:
  Constraint exerciser")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.channelCount")}}
- {{domxref("MediaTrackSettings")}}
