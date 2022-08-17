---
title: MediaTrackSettings.volume
slug: Web/API/MediaTrackSettings/volume
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
  - Volume
  - WebRTC
  - Deprecated
  - Non-standard
browser-compat: api.MediaTrackSettings.volume
---
{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

The {{domxref("MediaTrackSettings")}} dictionary's **`volume`**
property is a double-precision floating-point number indicating the volume of the
{{domxref("MediaStreamTrack")}} as currently configured, as a value from 0.0 (silence)
to 1.0 (maximum supported volume for the device). This lets you determine what value was
selected to comply with your specified constraints for this property's value as
described in the {{domxref("MediaTrackConstraints.volume")}} property you provided when
calling either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.volume")}} as returned by a call
to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this is
unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Value

A double-precision floating-point number indicating the volume, from 0.0 to 1.0, of the
audio track as currently configured.

## Examples

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example: Constraint exerciser")}} for an example.

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities, constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.volume")}}
- {{domxref("MediaTrackSettings")}}
