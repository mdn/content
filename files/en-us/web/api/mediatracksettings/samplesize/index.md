---
title: MediaTrackSettings.sampleSize
slug: Web/API/MediaTrackSettings/sampleSize
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
  - sampleSize
browser-compat: api.MediaTrackSettings.sampleSize
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`sampleSize`** property is an integer indicating the linear
sample size (in bits per sample) the {{domxref("MediaStreamTrack")}} is currently
configured for. This lets you determine what value was selected to comply with your
specified constraints for this property's value as described in the
{{domxref("MediaTrackConstraints.sampleSize")}} property you provided when calling
either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.sampleSize")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

An integer value indicating how many bits each audio sample is represented by. The most
commonly used sample size for many years now is 16 bits per sample, which was used for
CD audio among others. Other common sample sizes are 8 (for reduced bandwidth
requirements) and 24 (for high-resolution professional audio).

Each audio channel on the track requires sampleSize bits.
That means that a given sample actually uses (`sampleSize`/8)\*{{domxref("MediaTrackSettings.channelCount","channelCount")}} bytes of data.
For example, 16-bit stereo audio requires (16/8)\*2 or 4 bytes per sample.

## Examples

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example: Constraint exerciser")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.sampleSize")}}
- {{domxref("MediaTrackSettings")}}
