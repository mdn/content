---
title: MediaTrackSettings.sampleRate
slug: Web/API/MediaTrackSettings/sampleRate
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
  - sampleRate
browser-compat: api.MediaTrackSettings.sampleRate
---
{{APIRef("Media Capture and Streams")}}

The {{domxref("MediaTrackSettings")}} dictionary's
**`sampleRate`** property is an integer indicating how many
audio samples per second the {{domxref("MediaStreamTrack")}} is currently configured
for. This lets you determine what value was selected to comply with your specified
constraints for this property's value as described in the
{{domxref("MediaTrackConstraints.sampleRate")}} property you provided when calling
either {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} or
{{domxref("MediaStreamTrack.applyConstraints()")}}.

If needed, you can determine whether or not this constraint is supported by checking
the value of {{domxref("MediaTrackSupportedConstraints.sampleRate")}} as returned by a
call to {{domxref("MediaDevices.getSupportedConstraints()")}}. However, typically this
is unnecessary since browsers will ignore any constraints they're unfamiliar with.

## Syntax

```js
var sampleRate = MediaTrackSettings.sampleRate;
```

### Value

An integer value indicating how many samples each second of audio data includes. Common
values include 44,100 (standard CD audio), 48,000 (standard digital audio), 96,000
(commonly used in audio mastering and post-production), and 192,000 (used for
high-resolution audio in professional recording and mastering sessions). However, lower
values are often used to reduce bandwidth requirements; 8,000 samples per second is
adequate for comprehensible albeit imperfect human speech, and both 11,025 FPS and
22,050 FPS are often used for low-bandwidth, reduced quality sound and music.

## Example

See {{SectionOnPage("/en-US/docs/Web/API/Media_Streams_API/Constraints", "Example:
  Constraint exerciser")}} for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Capture and Streams API](/en-US/docs/Web/API/Media_Streams_API)
- [Capabilities,
  constraints, and settings](/en-US/docs/Web/API/Media_Streams_API/Constraints)
- {{domxref("MediaTrackConstraints.sampleRate")}}
- {{domxref("MediaTrackSettings")}}
